import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to FitnessApp</h1>
      <p>Your journey to a healthier life starts here. Navigate through our app to set goals, find workouts, and track your progress.</p>
      <div className="quick-links">
        <Link to="/goals" className="quick-link">Set Your Goals</Link>
        <Link to="/workouts" className="quick-link">Explore Workouts</Link>
        <Link to="/dashboard" className="quick-link">View Dashboard</Link>
      </div>
    </div>
  );
}

export default Home;