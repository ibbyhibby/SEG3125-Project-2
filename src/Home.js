import React from 'react';
import { Navbar } from './Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gif from './video.gif';
import ChatButton from './ChatButton'

import nintendo from './Assets/nintendo.png';  
import playstation from './Assets/playstation.png';  
import xbox from './Assets/xbox.png'; 


const styles = `
.home-page {
  background-color: #fff;
  color: #000;
  position: relative;
}

.home-page .header-text {
  font-size: 3rem;
  font-weight: bold;
  margin-top: 2rem;
}

.home-page .sub-header-text {
  font-size: 3rem;
  font-weight: bold;
  margin-top: 2rem;
}

.home-page .console-section {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.home-page .console-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
}

.home-page .console-icon {
  width: 120px; // Increase from 100px to 120px
  height: auto;
}

.home-page .console-caption {
  font-size: 1.2rem;
  font-weight: bold;
}

.home-page .location-text {
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 3rem;
}

.map-container {
  margin-top: 50px;
  padding: 20px;
}

.map-container iframe {
  width: calc(100% - 40px);
  height: 400px;
  border: none;
  border-radius: 20px;
  padding-bottom: 27px;
}

.home-page footer {
  color: #fff;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background-color: #212529;
}

.home-page .footer-link {
  color: #fff;
  margin: 0 1.5rem;
}

.home-page .footer-link:hover {
  color: #ddd;
  text-decoration: none;
}
`;


export const Home = () => {
    const consoles = [
        {img: nintendo, link: '/nintendo', name: 'Nintendo'},
        {img: playstation, link: '/playstation', name: 'Playstation'},
        {img: xbox, link: '/xbox', name: 'Xbox'}
    ];

    return (
        <div className="home-page">
            <style>{styles}</style>
            <Navbar />
            <Container className="mt-3">
                <Row>
                    <Col className="text-center">
                        <img src={gif} alt="Animated" className="video-gif"/>
                        <h1 className="header-text">Welcome to RetroPie Game Shop</h1>
                        <p>Your one stop shop for all your retro gaming needs. Select your favorite console brand on the right side to get started!</p>
                    </Col>
                </Row>
                <div className="console-section">
                    {consoles.map((console, index) => (
                        <div className="console-card" key={index}>
                            <Link to={console.link}>
                                <img src={console.img} className="console-icon mx-2" alt="console"/>
                            </Link>
                            <h4 className="console-caption">{console.name}</h4>
                        </div>
                    ))}
                </div>
            </Container>
            <h2 className="location-text">Location</h2>
            <div className="embed-responsive embed-responsive-16by9 map-container">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.4375561201637!2d-75.68566427130963!3d45.42068029626011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05a77c7aaaab%3A0xa2490555154bd631!2s150%20Louis-Pasteur%20Private%2C%20Ottawa%2C%20ON%20K1N%209A7!5e0!3m2!1sen!2sca!4v1688330108310!5m2!1sen!2sca"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
            </div>
            <>
             <ChatButton />
           </>
            <footer className="text-center mt-5">
                <Link to="/" className="nav-button">Home</Link>
                <Link to="/LearnMore" className="nav-button">About</Link>
                <Link to="/Contact" className="nav-button">Contact</Link>
            </footer>
        </div>
    );
}
