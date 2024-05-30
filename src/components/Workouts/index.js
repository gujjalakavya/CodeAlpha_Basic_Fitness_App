import React from 'react';
import './index.css'; // Assuming we are adding some styles

const workouts = [
  {
    name: 'Beginner Full Body',
    description: 'A simple full-body workout for beginners.',
    video: 'https://www.youtube.com/embed/cbKkB3POqaY',
  },
  {
    name: 'Cardio Blast',
    description: 'High-intensity cardio workout.',
    video: 'https://www.youtube.com/embed/QTDbxTT8Pm8',
  },
  {
    name: 'Strength Training',
    description: 'Build strength with these exercises.',
    video: 'https://www.youtube.com/embed/lA-diBuGy6I',
  },
];

function Workouts() {
  return (
    <div className="workouts">
      <h1>Workouts</h1>
      <p>Select a workout plan or create your own custom workout routine.</p>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <h2>{workout.name}</h2>
            <p>{workout.description}</p>
            <div className="video-container">
              <iframe 
                width="660" 
                height="315" 
                src={workout.video} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                title={workout.name}
              ></iframe>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;