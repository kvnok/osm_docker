var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Initialize Socket.io
var socket = io();

// Listen for incoming messages
socket.on('message', (data) => {
    console.log('Message received: ', data);
    // You can update the map or UI with the received data
});

// Example of sending a message
socket.emit('message', 'Hello from client!');
