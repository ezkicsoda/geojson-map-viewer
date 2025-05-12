const map = L.map('map').setView([47.4979, 19.0402], 13); // Budapest

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Load GeoJSON
fetch('data/your_data.geojson')
  .then(response => response.json())
  .then(data => {
    L.geoJSON(data).addTo(map);
  })
  .catch(error => {
    console.error('Error loading GeoJSON:', error);
  });
