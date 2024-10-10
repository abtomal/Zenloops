import React from 'react';
import { Link } from 'react-router-dom';
import SoundSelection from './SoundSelection';

const guidedSounds = [
  { 
    name: 'Morning Meditation', 
    description: 'Your morning guided relaxation.', 
    path: '/sounds/morning-meditation', 
    image: '/images/morning-meditation.jpg', 
    audio: '/audio/morning-meditation.mp3'
  },
  { 
    name: 'Sleep Meditation', 
    description: 'Unwind and relax before sleep.', 
    path: '/sounds/sleep-meditation', 
    image: '/images/sleep-meditation.jpg', 
    audio: '/audio/sleep-meditation.mp3'
  },
  { 
    name: 'Mindfulness Practice', 
    description: 'Short mindfulness sessions.', 
    path: '/sounds/mindfulness-meditation', 
    image: '/images/mindfulness-meditation.jpg', 
    audio: '/audio/mindfulness-meditation.mp3'
  }
];

const FattiGuidarePage = () => {
  return (
    <div>
      <h2>Guided Meditation</h2>
      <p>Select a guided session for your meditation journey.</p>
      <SoundSelection sounds={guidedSounds} />
      <Link to="/categories">
        <button className="back-button">Back to Categories</button>
      </Link>
    </div>
  );
};

export default FattiGuidarePage;
