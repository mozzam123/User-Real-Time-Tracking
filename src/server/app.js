const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const mongoose = require("mongoose");
const apiRouter = require("./routes/api");
const setupSocket  = require("./socket")
require("dotenv").config();

const app = express();
const server = http.createServer(app);

// Parse request bodies
app.use(express.json());

const DB = process.env.DATABASE;
mongoose
  .connect(DB)
  .then(() => {
    console.log("Database connected for Real Time Trcking service");
  })
  .catch((err) => {
    console.log(`Database error: ${err}`);
  });

// Setup Socket.IO
const io = setupSocket(server);

// Use API routes
app.use("/api", apiRouter);

// Start the server
const PORT = process.env.PORT || 2222;
server.listen(2222, () => {
  console.log(`Server is running on port ${PORT}`);
});
