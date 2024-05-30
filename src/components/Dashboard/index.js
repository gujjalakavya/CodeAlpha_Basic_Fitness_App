import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './index.css'; // Assuming we are adding some styles

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Weight (kg)',
      data: [70, 68, 66, 65, 63, 62],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
    },
    {
      label: 'Calories Burned',
      data: [2000, 2200, 2500, 2300, 2600, 2700],
      borderColor: 'rgba(153,102,255,1)',
      backgroundColor: 'rgba(153,102,255,0.2)',
    },
  ],
};

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Overview of your fitness progress.</p>
      <div className="chart">
        <Line data={data} />
      </div>
      <div className="summary">
        <h2>Activity Summary</h2>
        <p>Weight: 62kg</p>
        <p>Workout Frequency: 3 times/week</p>
        <p>Calories Burned: 2700 kcal</p>
      </div>
    </div>
  );
}

export default Dashboard;