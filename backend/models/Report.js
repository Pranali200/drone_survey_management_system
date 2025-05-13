import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  missionId: { type: mongoose.Schema.Types.ObjectId, ref: "Mission", required: true },
  droneId: { type: mongoose.Schema.Types.ObjectId, ref: "Drone", required: true },
  duration: Number,
  distance: Number,
  coverage: Number,
});

export default mongoose.model("Report", reportSchema);
