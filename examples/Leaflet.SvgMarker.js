
/**
 * Adds a svg icon to the map which you can style with any color with a rgb sring value.
 * Phil Willis
 */

(function() {
  "use strict";
  L.svgMarker = {
    defaultIconSize: [35, 35],
    defaultIconAnchor: [17, 35],
    defaultPopupAnchor: [1, -35],
    defaultMarkerRgb: "rgb(84, 188, 255)"
  };

  function makeIconSvg(color,svg) {
    var icon;
    var fill = color;
    var border = color.replace("rgb", "rgba").replace(")", ", 0.74)");
    if (!svg) {
      // Default SVG for the marker
      icon =
        '<svg version="1.1" class="svgMarker-marker" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="222.826px" height="300px" viewBox="0 0 222.826 300" enable-background="new 0 0 222.826 300" xml:space="preserve"> <path class="svgMarker-marker-outer" stroke="black" stroke-width="2" fill="' +
        border +
        '" d="M102.612,1.725C84.106,4.293,74.831,6.91,62.176,13.094c-7.469,3.664-9.609,4.948-17.03,10.418 c-9.609,6.993-16.269,13.653-23.31,23.215C7.47,66.231,0.049,88.542,0.001,112.042c-0.047,11.56,1.855,21.597,6.708,35.917 c6.041,17.885,18.362,43.194,32.158,65.885c4.853,8.039,16.983,26.307,21.264,32.206c18.41,24.975,31.979,36.125,42.73,44.449 c2.331,1.808,6.48,4.668,7.907,4.668c1.379,0,5.983-2.86,8.361-4.668c8.944-6.801,26.819-21.474,38.665-37.837 c1.569-2.188,3.282-4.52,3.853-5.232c1.903-2.428,12.035-17.363,16.698-24.595c19.171-29.875,34.917-62.604,40.958-85.342 c2.616-9.753,3.568-16.46,3.521-25.451c0-34.728-16.936-67.884-45.146-88.53c-7.468-5.47-9.562-6.754-17.03-10.418 c-15.745-7.659-30.303-11.179-47.571-11.417C108.13,1.582,103.421,1.629,102.612,1.725z"/> <path class="svgMarker-marker-inner" fill="' +
        fill +
        '" d="M104.054,19.958c-15.474,2.148-23.231,4.336-33.812,9.507c-6.246,3.063-8.036,4.137-14.241,8.711 c-8.036,5.848-13.604,11.417-19.491,19.412c-12.014,16.31-18.219,34.966-18.259,54.617c-0.04,9.666,1.551,18.059,5.609,30.033 c5.052,14.956,15.354,36.119,26.89,55.094c4.058,6.722,14.201,21.997,17.781,26.93c15.395,20.884,27.089,34.249,36.08,41.21 c1.949,1.512,5.419,3.903,6.612,3.903c1.154,0,5.003-2.392,6.991-3.903c7.479-5.687,22.078-21.997,31.983-35.681 c1.313-1.83,2.745-3.779,3.222-4.375c1.592-2.03,10.063-14.52,13.963-20.566c16.03-24.98,29.197-52.349,34.249-71.362 c2.188-8.155,2.983-13.764,2.943-21.282c0-29.039-14.161-56.764-37.75-74.029c-6.245-4.574-7.995-5.648-14.241-8.711 c-13.166-6.404-25.339-9.348-39.778-9.547C108.667,19.839,104.73,19.878,104.054,19.958z"/> </svg>';
    } else {
      icon = svg;
    }

    // here's the trick, base64 encode the URL
    return "data:image/svg+xml;base64," + btoa(icon);
  }



  L.svgMarker.Icon = L.Icon.extend({
    options: {
      iconSize: L.svgMarker.defaultIconSize,
      iconAnchor: L.svgMarker.defaultIconAnchor,
      popupAnchor: L.svgMarker.defaultPopupAnchor,
      rgb: L.svgMarker.defaultMarkerRgb,
    },

    initialize: function(options) {
      options = L.setOptions(this, options);
      options.iconUrl = makeIconSvg(options.rgb, options.svg);
    }
  });

  L.svgMarker.icon = function(options) {
    return new L.svgMarker.Icon(options);
  };
})();
