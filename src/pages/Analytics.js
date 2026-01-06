import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line, Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Analytics() {
  const [speedHistory, setSpeedHistory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/analytics")
      .then((res) => setSpeedHistory(res.data))
      .catch((err) => console.error(err));
  }, []);

  const speedData = {
    labels: speedHistory.map((d) => new Date(d.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: "Vessel Speed",
        data: speedHistory.map((d) => d.speed),
        borderWidth: 2,
      },
    ],
  };

  const alertData = {
    labels: ["Normal", "Overspeed"],
    datasets: [
      {
        label: "Alerts",
        data: [20, 1128],
      },
    ],
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>📊 Analytics Dashboard</h2>

      <p>Total Vessels: 1</p>
      <p>Overspeed Alerts: 1128</p>

      <div style={{ width: "700px", height: "350px", marginBottom: "40px" }}>
        <h4>Speed Over Time</h4>
        <Line data={speedData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>

      <div style={{ width: "500px", height: "300px" }}>
        <h4>Alert Analysis</h4>
        <Bar data={alertData} options={{ responsive: true, maintainAspectRatio: false }} />
      </div>
    </div>
  );
}

export default Analytics;