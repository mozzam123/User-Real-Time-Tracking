// socket.js
const socketIO = require("socket.io");
const PageTransitionModel = require("./models/PageTransition");

const setupSocket = (server) => {
  const io = socketIO(server);

  io.on("connection", (socket) => {
    console.log("A user connected");

    // Listen for custom event 'pageVisit'
    socket.on("pageVisit", (data) => {
      console.log("Page visit data received:", data);
      const newData = new PageTransitionModel({
        userId: data.userId,
        page: data.page,
      }).save();
    });
  });

  return io;
};

module.exports = setupSocket;
