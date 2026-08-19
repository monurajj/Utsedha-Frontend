import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, company, projectType, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 400 },
    );
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 500 },
    );
  }

  // Email 1 — internal notification to UUPL
  const internalHtml = `
    <div style="font-family:sans-serif;max-width:600px;color:#1a1a2e">
      <h2 style="color:#d6293e;margin-bottom:4px">New quote request — UUPL</h2>
      <p style="color:#888;font-size:13px;margin-top:0">Received via utsedha.com contact form</p>
      <table style="width:100%;border-collapse:collapse;margin-top:16px">
        <tr>
          <td style="padding:10px 14px;background:#f4f6fb;font-weight:600;width:160px;font-size:14px">Name</td>
          <td style="padding:10px 14px;border-bottom:1px solid #e0e4ef;font-size:14px">${name}</td>
        </tr>
        <tr>
          <td style="padding:10px 14px;background:#f4f6fb;font-weight:600;font-size:14px">Email</td>
          <td style="padding:10px 14px;border-bottom:1px solid #e0e4ef;font-size:14px">
            <a href="mailto:${email}" style="color:#d6293e">${email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:10px 14px;background:#f4f6fb;font-weight:600;font-size:14px">Company</td>
          <td style="padding:10px 14px;border-bottom:1px solid #e0e4ef;font-size:14px">${company || "—"}</td>
        </tr>
        <tr>
          <td style="padding:10px 14px;background:#f4f6fb;font-weight:600;font-size:14px">Project type</td>
          <td style="padding:10px 14px;border-bottom:1px solid #e0e4ef;font-size:14px">${projectType}</td>
        </tr>
        <tr>
          <td style="padding:10px 14px;background:#f4f6fb;font-weight:600;font-size:14px;vertical-align:top">Message</td>
          <td style="padding:10px 14px;font-size:14px;white-space:pre-wrap">${message}</td>
        </tr>
      </table>
      <hr style="margin:24px 0;border:none;border-top:1px solid #e0e4ef"/>
      <p style="font-size:12px;color:#aaa;margin:0">Sent via utsedha.com · info@utsedha.com · +91 78766 00529</p>
    </div>
  `;

  // Email 2 — confirmation to the user
  const confirmationHtml = `
    <div style="font-family:sans-serif;max-width:600px;color:#1a1a2e">
      <div style="background:#0a0f1a;padding:24px 28px;border-radius:4px 4px 0 0">
        <h1 style="color:#e8ecf3;font-size:22px;margin:0;letter-spacing:-0.5px">Utsedha Unmanned</h1>
        <p style="color:#7c89a3;font-size:11px;margin:4px 0 0;letter-spacing:2px;text-transform:uppercase">High-Rise Facade Painting</p>
      </div>
      <div style="background:#ffffff;padding:28px;border:1px solid #e0e4ef;border-top:none;border-radius:0 0 4px 4px">
        <h2 style="color:#1a1a2e;font-size:20px;margin:0 0 8px">Thanks, ${name} — we got your request.</h2>
        <p style="color:#4a5568;font-size:15px;line-height:1.6;margin:0 0 20px">
          We've received your quote request and will get back to you within one business day.
        </p>
        <div style="background:#f4f6fb;border-left:3px solid #d6293e;padding:14px 16px;border-radius:0 4px 4px 0;margin-bottom:24px">
          <p style="margin:0;font-size:13px;color:#555;font-weight:600;text-transform:uppercase;letter-spacing:1px">Your request summary</p>
          <table style="width:100%;border-collapse:collapse;margin-top:10px">
            <tr>
              <td style="font-size:13px;color:#888;padding:3px 0;width:110px">Project type</td>
              <td style="font-size:13px;color:#1a1a2e;font-weight:600">${projectType}</td>
            </tr>
            ${company ? `<tr><td style="font-size:13px;color:#888;padding:3px 0">Company</td><td style="font-size:13px;color:#1a1a2e;font-weight:600">${company}</td></tr>` : ""}
            <tr>
              <td style="font-size:13px;color:#888;padding:3px 0;vertical-align:top">Message</td>
              <td style="font-size:13px;color:#1a1a2e;white-space:pre-wrap">${message}</td>
            </tr>
          </table>
        </div>
        <p style="color:#4a5568;font-size:14px;line-height:1.6;margin:0 0 6px">
          In the meantime, feel free to reach us directly:
        </p>
        <p style="margin:0;font-size:14px">
          <a href="mailto:info@utsedha.com" style="color:#d6293e;text-decoration:none">info@utsedha.com</a>
          &nbsp;·&nbsp;
          <a href="tel:+917876600529" style="color:#d6293e;text-decoration:none">+91 78766 00529</a>
        </p>
        <hr style="margin:24px 0;border:none;border-top:1px solid #e0e4ef"/>
        <p style="font-size:12px;color:#aaa;margin:0">
          Utsedha Unmanned Private Limited · Nahan, Himachal Pradesh, India
        </p>
      </div>
    </div>
  `;

  // Send both emails in parallel
  const [internalRes, confirmRes] = await Promise.all([
    fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: "UUPL Website", email: "info@utsedha.com" },
        to: [{ email: "info@utsedha.com", name: "Utsedha Unmanned" }],
        replyTo: { name, email },
        subject: `Quote request — ${projectType} — ${company || name}`,
        htmlContent: internalHtml,
      }),
    }),
    fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: "Utsedha Unmanned", email: "info@utsedha.com" },
        to: [{ email, name }],
        subject: "We received your quote request — Utsedha Unmanned",
        htmlContent: confirmationHtml,
      }),
    }),
  ]);

  if (!internalRes.ok || !confirmRes.ok) {
    const err = await (!internalRes.ok ? internalRes : confirmRes).text();
    console.error("Brevo error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
