import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Workouts from './components/Workouts';
import Goals from './components/Goals';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div>
        <h1>Fitness Tracking App</h1>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
