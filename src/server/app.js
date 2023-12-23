const express = require("express");
const http = require("http");
const connectDB = require("./db");
const apiRouter = require("./routes/api");
const setupSocket = require("./socket");
require("dotenv").config();

const app = express();
const server = http.createServer(app);

// Parse request bodies
app.use(express.json());

// Connect to the database
connectDB();

// Setup Socket.IO
const io = setupSocket(server);

// Use API routes
app.use("/api", apiRouter);

// Start the server
const PORT = process.env.PORT || 2222;
server.listen(2222, () => {
  console.log(`Server is running on port ${PORT}`);
});
