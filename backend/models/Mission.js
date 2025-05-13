import mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
  missionName: String,
  flightPath: String,
  altitude: Number,
  status: { type: String, default: "Pending" },
  startTime: { type: Date, default: Date.now },
  endTime: Date,
});

export default mongoose.model("Mission", missionSchema);
