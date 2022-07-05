import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "../style/maps.css";
import { getMoviesInfo } from "../api";

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFoeiIsImEiOiJjbDU0NWZ6cGwwdGl5M2xtdGRoZmRubjlsIn0.6G-AEoJeSC4okf-xDwHLXw";

export default function Maps() {
  const mapContianer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-123.032);
  const [lat, setLat] = useState(37.7272);
  const [zoom, setZoom] = useState(9);
  const [moviesInfo, setMoviesInfo] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getMoviesInfo();
      setMoviesInfo(res.data.movies);
    })();
  }, []);
  console.log(moviesInfo);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContianer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return;
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  const buscar = () => {};

  return (
    <div>
      <button onClick={buscar}>Bucar</button>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContianer} className="map-container"></div>
    </div>
  );
}
