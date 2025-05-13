import React, { useEffect, useState } from 'react';
import api from '../api/axiosConfig';

const DroneDashboard = () => {
  const [drones, setDrones] = useState([]);

  useEffect(() => {
    const fetchDrones = async () => {
      const { data } = await api.get('/drones');
      setDrones(data);
    };
    fetchDrones();
  }, []);

  return (
    <div>
      <h2>Drone Dashboard</h2>
      <ul>
        {drones.map((drone) => (
          <li key={drone._id}>
            {drone.name} - {drone.status} - Battery: {drone.battery}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DroneDashboard;
