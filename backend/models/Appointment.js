import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  service: String,
  date: String,
  time: String,
  message: String,
  status: { type: String, default: "Pending" },
}, { timestamps: true }); // ✅ adds createdAt, updatedAt


export default mongoose.models.Appointment ||
  mongoose.model("Appointment", AppointmentSchema);
