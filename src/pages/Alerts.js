import { useEffect, useState } from "react";
import axios from "axios";

function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/alerts")
      .then(res => setAlerts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>🚨 Alerts & Notifications</h2>

      {alerts.length === 0 ? (
        <p>No alerts available</p>
      ) : (
        <ul>
          {alerts.map((a, i) => (
            <li key={i}>
              <b>{a.type}</b> — {a.message}
              <br />
              <small>{new Date(a.createdAt).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Alerts;