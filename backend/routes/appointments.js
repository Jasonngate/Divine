import express from "express";
import Appointment from "../models/Appointment.js";
import { sendMail } from "../utils/mailer.js";
import { verifyAdmin } from "../middleware/auth.js";  // ✅ import admin middleware

const router = express.Router();

// ✅ GET all appointments (Admin only)
router.get("/", verifyAdmin, async (req, res) => {
  try {
    const appts = await Appointment.find().sort({ createdAt: -1 }); // latest first
    res.json(appts);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    res.status(500).json({ message: "Failed to fetch appointments" });
  }
});

// ✅ POST create appointment (Clients can access this)
router.post("/", async (req, res) => {
  try {
    const appt = new Appointment(req.body);
    await appt.save();

    // ✅ Use fallback if FRONTEND_URL is not defined
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:3000";

// Notify admin
await sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.ADMIN_EMAIL,
  subject: `📅 New Appointment from ${appt.fullName}`,
  html: `
  <div style="background-color:#2a0015; padding:20px; font-family:Arial, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" 
           style="max-width:600px; margin:auto; background:#3b0022; border-radius:10px; border:1px solid #FFD700;">
      <!-- Header -->
      <tr>
        <td style="padding:25px; text-align:center; background:linear-gradient(135deg, #3b0022, #5c1c38); border-bottom:2px solid #FFD700;">
          <h2 style="margin:0; font-size:24px; color:#FFD700; text-shadow:0 1px 2px rgba(0,0,0,0.3);">✨ New Appointment Request ✨</h2>
          <p style="margin:8px 0 0 0; color:#ffed89; font-size:14px;">Divine Miracle - Spiritual Guidance</p>
        </td>
      </tr>

      <!-- Client Highlight -->
      <tr>
        <td style="padding:20px; text-align:center; background:#2a0015;">
          <div style="color:#FFD700; font-size:18px; font-weight:bold; margin-bottom:5px;">${appt.fullName}</div>
          <div style="color:#ffed89; font-size:13px;">is requesting your spiritual guidance</div>
        </td>
      </tr>

      <!-- Appointment Details -->
      <tr>
        <td style="padding:25px; color:#ffed89; font-size:15px; line-height:1.6;">
          <table width="100%" cellpadding="8" cellspacing="0">
            <tr>
              <td width="30%" style="color:#FFD700; font-weight:bold; border-bottom:1px solid #5c1c38;">Email:</td>
              <td style="border-bottom:1px solid #5c1c38;">${appt.email}</td>
            </tr>
            <tr>
              <td style="color:#FFD700; font-weight:bold; border-bottom:1px solid #5c1c38;">Phone:</td>
              <td style="border-bottom:1px solid #5c1c38;">${appt.phone}</td>
            </tr>
            <tr>
              <td style="color:#FFD700; font-weight:bold; border-bottom:1px solid #5c1c38;">Service:</td>
              <td style="border-bottom:1px solid #5c1c38;">${appt.service}</td>
            </tr>
            <tr>
              <td style="color:#FFD700; font-weight:bold; border-bottom:1px solid #5c1c38;">Date & Time:</td>
              <td style="border-bottom:1px solid #5c1c38;">${appt.date} at ${appt.time}</td>
            </tr>
            ${appt.message ? `
            <tr>
              <td style="color:#FFD700; font-weight:bold; vertical-align:top; padding-top:12px;">Message:</td>
              <td style="padding-top:12px;">
                <div style="background:#2a0015; padding:12px; border-radius:6px; border:1px solid #5c1c38; color:#ffed89;">
                  ${appt.message}
                </div>
              </td>
            </tr>
            ` : ''}
          </table>
        </td>
      </tr>

      <!-- Button -->
      <tr>
        <td style="padding:25px; text-align:center;">
          <a href="${frontendUrl}/admin/appointments"
             style="display:inline-block; padding:14px 30px; background:linear-gradient(135deg, #FFD700, #E6C200); 
                    color:#2a0015; font-weight:bold; text-decoration:none; border-radius:8px; 
                    border:1px solid #FFD700; font-size:16px; box-shadow:0 4px 12px rgba(255, 215, 0, 0.3);
                    transition:all 0.3s ease;">
            🔮 View in Admin Dashboard
          </a>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="padding:20px; text-align:center; background:#2a0015; border-top:2px solid #FFD700;">
          <div style="color:#FFD700; font-size:14px; font-weight:bold; margin-bottom:5px;">Divine Miracle</div>
          <div style="color:#ffed89; font-size:12px; opacity:0.8;">
            Kandivali West, Mumbai • Spiritual Healing & Guidance
          </div>
          <div style="color:#ffed89; font-size:11px; opacity:0.6; margin-top:8px;">
            Received on ${new Date().toLocaleDateString('en-IN', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        </td>
      </tr>
    </table>
  </div>
  `,
});

    res.status(201).json(appt);
  } catch (error) {
    console.error("Error creating appointment:", error);
    res.status(500).json({ message: "Failed to create appointment" });
  }
});

// ✅ PUT update appointment status (Admin only)
router.put("/:id", verifyAdmin, async (req, res) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: "Status is required" });
    }

    const appt = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!appt) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    // Notify client
    await sendMail({
      from: process.env.EMAIL_USER,
      to: appt.email,
      subject: `📢 Your Appointment Status: ${status}`,
      html: `
        <h3>Hello ${appt.fullName},</h3>
        <p>Your appointment for <b>${appt.service}</b> on <b>${appt.date}</b> at <b>${appt.time}</b> has been updated.</p>
        <p><b>New Status:</b> ${status}</p>
        ${
          status === "Approved"
            ? "<p>✅ Please be on time. We look forward to seeing you!</p>"
            : status === "Cancelled"
            ? "<p>❌ We’re sorry, but your appointment has been cancelled.</p>"
            : "<p>ℹ️ Please contact us for more details.</p>"
        }
        <br/>
        <p>Thank you,<br/>Clinic Team</p>
      `,
    });

    res.json(appt);
  } catch (error) {
    console.error("Error updating appointment:", error);
    res.status(500).json({ message: "Failed to update appointment" });
  }
});

export default router;
