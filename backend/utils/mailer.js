import nodemailer from "nodemailer";

export const sendMail = async (options) => {
  console.log("📧 Using user:", process.env.EMAIL_USER);
  console.log("📧 Pass loaded:", process.env.EMAIL_PASS ? "yes ✅" : "no ❌");

  // Create transporter INSIDE the function to ensure env vars are loaded
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail(options);
    console.log("✅ Email sent:", info.response);
    return info;
  } catch (err) {
    console.error("❌ Email Error:", err);
    throw err; // Important: re-throw the error
  }
};