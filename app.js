let map, vailMarker;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 39.6402638, lng: -106.3741955 },
    zoom: 8,
  });

  vailMarker = new google.maps.Marker({
    position: {    lat: 39.6402638,
    lng: -106.3741955},
    map: map,
    title: "Hello World!",
    labelClass:"labels",
    label:{
      text:"hello"}
  });

  map.addListener("zoom_changed", function() {
    zoomLevel = map.getZoom();
    if (zoomLevel >= 10) {
      vailMarker.setLabel({text:"FUCK"});
    }
  })
}
