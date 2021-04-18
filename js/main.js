(function(){
    "use strict";
    
    document.addEventListener('DOMContentLoaded', function(){
        var map = L.map('map').setView([-34.411512, -70.856366], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-34.411512, -70.856366]).addTo(map)
            .bindPopup('Nos encontramos aquí.')
            .openPopup();
   
    });    
})();