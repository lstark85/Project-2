function createMap(carAcc) {
    
    // Create the tile layer that will be the background of our map
    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "light-v10",
    accessToken: API_KEY
});

    // Create a baseMaps object to hold the lightmap layer
    var baseMaps = {
        "Light Map": lightmap
    };

    // Create an overlayMaps object to hold the carAcc layer
    var overlayMaps = {
        "Car Accidents": carAcc
    };

    // Create the map object with options
    var map = L.map("map-id", {
        center: [38.5, -122],
        zoom: 15,
        layers: [lightmap, carAcc]
    });

    // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
    L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
    }).addTo(map);
}

function createMarkers(response) {

    // Pull the property off of response.data
    var cities = response;
    console.log(cities);

    // Initialize an array to hold car markers
    var carMarkers = [];

    // Loop through the stations array
    for (var index = 0; index < cities.length; index++) {
        var city = cities[index];

    // For each station, create a marker and bind a popup with the station's name
    var carMarker = L.marker([city.lat, city.lng])
        .bindPopup("<h2>" + city.city + "</h2><h3>Visibility (mi): " + city.visibility + "<h3>Wind Speed (mph): " + city.wind_speed + "<h3>Severity Level: " + city.severity +  "</h3>");

    // Add the marker to the carMarkers array
    carMarkers.push(carMarker);
    }
    console.log(carMarkers);

    // Create a layer group made from the car markers array, pass it into the createMap function
    createMap(L.layerGroup(carMarkers));
}

//d3.csv("../ca_head.csv").then(createMarkers);
d3.json('/accidents/sacramento').then(createMarkers);
