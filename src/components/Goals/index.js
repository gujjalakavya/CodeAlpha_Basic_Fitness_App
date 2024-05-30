import React, { useState } from 'react';
import './index.css'; // Assuming we are adding some styles

function Goals() {
  const [goal, setGoal] = useState('');
  const [progress, setProgress] = useState(0);
  const [targetWeight, setTargetWeight] = useState('');
  const [currentWeight, setCurrentWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleGoalChange = (e) => setGoal(e.target.value);
  const handleProgressChange = (e) => setProgress(e.target.value);
  const handleTargetWeightChange = (e) => setTargetWeight(e.target.value);
  const handleCurrentWeightChange = (e) => setCurrentWeight(e.target.value);
  const handleHeightChange = (e) => setHeight(e.target.value);

  const calculateBMI = () => {
    if (currentWeight && height) {
      return (currentWeight / ((height / 100) ** 2)).toFixed(2);
    }
    return null;
  };

  return (
    <div className="goals">
      <h1>Set Your Fitness Goals</h1>
      <form>
        <label>
          Goal:
          <input type="text" value={goal} onChange={handleGoalChange} />
        </label>
        <label>
          Progress (%):
          <input type="number" value={progress} onChange={handleProgressChange} />
        </label>
        <label>
          Current Weight (kg):
          <input type="number" value={currentWeight} onChange={handleCurrentWeightChange} />
        </label>
        <label>
          Target Weight (kg):
          <input type="number" value={targetWeight} onChange={handleTargetWeightChange} />
        </label>
        <label>
          Height (cm):
          <input type="number" value={height} onChange={handleHeightChange} />
        </label>
        <button type="submit">Save Goal</button>
      </form>
      <div>
        <h2>Your Goal</h2>
        <p>{goal}</p>
        <h2>Your Progress</h2>
        <p>{progress}%</p>
        <h2>Your BMI</h2>
        <p>{calculateBMI()}</p>
      </div>
    </div>
  );
}
export default Goals;