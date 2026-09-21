"use server";

export type LeadIntent = "shortlist" | "tour" | "cost_question" | "operator";

export async function submitLead(formData: FormData) {
  const payload = {
    intent: String(formData.get("intent") ?? "shortlist"),
    name: String(formData.get("name") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    suburb: String(formData.get("suburb") ?? "").trim(),
    care: String(formData.get("care") ?? "").trim(),
    spanish: String(formData.get("spanish") ?? "").trim(),
    facilitySlug: String(formData.get("facilitySlug") ?? "").trim(),
    notes: String(formData.get("notes") ?? "").trim(),
    path: String(formData.get("path") ?? "").trim(),
    emailed: false,
    stored: "console-only",
  };

  // Draft scaffold: no CRM write, no owner email, no auto-send.
  console.log("[Senior List lead stub — no email send]", payload);

  return {
    ok: true as const,
    emailed: false,
    message:
      "Saved locally in the server log only. No email was sent to families or operators.",
  };
}
