import React, { useEffect, useState } from "react";
import { getVessels, updateVessel } from "../api/vesselsApi";
import { useNavigate, useParams } from "react-router-dom";

export default function EditVessel() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vessel, setVessel] = useState({
    name: "",
    imo: "",
    location: "",
  });

  useEffect(() => {
    loadVessel();
  }, []);

  const loadVessel = async () => {
    const res = await getVessels();
    const target = res.data.find((v) => v._id === id);
    setVessel(target);
  };

  const submit = async (e) => {
    e.preventDefault();
    await updateVessel(id, vessel);
    navigate("/vessels");
  };

  return (
    <div style={{ margin: "30px" }}>
      <h2>Edit Vessel</h2>

      <form onSubmit={submit}>
        <input
          type="text"
          value={vessel.name}
          onChange={(e) => setVessel({ ...vessel, name: e.target.value })}
        /><br /><br />

        <input
          type="text"
          value={vessel.imo}
          onChange={(e) => setVessel({ ...vessel, imo: e.target.value })}
        /><br /><br />

        <input
          type="text"
          value={vessel.location}
          onChange={(e) => setVessel({ ...vessel, location: e.target.value })}
        /><br /><br />

        <button type="submit">Update</button>
      </form>
    </div>
  );
}