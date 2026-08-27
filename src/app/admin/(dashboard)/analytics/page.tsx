import type { Metadata } from "next";

import { AdminActionForm } from "@/components/admin-action-form";
import { requireAdmin } from "@/lib/admin-auth";
import {
  getBingSearchPerformance,
  getGoogleSearchPerformance,
  type SearchPerformanceResult,
} from "@/lib/search-performance";

export const metadata: Metadata = {
  title: "Analytics",
  robots: { index: false, follow: false },
};

type AnalyticsRow = {
  event_type: "page_view" | "click";
  path: string;
  target: string | null;
  label: string | null;
  session_id: string;
  created_at: string;
};

type SiteSettingsRow = {
  google_site_verification: string | null;
  bing_site_verification: string | null;
  facebook_pixel_id: string | null;
  google_analytics_id: string | null;
  google_tag_manager_id: string | null;
};

function toTopItems(values: string[], limit = 8) {
  const counts = new Map<string, number>();

  for (const value of values) {
    counts.set(value, (counts.get(value) ?? 0) + 1);
  }

  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, limit);
}

function SearchTable({
  title,
  source,
}: {
  title: string;
  source: SearchPerformanceResult;
}) {
  return (
    <section className="analytics-panel search-performance-panel">
      <div className="analytics-panel-heading">
        <div>
          <span>SEARCH PERFORMANCE</span>
          <h2>{title}</h2>
        </div>
        <span
          className={`connection-status ${
            source.configured && !source.error ? "connected" : ""
          }`}
        >
          {!source.configured
            ? "Setup required"
            : source.error
              ? "Connection issue"
              : "Connected"}
        </span>
      </div>

      {!source.configured ? (
        <p className="analytics-setup-message">
          Server credentials configure করলে keyword, clicks, impressions, CTR
          ও average ranking position এখানে দেখা যাবে।
        </p>
      ) : source.error ? (
        <p className="analytics-error">{source.error}</p>
      ) : source.rows.length ? (
        <div className="analytics-table-wrap">
          <table className="analytics-table">
            <thead>
              <tr>
                <th>Keyword / query</th>
                <th>Clicks</th>
                <th>Impressions</th>
                <th>CTR</th>
                <th>Avg. position</th>
              </tr>
            </thead>
            <tbody>
              {source.rows.slice(0, 15).map((row) => (
                <tr key={row.query}>
                  <td>{row.query}</td>
                  <td>{row.clicks.toLocaleString()}</td>
                  <td>{row.impressions.toLocaleString()}</td>
                  <td>{(row.ctr * 100).toFixed(1)}%</td>
                  <td>{row.position.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="analytics-setup-message">
          Connection ঠিক আছে, কিন্তু selected period-এ search data পাওয়া যায়নি।
        </p>
      )}
    </section>
  );
}

function SeoSetupPanel({ settings }: { settings: SiteSettingsRow | null }) {
  return (
    <section className="analytics-panel seo-setup-panel">
      <div className="analytics-panel-heading">
        <div>
          <span>SEO SETUP</span>
          <h2>Verification &amp; tracking IDs</h2>
        </div>
      </div>
      {!settings ? (
        <section className="admin-course-setup">
          <strong>Site settings table পাওয়া যায়নি</strong>
          <p>Apply the latest Supabase migration, then reload this page.</p>
          <code>supabase db push</code>
        </section>
      ) : (
        <>
          <p className="analytics-setup-message">
            নিচের value গুলো save করলে সাথে সাথে পুরো website-এর প্রতিটি
            page-এ apply হয়ে যাবে — আলাদা করে কোনো code deploy করার দরকার
            নেই।
          </p>
          <AdminActionForm
            actionName="updateSiteSettings"
            className="admin-content-form"
            successMessage="SEO ও tracking setup save হয়েছে।"
          >
            <label>
              Google Search Console verification
              <input
                name="googleSiteVerification"
                defaultValue={settings.google_site_verification ?? ""}
                placeholder="google-site-verification meta tag এর content value"
              />
            </label>
            <label>
              Bing Webmaster Tools verification
              <input
                name="bingSiteVerification"
                defaultValue={settings.bing_site_verification ?? ""}
                placeholder="msvalidate.01 meta tag এর content value"
              />
            </label>
            <label>
              Facebook Pixel ID
              <input
                name="facebookPixelId"
                defaultValue={settings.facebook_pixel_id ?? ""}
                placeholder="যেমন 1234567890123456"
              />
            </label>
            <label>
              Google Analytics (GA4) Measurement ID
              <input
                name="googleAnalyticsId"
                defaultValue={settings.google_analytics_id ?? ""}
                placeholder="যেমন G-XXXXXXXXXX"
              />
            </label>
            <label>
              Google Tag Manager ID
              <input
                name="googleTagManagerId"
                defaultValue={settings.google_tag_manager_id ?? ""}
                placeholder="যেমন GTM-XXXXXXX"
              />
            </label>
            <button className="admin-submit-button" type="submit">
              Save SEO setup
            </button>
          </AdminActionForm>
        </>
      )}
    </section>
  );
}

export default async function AdminAnalyticsPage() {
  const { supabase } = await requireAdmin();
  const now = new Date();
  const cutoff = new Date(now);
  cutoff.setUTCDate(cutoff.getUTCDate() - 30);
  const today = now.toISOString().slice(0, 10);

  const [{ data, error }, google, bing, { data: siteSettings }] = await Promise.all([
    supabase
      .from("analytics_events")
      .select("event_type,path,target,label,session_id,created_at")
      .gte("created_at", cutoff.toISOString())
      .order("created_at", { ascending: false })
      .limit(10000),
    getGoogleSearchPerformance(),
    getBingSearchPerformance(),
    supabase
      .from("site_settings")
      .select(
        "google_site_verification,bing_site_verification,facebook_pixel_id,google_analytics_id,google_tag_manager_id",
      )
      .eq("id", true)
      .maybeSingle<SiteSettingsRow>(),
  ]);

  const events = (data ?? []) as AnalyticsRow[];
  const pageViews = events.filter((event) => event.event_type === "page_view");
  const clicks = events.filter((event) => event.event_type === "click");
  const topPages = toTopItems(pageViews.map((event) => event.path));
  const topClicks = toTopItems(
    clicks.map(
      (event) => event.label || event.target || `Click on ${event.path}`,
    ),
  );
  const uniqueVisitors = new Set(pageViews.map((event) => event.session_id)).size;
  const todayViews = pageViews.filter((event) =>
    event.created_at.startsWith(today),
  ).length;
  const maxPageViews = topPages[0]?.count || 1;

  return (
    <>
      <header className="admin-page-header">
        <div>
          <span>WEBSITE ANALYTICS</span>
          <h1>Visitors, clicks & search visibility</h1>
          <p>
            গত ৩০ দিনের privacy-safe website activity এবং search engine
            performance।
          </p>
        </div>
      </header>

      {error ? (
        <section className="analytics-notice">
          <strong>Analytics migration প্রয়োজন</strong>
          <p>
            Database-এ analytics_events table পাওয়া যায়নি। Latest Supabase
            migration apply করুন।
          </p>
        </section>
      ) : null}

      <SeoSetupPanel settings={siteSettings ?? null} />

      <section className="admin-stats analytics-stats">
        <article>
          <span>Page views · 30 days</span>
          <strong>{pageViews.length.toLocaleString()}</strong>
          <p>{todayViews.toLocaleString()} views today</p>
        </article>
        <article>
          <span>Unique sessions</span>
          <strong>{uniqueVisitors.toLocaleString()}</strong>
          <p>No personal identity stored</p>
        </article>
        <article>
          <span>Tracked clicks</span>
          <strong>{clicks.length.toLocaleString()}</strong>
          <p>Links, buttons and calls-to-action</p>
        </article>
      </section>

      <div className="analytics-grid">
        <section className="analytics-panel">
          <div className="analytics-panel-heading">
            <div>
              <span>CONTENT</span>
              <h2>Top pages</h2>
            </div>
          </div>
          {topPages.length ? (
            <div className="analytics-ranking">
              {topPages.map((page) => (
                <div key={page.name}>
                  <div>
                    <strong>{page.name}</strong>
                    <span>{page.count}</span>
                  </div>
                  <i
                    style={{
                      width: `${Math.max(8, (page.count / maxPageViews) * 100)}%`,
                    }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="analytics-setup-message">
              নতুন visits আসার পর top pages এখানে দেখা যাবে।
            </p>
          )}
        </section>

        <section className="analytics-panel">
          <div className="analytics-panel-heading">
            <div>
              <span>INTERACTIONS</span>
              <h2>Most-clicked elements</h2>
            </div>
          </div>
          {topClicks.length ? (
            <ol className="analytics-click-list">
              {topClicks.map((click) => (
                <li key={click.name}>
                  <span>{click.name}</span>
                  <strong>{click.count}</strong>
                </li>
              ))}
            </ol>
          ) : (
            <p className="analytics-setup-message">
              Button/link clicks আসার পর interaction ranking দেখা যাবে।
            </p>
          )}
        </section>
      </div>

      <SearchTable title="Google Search Console" source={google} />
      <SearchTable title="Bing Webmaster Tools" source={bing} />

      <p className="analytics-footnote">
        “Average position” live incognito rank নয়; এটি search engine-এর reported
        average position। Google data সাধারণত ২–৩ দিন delayed হতে পারে।
      </p>
    </>
  );
}
