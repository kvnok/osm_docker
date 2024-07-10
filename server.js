const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const port = 9000;

app.use(express.static('public'));

io.on('connection', (socket) => {
  console.log('A user connected');

  // Example: Handling a marker addition
  socket.on('add-marker', (data) => {
    io.emit('add-marker', data);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
