const io = require('socket.io-client');
const socket = io("http://localhost:2222");
console.log(socket);

// Example: Emitting page transition event
const pageVisitData = {
  userId: '123',
  page: '/dashboard',
};

socket.emit('pageVisit', pageVisitData);
console.log('Emitted pageVisit');

