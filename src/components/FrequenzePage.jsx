import React from 'react';
import { Link } from 'react-router-dom';
import SoundSelection from './SoundSelection';

const frequencySounds = [
  { 
    name: '432 Hz', 
    description: 'Body and mind healing frequencies at 432 Hz.', 
    path: '/sounds/432hz', 
    image: '/images/432hz.jpg', 
    audio: '/audio/432hz.mp3'
  },
  { 
    name: '528 Hz', 
    description: 'Love and miracle tone at 528 Hz.', 
    path: '/sounds/528hz', 
    image: '/images/528hz.jpg', 
    audio: '/audio/528hz.mp3'
  },
  { 
    name: '639 Hz', 
    description: 'Harmonize relationships at 639 Hz.', 
    path: '/sounds/639hz', 
    image: '/images/639hz.jpg', 
    audio: '/audio/639hz.mp3'
  }
];

const FrequenzePage = () => {
  return (
    <div>
      <h2>Frequency Sounds</h2>
      <p>Choose a frequency for your healing meditation.</p>
      <SoundSelection sounds={frequencySounds} />
      <Link to="/categories">
        <button className="back-button">Back to Categories</button>
      </Link>
    </div>
  );
};

export default FrequenzePage;
