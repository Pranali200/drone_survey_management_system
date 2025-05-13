import mongoose from "mongoose";

const droneSchema = new mongoose.Schema({
  droneId: String,
  model: String,
  status: { type: String, default: "Available" },
  battery: Number,
});

export default mongoose.model("Drone", droneSchema);
