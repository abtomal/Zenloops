import React from 'react';
import { Link } from 'react-router-dom';
import SoundSelection from './SoundSelection';

const natureSounds = [
  { 
    name: 'Rainforest', 
    description: 'Relaxing sounds of the rainforest.', 
    path: '/sounds/rainforest', 
    image: '/images/rainforest.jpg', 
    audio: '/audio/rainforest.mp3'
  },
  { 
    name: 'Ocean Waves', 
    description: 'Calming waves from the ocean to your mind.', 
    path: '/sounds/ocean-waves', 
    image: '/images/ocean-waves.jpg', 
    audio: '/audio/ocean-waves.mp3'
  },
  { 
    name: 'Mountain Stream', 
    description: 'Peaceful sounds of a mountain stream.', 
    path: '/sounds/mountain-stream', 
    image: '/images/mountain-stream.jpg', 
    audio: '/audio/mountain-stream.mp3'
  }
];

const NaturaPage = () => {
  return (
    <div>
      <h2>Nature Sounds</h2>
      <p>Select a sound to start your meditation.</p>
      <SoundSelection sounds={natureSounds} />
      <Link to="/categories">
        <button className="back-button">Back to Categories</button>
      </Link>
    </div>
  );
};

export default NaturaPage;
