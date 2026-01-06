import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import VesselList from "./pages/VesselList";
import AddVessel from "./pages/AddVessel";
import EditVessel from "./pages/EditVessel";

import MapTracking from "./pages/MapTracking";
import HistoryMap from "./pages/HistoryMap";
import Analytics from "./pages/Analytics";

import ProtectedRoute from "./ProtectedRoute";
import Navbar from "./Navbar";

import "leaflet/dist/leaflet.css";
import Alerts from "./pages/Alerts";
import MapView from "./pages/MapView";



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* ================= PUBLIC ROUTES ================= */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ================= PROTECTED ROUTES ================= */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/map"
          element={
            <ProtectedRoute>
              <MapTracking />
            </ProtectedRoute>
          }
        />

        <Route
          path="/vessels"
          element={
            <ProtectedRoute>
              <VesselList />
            </ProtectedRoute>
          }
        />

        <Route
          path="/add-vessel"
          element={
            <ProtectedRoute>
              <AddVessel />
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit-vessel/:id"
          element={
            <ProtectedRoute>
              <EditVessel />
            </ProtectedRoute>
          }
        />

        <Route path="/analytics" element={<Analytics />} />

        {/* Vessel History (with & without ID) */}
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <HistoryMap />
            </ProtectedRoute>
          }
        />

        <Route
          path="/history/:id"
          element={
            <ProtectedRoute>
              <HistoryMap />
            </ProtectedRoute>
          }
        />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/map" element={<MapView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
