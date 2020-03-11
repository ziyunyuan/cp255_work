
// Basic map instance (zoomed to San Francisco, CA)
mapboxgl.accessToken = 'pk.eyJ1IjoieXVhbnppeXVuIiwiYSI6ImNqOGZ1d2U0dzA1Z3Qyd282YXZjdnA3bDQifQ.EzieK3G24yVbryRiV5X6OA';
var map = new mapboxgl.Map({
    container: 'map',
    style: "mapbox://styles/mapbox/dark-v10?optimize=true",
    center: [-122.403516,37.740410],
    zoom: 12.7
 });
// Create variables to use in getIso()
var urlBase = 'https://api.mapbox.com/isochrone/v1/mapbox/';
var lon =  -122.416257;
var lat = 37.773794;
var profile = 'cycling';
var minutes = 5;
// Create a LngLat object to use in the marker initialization
// https://docs.mapbox.com/mapbox-gl-js/api/#lnglat
var lngLat = {
    lng: lon,
    lat: lat
  };
// Adding draggable marker
var marker = new mapboxgl.Marker({
    draggable: true,
    'color': "hsl(187, 75%, 50%)",
   }).setLngLat(lngLat).addTo(map);
var coordinates = document.getElementById('coordinates');

function onDragEnd() {
    var lngLat = marker.getLngLat();
    //coordinates.style.display = 'block';
    coordinates.innerHTML =
    'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    }
     
    marker.on('dragend', onDragEnd); 


// Create a function that sets up the Isochrone API query then makes an Ajax call
function getIso() {
  var query = urlBase + profile + '/' + lngLat.lng + ',' + lngLat.lat + '?contours_minutes=' + minutes + '&polygons=true&access_token=' + mapboxgl.accessToken;

  $.ajax({
    method: 'GET',
    url: query
  }).done(function(data) {
    // Set the 'iso' source's data to what's returned by the API query
    map.getSource('iso').setData(data);
  })
};
// Creating map
map.on('load', function() {
    // When the map loads, add the source and layer
    map.addSource('iso', {
      type: 'geojson',
      data: {
        'type': 'FeatureCollection',
        'features': []
      }
    });
   
    map.addLayer({
      'id': 'isoLayer',
      'type': 'fill',
      // Use "iso" as the data source for this layer
      'source': 'iso',
      'layout': {},
      'paint': {
        // The fill color for the layer is set to a light purple
        'fill-color': "hsl(187, 75%, 50%)",
        'fill-opacity': 0.2
      }
    }, "poi-label");
   
    // Make the API call
    getIso();
   });
// Target the "params" form in the HTML portion of your code
var params = document.getElementById('params');

// When a user changes the value of profile or duration by clicking a button, change the parameter's value and make the API query again
params.addEventListener('change', function(e) {
  if (e.target.name === 'profile') {
    profile = e.target.value;
    getIso();
  } else if (e.target.name === 'duration') {
    minutes = e.target.value;
    getIso();
  }
});
