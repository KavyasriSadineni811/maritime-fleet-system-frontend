import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect, useState } from "react";
import axios from "axios";

const shipIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/77/77521.png",
  iconSize: [35, 35],
});

export default function MapTracking() {
  const [vessels, setVessels] = useState([]);

  useEffect(() => {
    fetchVessels();
    const interval = setInterval(fetchVessels, 4000);
    return () => clearInterval(interval);
  }, []);

  const fetchVessels = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/vessels?simulate=true",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    setVessels(res.data);
  };

  return (
    <MapContainer center={[20, 78]} zoom={4} style={{ height: "100vh" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {vessels.map((v) => (
        <Marker
          key={v.id}
          position={[v.latitude, v.longitude]}
          icon={shipIcon}
        >
          <Popup>
            <b>{v.name}</b>
            <br />
            Speed: {v.speed} knots
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}