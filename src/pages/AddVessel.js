import React, { useState } from "react";
import { addVessel } from "../api/vesselsApi";
import { useNavigate } from "react-router-dom";

export default function AddVessel() {
  const [name, setName] = useState("");
  const [imo, setImo] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    await addVessel({ name, imo, location });
    navigate("/vessels");
  };

  return (
    <div style={{ margin: "30px" }}>
      <h2>Add Vessel</h2>

      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Vessel Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br /><br />

        <input
          type="text"
          placeholder="IMO Number"
          value={imo}
          onChange={(e) => setImo(e.target.value)}
          required
        /><br /><br />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        /><br /><br />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}