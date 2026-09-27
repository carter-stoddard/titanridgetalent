import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildBrandedEmail, parseRecipients } from "@/lib/email";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
// Comma-separated list supported. Defaults to both partners (see src/lib/email.ts).
const TO_EMAILS = parseRecipients(process.env.CONTACT_TO_EMAIL);
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ??
  "Titan Ridge Forms <forms@titanridgetalent.com>";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  role?: string;
  message?: string;
  // honeypot
  website?: string;
};

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  if (!RESEND_API_KEY) {
    return NextResponse.json(
      { ok: false, error: "Server is missing email configuration." },
      { status: 500 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: if the hidden field is filled, treat as spam and silently succeed.
  if (payload.website && payload.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = (payload.name ?? "").trim();
  const email = (payload.email ?? "").trim();
  const company = (payload.company ?? "").trim();
  const phone = (payload.phone ?? "").trim();
  const role = (payload.role ?? "").trim();
  const message = (payload.message ?? "").trim();

  if (!name || !email || !isEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please include a valid name and email address." },
      { status: 400 }
    );
  }

  const isCompany = role === "company";
  const isCandidate = role === "professional";
  const roleLabel = isCompany
    ? "Company looking to hire"
    : isCandidate
    ? "Professional looking for work"
    : "Not specified";

  const subject = isCompany
    ? `🚨 NEW HIRING REQUEST — ${name}${company ? ` (${company})` : ""}`
    : isCandidate
    ? `🚨 NEW CANDIDATE INQUIRY — ${name}`
    : `🚨 NEW WEBSITE MESSAGE — ${name}`;

  const phoneDigits = phone.replace(/[^\d+]/g, "");

  const { html, text } = buildBrandedEmail({
    eyebrow: "Website Contact Form",
    title: isCompany ? "New Hiring Request" : isCandidate ? "New Candidate Inquiry" : "New Message",
    intro: isCompany
      ? `${name}${company ? ` from ${company}` : ""} wants to talk about hiring. Reach out within one business day.`
      : isCandidate
      ? `${name} is looking for work and wants to hear from you.`
      : `${name} sent a message through the contact page.`,
    rows: [
      { label: "Name", value: name },
      { label: "Email", value: email, href: `mailto:${email}` },
      ...(phone ? [{ label: "Phone", value: phone, href: phoneDigits ? `tel:${phoneDigits}` : undefined }] : [{ label: "Phone", value: "Not provided" }]),
      { label: "Company", value: company || "Not provided" },
      { label: "They are a", value: roleLabel },
    ],
    message: { label: "Message", text: message || "(no message provided)" },
    cta: { label: `Reply to ${name.split(" ")[0]}`, href: `mailto:${email}?subject=${encodeURIComponent("Re: Titan Ridge Talent")}` },
    cta2: phoneDigits ? { label: "Call", href: `tel:${phoneDigits}` } : undefined,
    footer: "Submitted from titanridgetalent.com/contact",
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
      console.error("[contact] Resend error:", error);
      return NextResponse.json({ ok: false, error: "Failed to send. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json({ ok: false, error: "Unexpected server error." }, { status: 500 });
  }
}
