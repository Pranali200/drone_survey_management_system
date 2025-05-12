import { useEffect, useState } from "react";
import axios from "../api/axiosConfig";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function SurveyReport() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/missions/stats").then((res) => setData(res.data));
  }, []);

  return (
    <BarChart width={600} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="missionName" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="distanceCovered" fill="#8884d8" />
    </BarChart>
  );
}
