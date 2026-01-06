import { Link } from "react-router-dom";
import MapView from "../components/MapView";

export default function Dashboard() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>🚢 Maritime Fleet Dashboard</h2>

      <ul style={{ lineHeight: "2.2" }}>
        

        <li>
          📊 <Link to="/analytics">Analytics Dashboard</Link>
        </li>

        <li>
          🕒 <Link to="/history">Historical Tracking</Link>
        </li>

        <li>
          🚨 <Link to="/alerts">Alerts & Notifications</Link>
        </li>
      </ul>
      <h2>Fleet Map</h2>
<MapView />

      <br />
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
}