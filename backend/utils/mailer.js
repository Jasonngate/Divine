// import nodemailer from "nodemailer";

// export const sendMail = async (options) => {
//   console.log("📧 Using user:", process.env.EMAIL_USER);
//   console.log("📧 Pass loaded:", process.env.EMAIL_PASS ? "yes ✅" : "no ❌");

//   // Create transporter INSIDE the function to ensure env vars are loaded
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   try {
//     const info = await transporter.sendMail(options);
//     console.log("✅ Email sent:", info.response);
//     return info;
//   } catch (err) {
//     console.error("❌ Email Error:", err);
//     throw err; // Important: re-throw the error
//   }
// };

import nodemailer from "nodemailer";

export const sendMail = async (options) => {
  console.log("📧 Using user:", process.env.EMAIL_USER);
  console.log("📧 Host: smtp.gmail.com:587");

  // Enhanced transporter configuration
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: 30000,
    socketTimeout: 30000,
    greetingTimeout: 30000,
    logger: process.env.NODE_ENV === 'development',
    debug: process.env.NODE_ENV === 'development',
    tls: {
      rejectUnauthorized: false
    }
  });

  try {
    console.log("🔄 Verifying SMTP connection...");
    await transporter.verify();
    console.log("✅ SMTP connection verified");

    console.log("🔄 Sending email...");
    const info = await transporter.sendMail({
      from: `"Your App" <${process.env.EMAIL_USER}>`, // Ensure proper from address
      ...options
    });
    
    console.log("✅ Email sent successfully:", info.messageId);
    return info;
  } catch (err) {
    console.error("❌ Email failed:");
    console.error("   - Error:", err.message);
    console.error("   - Code:", err.code);
    console.error("   - Command:", err.command);
    
    throw err;
  }
};