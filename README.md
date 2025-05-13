Drone Survey Management System
A scalable platform to plan, manage, and monitor autonomous drone surveys across multiple global sites. Built using React for the frontend and Node.js (with WebSocket support) for the backend.

🚀 Key Features
🗺️ Mission Planning
Define survey areas and waypoints

Configure altitude, overlap percentage, and flight patterns

Set sensor data collection frequency

🛩️ Fleet Management Dashboard
Organization-wide drone inventory tracking

Real-time drone statuses: Available, In-Mission

Battery levels and drone vitals display

📡 Real-Time Monitoring
Live mission path visualization on interactive map

Mission control: Pause, Resume, Abort options

Live progress tracking and mission status updates

📊 Reporting & Analytics
Survey-specific reports (duration, coverage, performance)

Organization-wide analytics (missions completed, active drones, etc.)

🧰 Tech Stack
Tech	Description
React	Frontend library
Node.js + Express	Backend REST APIs
Socket.IO	Real-time communication
MongoDB	NoSQL database
Leaflet	Interactive map integration

🛠️ Installation Guide
Backend Setup
bash
Copy
Edit
cd server
npm install
npm run dev
Frontend Setup
bash
Copy
Edit
cd client
npm install
npm run dev
📁 Folder Structure
pgsql
Copy
Edit
server/
├── controllers/
├── models/
├── routes/
├── socket/
├── config/
└── server.js

client/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── App.jsx
⚙️ Trade-offs & Architecture
Focused on mission planning, fleet management, and real-time monitoring.

Excluded video streaming or 3D terrain generation to maintain simplicity and scope.

Chose MongoDB for dynamic mission/report schemas.

Used Socket.IO to avoid inefficient HTTP polling.

🔐 Safety & Scalability Considerations
Supports mission pause/resume/abort for robust control.

Modular REST + WebSocket architecture for easy horizontal scaling.

Future-ready: easily extendable to include authentication and direct drone API integration.