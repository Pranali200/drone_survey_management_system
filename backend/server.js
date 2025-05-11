import dotenv from "dotenv";
import express, { json } from "express";
import cors from "cors";
import http from "http";
import { Server as SocketIOServer } from "socket.io";

import connectDB from "./config/db.js";
import missionRoutes from "./routes/missionRoutes.js";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: { origin: "*" },
});

connectDB();

app.use(cors());
app.use(json());
app.use("/api/missions", missionRoutes);

io.on("connect", (socket) => {
  console.log("Client connected");

  socket.on("joinMission", (missionId) => {
    socket.join(missionId);
  });

  socket.on("updateMission", (data) => {
    io.to(data.missionId).emit("missionUpdate", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
