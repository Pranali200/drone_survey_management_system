import mongoose from "mongoose";

const missionSchema = new mongoose.Schema({
    name: String,
    droneId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Drone"
    },
    area: Object,
    waypoints: [[Number]],
    altitude: Number,
    overlap: Number,
    status: { type: String, enum: ["planned", "in_progress", "completed", "aborted"], default: "planned" },
    progress: Number,
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Mission", missionSchema);
