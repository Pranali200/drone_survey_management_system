import express from "express";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import missionRoutes from "./routes/missionRoutes.js";
import droneRoutes from "./routes/droneRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import setupSocket from "./socket/socket.js";

dotenv.config();

const app = express();
const server = http.createServer(app);

// Middleware
app.use(cors());
app.use(express.json());

// Database
connectDB();

// Routes
app.use("/api/missions", missionRoutes);
app.use("/api/drones", droneRoutes);
app.use("/api/reports", reportRoutes);

// WebSocket
setupSocket(server);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
