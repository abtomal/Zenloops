import React from 'react';
import { Link } from 'react-router-dom';
import SoundSelection from './SoundSelection';

const droneSounds = [
  { 
    name: 'Deep Drone', 
    description: 'A deep, calming drone sound.', 
    path: '/sounds/deep-drone', 
    image: '/images/deep-drone.jpg', 
    audio: '/audio/deep-drone.mp3'
  },
  { 
    name: 'Harmonic Waves', 
    description: 'Harmonic waves for meditation.', 
    path: '/sounds/harmonic-waves', 
    image: '/images/harmonic-waves.jpg', 
    audio: '/audio/harmonic-waves.mp3'
  },
  { 
    name: 'Binaural Beats', 
    description: 'Soft binaural beats for focus.', 
    path: '/sounds/binaural-beats', 
    image: '/images/binaural-beats.jpg', 
    audio: '/audio/binaural-beats.mp3'
  }
];

const DroniPage = () => {
  return (
    <div>
      <h2>Drone Sounds</h2>
      <p>Select a drone sound for deep meditation.</p>
      <SoundSelection sounds={droneSounds} />
      <Link to="/categories">
        <button className="back-button">Back to Categories</button>
      </Link>
    </div>
  );
};

export default DroniPage;
