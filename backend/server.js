import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import appointmentsRouter from "./routes/appointments.js";
import authRouter from "./routes/auth.js";   // ✅ import auth routes
import { sendMail } from "./utils/mailer.js";  

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect DB
connectDB();

// ✅ Debug logs (remove in prod)
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "loaded ✅" : "missing ❌");
console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);
console.log("JWT_SECRET:", process.env.JWT_SECRET ? "loaded ✅" : "missing ❌");

// ✅ Routes
app.use("/api/auth", authRouter);           // Admin login route
app.use("/api/appointments", appointmentsRouter); // Appointments route

// ✅ Health check route
app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});

// ✅ Test email route
app.get("/test-email", async (req, res) => {
  try {
    await sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "Test Email",
      text: "If you see this, Gmail App Password works 🚀"
    });
    res.send("✅ Test email sent (check your inbox)");
  } catch (err) {
    console.error("❌ Test Email Error:", err);
    res.status(500).send("❌ Failed to send test email");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
