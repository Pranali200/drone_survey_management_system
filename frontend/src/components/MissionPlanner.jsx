import React, { useState } from 'react';
import api from '../api/axiosConfig';

const MissionPlanner = () => {
  const [mission, setMission] = useState({ name: '', area: '', path: '', altitude: 100 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post('/missions', mission);
    alert('Mission Created');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Mission</h2>
      <input type="text" placeholder="Name" onChange={(e) => setMission({ ...mission, name: e.target.value })} />
      <input type="text" placeholder="Area" onChange={(e) => setMission({ ...mission, area: e.target.value })} />
      <input type="text" placeholder="Path" onChange={(e) => setMission({ ...mission, path: e.target.value })} />
      <input type="number" placeholder="Altitude" onChange={(e) => setMission({ ...mission, altitude: e.target.value })} />
      <button type="submit">Create</button>
    </form>
  );
};

export default MissionPlanner;
