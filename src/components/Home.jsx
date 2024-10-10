import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/zenloops.png'; 

const Home = () => {
  return (
    <div className="home">
      <h1>ZenLoops</h1>
      <img src={logo} alt="ZenLoops Logo" className="home-logo" /> 
      <h2>The loop of calm you've been searching for.</h2>
      <h3>Choose your loop. Choose the duration. Meditate.</h3>
      <Link to="/categories">
        <button className="homebt">Choose your loop.</button>
      </Link>
    </div>
  );
};

export default Home;