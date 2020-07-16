const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const port = 5000;

const app = express();

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("to33Start", (percent) => {
    console.log("The progress bar will be at 33%");
    socket.emit("to33End", percent);
  });

  socket.on("to66Start", (percent) => {
    console.log("The progress bar will be at 66%");
    socket.emit("to66End", percent);
  });

  socket.on("to100Start", (percent) => {
    console.log("The progress bar will be at 100%");
    socket.emit("to100End", percent);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
