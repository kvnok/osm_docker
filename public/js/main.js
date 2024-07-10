var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Initialize Socket.io
var socket = io();

// Listen for incoming add-marker events
socket.on('add-marker', (data) => {
    L.marker([data.lat, data.lng]).addTo(map);
});

// Example: Adding a marker and emitting an event
map.on('click', function(e) {
    var markerData = { lat: e.latlng.lat, lng: e.latlng.lng };
    socket.emit('add-marker', markerData);
    L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
});
