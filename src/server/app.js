const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const mongoose = require('mongoose');
require("dotenv").config()

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Connect to MongoDB
mongoose.connect( 
    "mongodb://localhost:27017/", 
    { 
      dbName: "pageTransitionDB", 
      useNewUrlParser: true, 
      useUnifiedTopology: true, 
    }
  );

// Socket connection
io.on('connection', (socket) => {
    console.log('A user connected');

    // ... (socket event handling, as in the previous example)
});


// Use API routes
// app.use('/api', apiRouter);


// Start the server
const PORT = process.env.PORT || 2222;
server.listen(2222, () => {
    console.log(`Server is running on port ${PORT}`);
});