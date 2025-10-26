import nodemailer from "nodemailer";

export const sendMail = async (options) => {
  try {
    // Wait for 2 seconds before trying to send email (helps with Render cold starts)
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log("📧 Using user:", process.env.EMAIL_USER);
    console.log("📧 Host: smtp.gmail.com:587");
    
    // Enhanced transporter configuration specifically tuned for Render deployment
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use Gmail service configuration
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      // Increased timeouts for Render's environment
      connectionTimeout: 120000, // 120 seconds
      socketTimeout: 120000, // 120 seconds
      greetingTimeout: 60000, // 60 seconds
      logger: true,
      debug: true,
      // Disable connection pool for Render (can cause issues with serverless)
      pool: false,
      // Rate limiting to prevent Gmail blocks
      rateDelta: 2000,
      rateLimit: 3,
      // TLS configuration
      tls: {
        rejectUnauthorized: true,
        minVersion: "TLSv1.2"
      }
    });

    const maxRetries = 3;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        if (attempt > 1) {
          console.log(`🔄 Retry attempt ${attempt}/${maxRetries}`);
          await new Promise(resolve => setTimeout(resolve, 5000 * attempt)); // Exponential backoff
        }

        console.log("🔄 Verifying SMTP connection...");
        await transporter.verify();
        console.log("✅ SMTP connection verified");

        console.log("🔄 Sending email...");
        const info = await transporter.sendMail({
          from: `"Divine Miracle" <${process.env.EMAIL_USER}>`,
          ...options,
          headers: {
            'priority': 'high',
            ...options.headers
          }
        });
        
        console.log("✅ Email sent successfully:", info.messageId);
        return info;

      } catch (err) {
        console.error(`❌ Email attempt ${attempt}/${maxRetries} failed:`);
        console.error(`   - Error: ${err.message}`);
        console.error(`   - Code: ${err.code}`);
        console.error(`   - Command:`, err.command);
        
        if (attempt === maxRetries) {
          console.error("❌ All retry attempts exhausted");
          throw new Error(`Email sending failed after ${maxRetries} attempts: ${err.message}`);
        }
      }
    }
  } catch (error) {
    console.error("❌ Fatal email error:", error);
    throw error;
  }
};