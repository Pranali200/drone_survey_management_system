import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import MapView from './MapView';

const socket = io('http://localhost:5000');

const MissionMonitor = () => {
  const [status, setStatus] = useState([]);
  const [dronePositions, setDronePositions] = useState([]);
  const [path, setPath] = useState([]);

  useEffect(() => {
    // Listen to mission status updates
    socket.on('missionStatus', (data) => {
      setStatus((prev) => [...prev, data]);
    });

    // Listen to drone position updates (assuming backend emits this)
    socket.on('dronePosition', (data) => {
      // Example data: { name: 'Drone 1', lat: 19.0775, lng: 72.8790, battery: 78 }
      setDronePositions((prev) => {
        // Replace drone if it already exists
        const updated = prev.filter(d => d.name !== data.name);
        return [...updated, data];
      });

      // Update path with new coordinate
      setPath(prev => [...prev, [data.lat, data.lng]]);
    });

    return () => {
      socket.off('missionStatus');
      socket.off('dronePosition');
    };
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Mission Monitor</h2>

      {/* Real-time mission status updates */}
      <div className="mb-6">
        <h3 className="text-lg font-bold">Status Updates</h3>
        <ul className="list-disc pl-5">
          {status.map((update, index) => (
            <li key={index}>{update}</li>
          ))}
        </ul>
      </div>

      {/* Real-time drone tracking map */}
      <MapView dronePositions={dronePositions} path={path} />
    </div>
  );
};

export default MissionMonitor;
