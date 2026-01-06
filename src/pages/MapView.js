import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

function MapView() {
  const mapRef = useRef(null);
  const markersRef = useRef({});

  useEffect(() => {
    if (!mapRef.current) {
      mapRef.current = L.map("map").setView([20, 78], 4);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(mapRef.current);
    }
  }, []);

  useEffect(() => {
    fetchLiveVessels();
    const interval = setInterval(fetchLiveVessels, 5000);
    return () => clearInterval(interval);
  }, []);

  const fetchLiveVessels = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/vessels/live",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      res.data.forEach(vessel => {
        const { _id, latitude, longitude, name } = vessel;

        if (!markersRef.current[_id]) {
          markersRef.current[_id] = L.marker([latitude, longitude])
            .addTo(mapRef.current)
            .bindPopup(name);
        } else {
          markersRef.current[_id].setLatLng([latitude, longitude]);
        }
      });
    } catch (err) {
      console.error("Failed to fetch vessels", err);
    }
  };

  return <div id="map" style={{ height: "90vh" }} />;
}

export default MapView;