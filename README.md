# Leaflet.SvgMarker
- Adds a svg icon to the map which you can style with any color with a rgb sring value.

## Simple usage

- Define a rgb string values
~~~
  L.marker(coordinate, {
    icon: L.svgMarker.icon({rgb:"92,186,113"})
  });
~~~

- or use the default color
~~~
L.marker(coordinate, {
  icon: L.svgMarker.icon({rgb:"92,186,113"})
});
~~~

- Add your own svg
~~~
L.marker(coordinate, {
  icon: L.svgMarker.icon({
    svg: "<svg> ... </svg>"
  })
});
~~~
