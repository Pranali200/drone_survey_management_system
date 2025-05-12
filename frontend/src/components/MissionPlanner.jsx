import { useState } from "react";
import axios from "../api/axiosConfig";

export default function MissionPlanner() {
  const [form, setForm] = useState({
    name: "",
    altitude: "",
    pattern: "crosshatch",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/missions", form).then((res) => {
      alert("Mission created!");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Mission Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Altitude" type="number" onChange={(e) => setForm({ ...form, altitude: e.target.value })} />
      <select onChange={(e) => setForm({ ...form, pattern: e.target.value })}>
        <option value="crosshatch">Crosshatch</option>
        <option value="perimeter">Perimeter</option>
      </select>
      <button type="submit">Create Mission</button>
    </form>
  );
}
