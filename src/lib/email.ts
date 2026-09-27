// Shared branded email template for form notifications.
// Inline styles only — email clients ignore <style> blocks and web fonts are
// best-effort (Google Fonts link + safe fallbacks).

export const DEFAULT_RECIPIENTS = [
  "Edgar.carballo@titanridgetalent.com",
  "Adrian.ibarra@titanridgetalent.com",
];

export function parseRecipients(value: string | undefined): string[] {
  const list = (value ?? "")
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);
  return list.length ? list : DEFAULT_RECIPIENTS;
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const NAVY = "#141F31";
const GOLD = "#CCA662";
const CREAM = "#F5F4F0";
const INK = "#2A2A2A";
const DISPLAY = "'Barlow Condensed', 'Arial Narrow', Impact, Arial, sans-serif";
const BODY = "Lora, Georgia, 'Times New Roman', serif";

export type EmailRow = { label: string; value: string; href?: string };

export type BrandedEmailOptions = {
  /** Small gold label above the title, e.g. "Website Form" */
  eyebrow: string;
  /** Big headline, e.g. "New Hiring Request" */
  title: string;
  /** One-line context under the title */
  intro?: string;
  rows: EmailRow[];
  /** Optional free-text block (the visitor's message) */
  message?: { label: string; text: string };
  /** Primary action button */
  cta?: { label: string; href: string };
  /** Secondary action button */
  cta2?: { label: string; href: string };
  /** Footer note, e.g. "Submitted from titanridgetalent.com/contact" */
  footer: string;
};

export function buildBrandedEmail(o: BrandedEmailOptions): { html: string; text: string } {
  const rowsHtml = o.rows
    .map(({ label, value, href }) => {
      const v = escapeHtml(value);
      const cell = href
        ? `<a href="${escapeHtml(href)}" style="color:${NAVY};text-decoration:underline;text-underline-offset:3px;">${v}</a>`
        : v;
      return `
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #E3E0D8;vertical-align:top;width:160px;font-family:${DISPLAY};font-size:12px;letter-spacing:2px;text-transform:uppercase;color:${GOLD};font-weight:700;">${escapeHtml(label)}</td>
          <td style="padding:14px 0;border-bottom:1px solid #E3E0D8;vertical-align:top;font-family:${BODY};font-size:17px;line-height:1.5;color:${NAVY};">${cell}</td>
        </tr>`;
    })
    .join("");

  const button = (label: string, href: string, primary: boolean) =>
    `<a href="${escapeHtml(href)}" style="display:inline-block;padding:16px 30px;border-radius:999px;font-family:${DISPLAY};font-size:14px;font-weight:700;letter-spacing:3px;text-transform:uppercase;text-decoration:none;${
      primary ? `background:${GOLD};color:${NAVY};` : `background:transparent;color:${NAVY};border:1.5px solid ${NAVY};`
    }margin:0 10px 10px 0;">${escapeHtml(label)}</a>`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Lora:wght@400;500&display=swap" rel="stylesheet">
  <title>${escapeHtml(o.title)}</title>
</head>
<body style="margin:0;padding:0;background:${CREAM};">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${CREAM};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;">
          <!-- Header -->
          <tr>
            <td style="background:${NAVY};padding:36px 40px 32px;border-top:4px solid ${GOLD};">
              <div style="font-family:${DISPLAY};font-size:11px;letter-spacing:4px;text-transform:uppercase;color:${GOLD};font-weight:700;">${escapeHtml(o.eyebrow)}</div>
              <div style="font-family:${DISPLAY};font-size:38px;line-height:1;letter-spacing:-0.5px;text-transform:uppercase;color:#FFFFFF;font-weight:700;margin-top:14px;">${escapeHtml(o.title)}</div>
              ${o.intro ? `<div style="font-family:${BODY};font-size:16px;line-height:1.5;color:rgba(245,244,240,0.78);margin-top:14px;">${escapeHtml(o.intro)}</div>` : ""}
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="background:#FFFFFF;padding:32px 40px 36px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-top:1px solid #E3E0D8;">
                ${rowsHtml}
              </table>
              ${
                o.message
                  ? `<div style="margin-top:28px;">
                <div style="font-family:${DISPLAY};font-size:12px;letter-spacing:2px;text-transform:uppercase;color:${GOLD};font-weight:700;">${escapeHtml(o.message.label)}</div>
                <div style="margin-top:10px;padding:18px 20px;background:${CREAM};font-family:${BODY};font-size:17px;line-height:1.65;color:${INK};white-space:pre-wrap;">${escapeHtml(o.message.text)}</div>
              </div>`
                  : ""
              }
              ${
                o.cta || o.cta2
                  ? `<div style="margin-top:32px;">${o.cta ? button(o.cta.label, o.cta.href, true) : ""}${o.cta2 ? button(o.cta2.label, o.cta2.href, false) : ""}</div>`
                  : ""
              }
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:22px 40px;">
              <div style="font-family:${DISPLAY};font-size:11px;letter-spacing:2px;text-transform:uppercase;color:${GOLD};font-weight:700;">Titan Ridge Talent</div>
              <div style="font-family:${BODY};font-size:13px;color:#7A7A7A;margin-top:6px;">${escapeHtml(o.footer)}</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    o.title.toUpperCase(),
    o.intro ?? "",
    "",
    ...o.rows.map(({ label, value }) => `${label}: ${value}`),
    ...(o.message ? ["", `${o.message.label}:`, o.message.text] : []),
    "",
    o.footer,
  ].join("\n");

  return { html, text };
}
