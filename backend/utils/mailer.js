import { Resend } from "resend";

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendMail = async (options) => {
  console.log("📧 Using Resend API...");
  console.log("📧 Key loaded:", process.env.RESEND_API_KEY ? "yes ✅" : "no ❌");

  try {
    const { from, to, subject, html } = options;

    const data = await resend.emails.send({
      from: from || "Divine Miracle <noreply@divinemiracle.com>",
      to,
      subject,
      html,
    });

    console.log("✅ Email sent successfully:", data?.id || data);
    return data;
  } catch (err) {
    console.error("❌ Email sending failed via Resend:", err.message);
    throw err;
  }
};
