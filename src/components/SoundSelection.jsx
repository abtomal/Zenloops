import React, { useState, useRef } from 'react';

const SoundSelection = ({ sounds }) => {
  const [currentSound, setCurrentSound] = useState(null);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false); 
  const audioRef = useRef(null);
  const timerRef = useRef(null); 

  const handlePlaySound = (sound) => {
 
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // suono da riprodurre
    setCurrentSound(sound);
  };

  const startTimer = () => {
    
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Se il timer è in pausa
    if (isPaused) {
      setIsPaused(false);
      audioRef.current.play();
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null; 
            if (audioRef.current) {
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return;
    }

    const totalSeconds = minutes * 60 + seconds;
    setTimeLeft(totalSeconds);

    // Avvia la riproduzione del nuovo suono
    if (audioRef.current) {
      audioRef.current.play();
    }

    // timer
    if (totalSeconds > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            timerRef.current = null; 
            if (audioRef.current) {
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current); 
    timerRef.current = null; 
    setIsPaused(true); 
    if (audioRef.current) {
      audioRef.current.pause(); 
    }
  };

  return (
    <div className="main-container">
      <div className={`sound-container ${currentSound ? 'move-left' : ''}`}>
        {sounds.map((sound) => (
          <div key={sound.name} className="sound-card">
            <img src={sound.image} alt={sound.name} className="sound-image" />
            <div className="sound-card-content">
              <h3>{sound.name}</h3>
              <p>{sound.description}</p>
              <button className="sound-button" onClick={() => handlePlaySound(sound)}>
                Play {sound.name}
              </button>
            </div>
          </div>
        ))}
      </div>

      {currentSound && (
        <div className="player-section">
          <h3>Your Choice: {currentSound.name}</h3>
          <audio ref={audioRef} key={currentSound.audio} controls loop>
            <source src={currentSound.audio} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>

          <div className="timer-section">
            <label htmlFor="minutes">Minutes: </label>
            <input 
                type="number" 
                id="minutes" 
                className="timer-input"
                value={minutes} 
                onChange={(e) => setMinutes(Number(e.target.value))} 
            />
            <label htmlFor="seconds">Seconds: </label>
            <input 
                type="number" 
                id="seconds" 
                className="timer-input"
                value={seconds} 
                onChange={(e) => setSeconds(Number(e.target.value))} 
            />
            <br></br>
            <br></br>
            <button onClick={startTimer} className="start-timer-button">
              {isPaused ? "Resume Meditation" : "Start Meditation"}
            </button>
            <button onClick={stopTimer} className="pause-timer-button">Pause Meditation</button>
          </div>

          <div className="time-left">
            Time Left: {Math.floor(timeLeft / 60)}:{timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60}
          </div>
        </div>
      )}
    </div>
  );
};

export default SoundSelection;
