const io = require('socket.io-client');
const socket = io("http://localhost:2222");

// Example: Emitting page transition event
const pageVisitData = {
  userId: '223',
  page: '/register',
};

socket.emit('pageVisit', pageVisitData);
console.log('Emitted pageVisit');

