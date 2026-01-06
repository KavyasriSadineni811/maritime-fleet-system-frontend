import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

// Attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const getVessels = () => API.get("/api/vessels");
export const addVessel = (data) => API.post("/api/vessels", data);
export const updateVessel = (id, data) => API.put(`/api/vessels/${id}`, data);
export const deleteVessel = (id) => API.delete(`/api/vessels/${id}`);