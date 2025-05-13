import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MissionPlanner from './components/MissionPlanner';
import DroneDashboard from './components/DroneDashboard';
import MissionMonitor from './components/MissionMonitor';
import SurveyReports from './components/SurveyReports';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MissionPlanner />} />
        <Route path="/drones" element={<DroneDashboard />} />
        <Route path="/monitor" element={<MissionMonitor />} />
        <Route path="/reports" element={<SurveyReports />} />
      </Routes>
    </Router>
  );
}

export default App;
