import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildBrandedEmail, parseRecipients } from "@/lib/email";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
// Comma-separated list supported. Falls back to CONTACT_TO_EMAIL, then both partners.
const TO_EMAILS = parseRecipients(process.env.CAREERS_TO_EMAIL ?? process.env.CONTACT_TO_EMAIL);
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ??
  "Titan Ridge Forms <forms@titanridgetalent.com>";

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function str(form: FormData, key: string): string {
  const v = form.get(key);
  return typeof v === "string" ? v.trim() : "";
}

const WORK_TYPE_LABEL: Record<string, string> = {
  industrial: "Industrial",
  administrative: "Administrative",
  either: "Open to either",
};

export async function POST(request: Request) {
  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { ok: false, error: "Server is missing email configuration." },
      { status: 500 }
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: if the hidden field is filled, treat as spam and silently succeed.
  if (str(form, "website").length > 0) {
    return NextResponse.json({ ok: true });
  }

  const firstName = str(form, "firstName");
  const lastName = str(form, "lastName");
  const name = `${firstName} ${lastName}`.trim();
  const title = str(form, "title");
  const email = str(form, "email");
  const phone = str(form, "phone");
  const workType = str(form, "workType");

  if (!firstName || !lastName || !title) {
    return NextResponse.json(
      { ok: false, error: "Please include your first name, last name, and current title." },
      { status: 400 }
    );
  }
  if (!email || !isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please include a valid email address." },
      { status: 400 }
    );
  }

  const workLabel = WORK_TYPE_LABEL[workType] ?? "Not specified";
  const phoneDigits = phone.replace(/[^\d+]/g, "");
  const subject = `🚨 NEW JOB APPLICATION — ${name} · ${title}`;

  const { html, text } = buildBrandedEmail({
    eyebrow: "Website Careers Form",
    title: "New Job Application",
    intro: `${name} (${title}) wants to join the Titan Ridge network.`,
    rows: [
      { label: "Name", value: name },
      { label: "Title", value: title },
      { label: "Type of Work", value: workLabel },
      { label: "Email", value: email, href: `mailto:${email}` },
      phone
        ? { label: "Phone", value: phone, href: phoneDigits ? `tel:${phoneDigits}` : undefined }
        : { label: "Phone", value: "Not provided" },
    ],
    cta: { label: `Reply to ${firstName}`, href: `mailto:${email}?subject=${encodeURIComponent("Re: Your application to Titan Ridge Talent")}` },
    cta2: phoneDigits ? { label: "Call", href: `tel:${phoneDigits}` } : undefined,
    footer: "Submitted from titanridgetalent.com/careers",
  });

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAILS,
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("[careers] Resend error:", error);
      return NextResponse.json({ ok: false, error: "Failed to send. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[careers] unexpected error:", err);
    return NextResponse.json({ ok: false, error: "Unexpected server error." }, { status: 500 });
  }
}
