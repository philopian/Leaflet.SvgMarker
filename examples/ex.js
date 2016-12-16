// map setup
var map = L.map('map').setView([49.14223, -123.1463], 11);
L.tileLayer('http://server.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(map);


L.marker([49.24223, -123.1463], {
    icon: L.svgMarker.icon()
  })
  .addTo(map)
  .bindPopup("HELLO");


L.marker([49.21223, -123.1163], {
    icon: L.svgMarker.icon({
      rgb: "23,111,42"
    })
  })
  .addTo(map)
  .bindPopup("HELLO, from marker #2");


L.marker([49.21223, -123.1563], {
    icon: L.svgMarker.icon({
      rgb: "0,222,42"
    })
  })
  .addTo(map)
  .bindPopup("HELLO, from the third marker");


// custom svg
$.get("svg-marker-factory/I-95.svg", function(svg) {
  var shield = L.marker([49.11223, -123.1563], {
      icon: L.svgMarker.icon({
        svg: svg,
        iconSize: [20, 20]
      })
    })
    .addTo(map)
    .bindPopup("loading a svg file!!");

}, 'text');
