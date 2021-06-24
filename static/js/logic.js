// Create initial map object centered in Los Angeles
var myMap = L.map("map", 
                  {center: [34.05, -118.24],
                   zoom: 15
                });

// Add the background map image (tile layer)
// Street map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", 
            { attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
              tileSize: 512,
              maxZoom: 18,
              zoomOffset: -1,
              id: "mapbox/streets-v11",
              accessToken: API_KEY})
            .addTo(myMap);

//Clear layer group
var markers = L.layerGroup().addTo(myMap)

// JavaScript here - event listeners and event handlers
// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Populates dropdown menu 
var selDropdwnCounty = d3.select("#selCounty");
var selDropdwnType = d3.select("#selHouseType");

countyItems.forEach(county => {
  selDropdwnCounty.append("option").text(county).property("value", county)
});

housetypeItems.forEach(house_type => {
  selDropdwnType.append("option").text(house_type).property("value", house_type)
});   

// Create the function to run for both events
function runFind() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  
  // calls the appendDrpdwn function to append items from the data
  //data.forEach(appendDrpdwn);

  // Removes markers
 markers.clearLayers()

  // Select the input element of county name (inputElement1) and house type (inputElement2)
  // Get the value property of the input element
  var inputCounty = d3.select("#selCounty").property("value");
  var inputHouseType = d3.select("#selHouseType").property("value");

  // Filtering data. Used trim() because county names have additional space after the name. Can be fixed later 
  var filteredCounty = data.filter(rowItem => rowItem.county.trim() == inputCounty)
                            .filter(rowItem => rowItem.house_type === inputHouseType)
  

  console.log(filteredCounty)
  console.log(filteredCounty.map(rowItem => rowItem.lat))


// Prints out the selected zipcode and estimated price in the tooltip
  filteredCounty.forEach(function(rowItem) {
    markers.addLayer(L.marker([rowItem.lat, rowItem.lng])
                    .bindPopup("<h4>Zip Code: " + rowItem.zipcode + "</h4> <hr> <h5>Estimated Home Price: $ " + rowItem.est_price + "</h5>"))
  })

 // Calculates the location bounds based on user input selection   
    var southWest = L.latLng(math.min(filteredCounty.map(rowItem => rowItem.lat)), 
                              math.min(filteredCounty.map(rowItem => rowItem.lng)))
    northEast = L.latLng(math.max(filteredCounty.map(rowItem => rowItem.lat)), 
    math.max(filteredCounty.map(rowItem => rowItem.lng)))
    bounds = L.latLngBounds(southWest, northEast);
    
 // map flies and zooms in to the filtered location
  myMap.flyToBounds(bounds);
}


