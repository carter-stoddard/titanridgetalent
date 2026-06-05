import { NextResponse } from "next/server";
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "support@titanridgetalent.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ??
  "Titan Ridge Forms <forms@titanridgetalent.com>";

const SUBJECT = "NEW CONTACT FORM SUBMISSION - TITANRIDGETALENT.COM";

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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

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
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
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

  const lines: Array<[string, string]> = [
    ["Name", name],
    ["Email", email],
    ["Company", company || "—"],
    ["Phone", phone || "—"],
    ["I am a", role || "—"],
  ];

  const html = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; color: #141F31;">
      <h2 style="margin: 0 0 16px; font-size: 18px; letter-spacing: 1px; text-transform: uppercase; color: #CCA662;">New Contact Form Submission</h2>
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
        ${lines
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding: 8px 12px 8px 0; vertical-align: top; color: #6b6b6b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; width: 100px;">${escapeHtml(label)}</td>
            <td style="padding: 8px 0; vertical-align: top; color: #141F31; font-size: 15px;">${escapeHtml(value)}</td>
          </tr>`
          )
          .join("")}
      </table>
      <div style="border-top: 2px solid #CCA662; padding-top: 16px;">
        <p style="margin: 0 0 8px; color: #6b6b6b; font-size: 13px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
        <p style="margin: 0; color: #141F31; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message || "(no message provided)")}</p>
      </div>
      <p style="margin-top: 32px; color: #999; font-size: 12px;">Submitted from titanridgetalent.com</p>
    </div>
  `;

  const text = [
    ...lines.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    message || "(no message provided)",
  ].join("\n");

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email,
      subject: SUBJECT,
      html,
      text,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Failed to send. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
