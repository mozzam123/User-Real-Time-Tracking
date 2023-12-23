const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
require("dotenv").config()
const apiRouter = require("./routes/api")
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const DB = process.env.DATABASE

mongoose.connect(DB)
  .then(() => {
    console.log("Database connected for Real Time Trcking service");
  }).catch((err) => {
    console.log(`Database error: ${err}`);
  })

// Socket connection
io.on('connection', (socket) => {
    console.log('A user connected');

    // ... (socket event handling, as in the previous example)
});


// Use API routes
app.use('/api', apiRouter);


// Start the server
const PORT = process.env.PORT || 2222;
server.listen(2222, () => {
    console.log(`Server is running on port ${PORT}`);
});