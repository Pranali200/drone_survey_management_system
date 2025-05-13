import React from 'react';
import { MapContainer, TileLayer, Marker, Polyline, Popup } from 'react-leaflet';
import L from 'leaflet';

const droneIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/854/854866.png',
  iconSize: [32, 32],
});

const MapView = ({ dronePositions, path }) => {
  const defaultCenter = [19.0760, 72.8777];

  return (
    <div className="w-full h-[500px] rounded-xl shadow">
      <MapContainer center={defaultCenter} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {path && path.length > 0 && (
          <Polyline positions={path} color="blue" />
        )}

        {dronePositions && dronePositions.map((drone, i) => (
          <Marker
            key={i}
            position={[drone.lat, drone.lng]}
            icon={droneIcon}
          >
            <Popup>
              <strong>{drone.name}</strong><br />
              Battery: {drone.battery}%
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
