import nodemailer from "nodemailer";

async function sendTestEmail() {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: "raneeyy18@gmail.com", // test sending to yourself
    subject: "Test Email from Next.js",
    text: "If you see this, App Password works 🚀",
  });

  console.log("Message sent:", info.messageId);
}

sendTestEmail().catch(console.error);
