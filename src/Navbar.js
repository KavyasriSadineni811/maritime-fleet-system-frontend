import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const token = localStorage.getItem("token");

  return (
    <div
      style={{
        width: "100%",
        padding: "15px",
        background: "#282c34",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      <h3>Maritime Fleet Tracking</h3>

      <div>
        {!token && (
          <>
            <Link to="/" style={{ color: "white", marginRight: "20px" }}>
              Login
            </Link>
            <Link to="/register" style={{ color: "white", marginRight: "20px" }}>
              Register
            </Link>
          </>
        )}

        {token && (
          <>
            <Link to="/dashboard" style={{ color: "white", marginRight: "20px" }}>
              Dashboard
            </Link>

            {/* ✅ Added Map Tracking Menu Item */}
            <Link to="/map" style={{ color: "white", marginRight: "20px" }}>
              Map Tracking
            </Link>
            <button
              onClick={handleLogout}
              style={{
                background: "red",
                padding: "6px 15px",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}
