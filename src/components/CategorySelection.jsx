import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Nature', path: '/categories/nature', description: 'Immerse yourself in the soothing sounds of nature.', className: 'category-card-nature', soundSrc: '/sounds/nature-sound.mp3' },
  { name: 'Drones', path: '/categories/drones', description: 'Explore deep and meditative soundscapes.', className: 'category-card-drones', soundSrc: '/sounds/drones-sound.mp3' },
  { name: 'Frequencies', path: '/categories/frequencies', description: 'Join the loop of frequencies that resonate with you.', className: 'category-card-frequencies', soundSrc: '/sounds/frequencies-sound.mp3' },
  { name: 'Guided', path: '/categories/guided', description: 'Let yourself be guided through meditative sessions.', className: 'category-card-guided', soundSrc: '/sounds/guided-sound.mp3' }
];

const CategorySelection = () => {
  const audioRef = useRef(null);


  const handleHover = (soundSrc) => {
    if (audioRef.current) {
      audioRef.current.src = soundSrc; 
      audioRef.current.currentTime = 0; 
      audioRef.current.play(); 
    }
  };

  const handleMouseLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause(); 
      audioRef.current.currentTime = 0; 
    }
  };

  return (
    <>
      <h1>ZenLoops</h1>
      <h3>Choose your loop. Choose the duration. Meditate.</h3>
      <div className="category-container">
        {categories.map((category) => (
          <div key={category.name} className={`category-card ${category.className}`}>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <Link to={category.path}>
              <button 
                className="category-button" 
                onMouseEnter={() => handleHover(category.soundSrc)}
                onMouseLeave={handleMouseLeave} 
              >
                Explore {category.name}
              </button>
            </Link>
          </div>
        ))}
      </div>
      {/* sound*/}
      <audio ref={audioRef} style={{ display: 'none' }} />
    </>
  );
};

export default CategorySelection;
