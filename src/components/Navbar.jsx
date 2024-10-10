import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/zenloops.png';  

const Navbar = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <nav style={styles.navbar}>
      <div 
        style={styles.logoContainer} 
        onMouseEnter={() => setShowTooltip(true)} 
        onMouseLeave={() => setShowTooltip(false)}
      >
        <img src={logo} alt="ZenLoops Logo" style={styles.navLogo} />
        {showTooltip && <div style={styles.tooltip}>ZenLoops</div>}
      </div>
      <ul style={styles.navLinks}>
        <li>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',  
    padding: '5px 10px',
    backgroundColor: '#0c00ba73',
    color: 'white',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '18px',
  },
  navLogo: {
    width: '50px',  
  },
  logoContainer: {
    position: 'relative', 
  },
  tooltip: {
    position: 'absolute',
    bottom: '-30px', 
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#000',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '14px',
    whiteSpace: 'nowrap',
  },
};

export default Navbar;
