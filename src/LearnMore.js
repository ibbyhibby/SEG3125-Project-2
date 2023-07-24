import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import gameImage from './Assets/xbox.png';
import ChatButton from './ChatButton';
import accessoryImage from './Assets/playstation.png';

const styles = `
  .learn-more-page-footer {
    color: #fff;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #000;
  }

  .learn-more-page-footer-link {
    color: #fff;  
    margin: 0 1.5rem;
  }

  .learn-more-page-footer-link:hover {
    color: #ddd;
    text-decoration: none;
  }
`;

const LearnMore = () => {
  return (
    <div style={{ color: '#000' }}>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ width: '80%', maxWidth: '800px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', color: '#000' }}>Learn More</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '2rem' }}>
            <div style={{ flex: 1, maxWidth: '300px' }}>
              <img src={gameImage} alt="Game" style={{ width: '100%', borderRadius: '5px', marginBottom: '1rem' }} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#000' }}>Find Your Favorite Games</h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>
                Discover a vast collection of classic retro games. From nostalgic favorites to hidden gems, we have something for every gaming enthusiast.
              </p>
            </div>
            <div style={{ flex: 1, maxWidth: '300px' }}>
              <img src={accessoryImage} alt="Accessory" style={{ width: '100%', borderRadius: '5px', marginBottom: '1rem' }} />
              <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#000' }}>Enhance Your Gaming Experience</h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.5', color: '#000' }}>
                Elevate your gaming experience with our wide range of accessories. From controllers to cables, we offer high-quality products to enhance your retro gaming setup.
              </p>
            </div>
          </div>
          <p style={{ fontSize: '1rem', lineHeight: '1.5', marginTop: '2rem', color: '#000' }}>
          Ready to get started? 
          <Link to="/Contact" style={{ color: '#007BFF', textDecoration: 'none' }}> Contact us</Link> for more information or browse our 
          <Link to="/Nintendo" style={{ color: '#007BFF', textDecoration: 'none' }}> Nintendo Games </Link> section, 
          <Link to="/Playstation" style={{ color: '#007BFF', textDecoration: 'none' }}> PlayStation Games</Link>, or our 
          <Link to="/xbox" style={{ color: '#007BFF', textDecoration: 'none' }}> Xbox Games</Link>.
        </p>
        <ChatButton />
      </div>
    </div>
    <style>{styles}</style>
    <footer className="text-center mt-5">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/LearnMore" className="nav-button">About</Link>
        <Link to="/Contact" className="nav-button">Contact</Link>
    </footer>
  </div>
);
};


export default LearnMore;