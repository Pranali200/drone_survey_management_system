import { Server } from "socket.io";

const setupSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*", // adjust for production
    },
  });

  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    socket.emit("message", "Welcome to the Drone Survey Management System");

    socket.on("sendMessage", (data) => {
      io.emit("message", data);
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected:", socket.id);
    });
  });
};

export default setupSocket;
