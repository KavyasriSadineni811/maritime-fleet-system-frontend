import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import L from "leaflet";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function MapView() {
  const [position, setPosition] = useState({ lat: 17.385, lng: 78.4867 }); // Hyderabad
  const [history, setHistory] = useState([]);

  // Simulate vessel movement
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const newPos = {
          lat: prev.lat + (Math.random() - 0.5) * 0.05,
          lng: prev.lng + (Math.random() - 0.5) * 0.05,
        };

        setHistory((h) => [...h, [newPos.lat, newPos.lng]]);
        return newPos;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <MapContainer center={position} zoom={6} style={{ height: "100vh" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {/* Vessel Marker */}
      <Marker position={position}>
        <Popup>
          🚢 Vessel<br />
          Lat: {position.lat.toFixed(4)}<br />
          Lng: {position.lng.toFixed(4)}
        </Popup>
      </Marker>

      {/* Historical Route */}
      {history.length > 1 && (
        <Polyline positions={history} color="blue" />
      )}
    </MapContainer>
  );
}

export default MapView;