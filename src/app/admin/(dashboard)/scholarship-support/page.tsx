import type { Metadata } from "next";
import Link from "next/link";

import { requireAdmin } from "@/lib/admin-auth";
import { ScholarshipRequestCard, type SupportRequest } from "./request-card";
import { ScholarshipFilters } from "./filters";
import type { ScholarshipRecommendation } from "./recommendations";

export const metadata: Metadata = {
  title: "Scholarship Support",
  robots: { index: false, follow: false },
};

const PAGE_SIZE = 10;
const STATUSES = ["new", "read", "replied"] as const;

export default async function AdminScholarshipSupportPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; status?: string; country?: string; degree?: string }>;
}) {
  const { supabase } = await requireAdmin();
  const params = await searchParams;

  const status = STATUSES.includes(params.status as (typeof STATUSES)[number]) ? params.status! : "all";
  const country = params.country ?? "all";
  const degree = params.degree ?? "all";

  const activeFilters: Record<string, string> = { topic: "scholarship-support" };
  if (status !== "all") activeFilters.status = status;
  if (country !== "all") activeFilters.target_country = country;
  if (degree !== "all") activeFilters.target_degree = degree;

  const [{ count: totalCount }, { count: newCount }, { count: filteredCount }] = await Promise.all([
    supabase
      .from("contact_messages")
      .select("*", { count: "exact", head: true })
      .eq("topic", "scholarship-support"),
    supabase
      .from("contact_messages")
      .select("*", { count: "exact", head: true })
      .eq("topic", "scholarship-support")
      .eq("status", "new"),
    supabase
      .from("contact_messages")
      .select("*", { count: "exact", head: true })
      .match(activeFilters),
  ]);

  const totalPages = Math.max(1, Math.ceil((filteredCount ?? 0) / PAGE_SIZE));
  const requestedPage = Math.max(1, Number.parseInt(params.page ?? "1", 10) || 1);
  const currentPage = Math.min(requestedPage, totalPages);
  const from = (currentPage - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const { data, error } = await supabase
    .from("contact_messages")
    .select("id,name,email,subject,message,status,admin_reply,replied_at,created_at,target_country,target_degree,background,goals,drive_link")
    .match(activeFilters)
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) throw new Error("Unable to load scholarship support requests.");
  const requests = (data ?? []) as SupportRequest[];

  const requestIds = requests.map((request) => request.id);
  const recommendationsByRequest = new Map<number, ScholarshipRecommendation[]>();
  if (requestIds.length > 0) {
    const { data: recommendationRows, error: recommendationsError } = await supabase
      .from("scholarship_recommendations")
      .select("id,request_id,scholarship_name,university,degree_level,country,deadline,link,notes,created_at")
      .in("request_id", requestIds)
      .order("created_at", { ascending: false });
    if (recommendationsError) throw new Error("Unable to load scholarship recommendations.");
    for (const recommendation of (recommendationRows ?? []) as ScholarshipRecommendation[]) {
      const existing = recommendationsByRequest.get(recommendation.request_id) ?? [];
      existing.push(recommendation);
      recommendationsByRequest.set(recommendation.request_id, existing);
    }
  }

  const isFiltered = status !== "all" || country !== "all" || degree !== "all";
  const pageQuery = (page: number) => {
    const query = new URLSearchParams();
    if (status !== "all") query.set("status", status);
    if (country !== "all") query.set("country", country);
    if (degree !== "all") query.set("degree", degree);
    query.set("page", String(page));
    return `/admin/scholarship-support?${query}`;
  };

  return (
    <>
      <header className="admin-page-header">
        <div>
          <span>STUDENT SUPPORT</span>
          <h1>Scholarship Support</h1>
          <p>Logged-in users-এর scholarship guidance request, target country/degree ও CV/transcript link এখানে দেখুন।</p>
        </div>
        <span className="admin-user-total">{newCount ?? 0} new · {totalCount ?? 0} total</span>
      </header>

      <ScholarshipFilters status={status} country={country} degree={degree} />

      <section className="admin-message-list">
        {requests.length === 0 ? (
          <div className="admin-empty-state">
            <strong>{isFiltered ? "No requests match these filters" : "No requests yet"}</strong>
            <p>
              {isFiltered
                ? "একটু ফিল্টার বদলে দেখুন, অথবা সব request দেখতে filter clear করুন।"
                : "/account/scholarship-support থেকে আসা নতুন request এখানে দেখা যাবে।"}
            </p>
          </div>
        ) : requests.map((request) => (
          <ScholarshipRequestCard
            request={request}
            recommendations={recommendationsByRequest.get(request.id) ?? []}
            key={request.id}
          />
        ))}
      </section>

      {totalPages > 1 ? (
        <nav className="admin-pagination" aria-label="Scholarship support pages">
          {currentPage > 1 ? (
            <Link href={pageQuery(currentPage - 1)}>← Previous</Link>
          ) : (
            <span className="disabled">← Previous</span>
          )}
          <span className="admin-pagination-status">Page {currentPage} of {totalPages}</span>
          {currentPage < totalPages ? (
            <Link href={pageQuery(currentPage + 1)}>Next →</Link>
          ) : (
            <span className="disabled">Next →</span>
          )}
        </nav>
      ) : null}
    </>
  );
}
