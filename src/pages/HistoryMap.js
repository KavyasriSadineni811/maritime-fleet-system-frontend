import { useEffect, useState } from "react";
import axios from "axios";

export default function HistoricalTracking() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/history",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setHistory(res.data);
    } catch (err) {
      console.error("History fetch error", err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📜 Historical Tracking</h2>

      {history.length === 0 && <p>No history available</p>}

      <ul>
        {history.map((item) => (
          <li key={item._id}>
            <b>{item.type}</b> – {item.message} <br />
            <small>{new Date(item.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}