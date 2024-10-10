import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 Alessandro Ponton for ZenLoops. All rights reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '5px 5px', 
    textAlign: 'center',
    color: 'white',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
  }
};

export default Footer;
