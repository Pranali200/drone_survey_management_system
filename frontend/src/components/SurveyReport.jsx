import React, { useEffect, useState } from 'react';
import api from '../api/axiosConfig';

const SurveyReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const { data } = await api.get('/reports');
      setReports(data);
    };
    fetchReports();
  }, []);

  return (
    <div>
      <h2>Survey Reports</h2>
      <ul>
        {reports.map((r) => (
          <li key={r._id}>{r.summary} - Duration: {r.duration} mins</li>
        ))}
      </ul>
    </div>
  );
};

export default SurveyReports;
