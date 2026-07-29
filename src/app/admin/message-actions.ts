"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "@/lib/admin-auth";

export async function updateContactMessageStatus(formData: FormData) {
  const { supabase } = await requireAdmin();
  const messageId = Number(formData.get("messageId"));
  const status = String(formData.get("status") ?? "");

  if (!Number.isInteger(messageId) || !["new", "read", "replied"].includes(status)) {
    throw new Error("Invalid message update request.");
  }

  const { error } = await supabase
    .from("contact_messages")
    .update({ status, is_read: status !== "new" })
    .eq("id", messageId);

  if (error) throw new Error("Unable to update the message status.");
  revalidatePath("/admin/messages");
  revalidatePath("/admin");
}
