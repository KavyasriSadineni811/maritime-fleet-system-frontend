import React, { useEffect, useState } from "react";
import { getVessels, deleteVessel } from "../api/vesselsApi";
import { Link } from "react-router-dom";

export default function VesselList() {
  const [vessels, setVessels] = useState([]);

  useEffect(() => {
    loadVessels();
  }, []);

  const loadVessels = async () => {
    const res = await getVessels();
    setVessels(res.data);
  };

  const handleDelete = async (id) => {
    await deleteVessel(id);
    loadVessels();
  };

  return (
    <div style={{ margin: "30px" }}>
      <h2>All Vessels</h2>

      <Link to="/add-vessel">
        <button style={{ marginBottom: "20px" }}>Add Vessel</button>
      </Link>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>IMO</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {vessels.map((v) => (
            <tr key={v._id}>
              <td>{v.name}</td>
              <td>{v.imo}</td>
              <td>{v.location}</td>

              <td>
                <Link to={`/edit-vessel/${v._id}`}>
                  <button>Edit</button>
                </Link>
                &nbsp;
                <button onClick={() => handleDelete(v._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}