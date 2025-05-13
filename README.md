Drone Survey Management System
A scalable platform to plan, manage, and monitor autonomous drone surveys across multiple global sites. Built using React for the frontend and Node.js (with WebSocket support) for the backend.

Key Features
Mission Planning
Define survey areas & waypoints

Configure altitude, overlap %, and patterns

Set sensor collection frequency

Fleet Management Dashboard
Organization-wide drone inventory

Real-time status: available, in-mission

Battery levels & vitals

Real-Time Monitoring
Live mission path visualization on map

Mission control: pause/resume/abort

Progress tracker & status updates

Reporting & Analytics
Individual survey details (duration, coverage, etc.)

Org-wide statistics (missions completed, active drones)

Tech Stack
Tech	Description
React	Frontend library
Node.js + Express	Backend REST APIs
Socket.IO	Real-time drone updates
MongoDB	NoSQL Database
Leaflet	Map integration for monitoring

Installation Guide
Backend
bash
Copy
Edit
cd server
npm install
npm run dev
Frontend
bash
Copy
Edit
cd client
npm install
npm run dev
Folder Structure
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
Trade-offs & Architecture
Prioritized mission planning, fleet management, and real-time monitoring over video/3D data generation (out of scope).

Used MongoDB for flexible data modeling of missions & reports.

Real-time data via Socket.IO, avoiding heavy polling.

Safety & Scalability Considerations
Mission abort/resume capabilities ensure fallback control.

Modular REST + WebSocket architecture supports horizontal scaling.

Can integrate authentication and drone APIs in the future.