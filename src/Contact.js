import React from 'react';
import { Navbar } from './Navbar';
import { Container, Row, Col } from 'react-bootstrap';
import { FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';
import ChatButton from './ChatButton';

const styles = `
.contact-page {
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  position: relative;
  padding-bottom: 50px;
}

.contact-page-container {
  padding: 50px 0;
  background-color: #f8f8f8;
  text-align: center;
}

.secondary-header {
  text-align: center;
  margin-top: 30px;
}

.secondary-header h2 {
  font-size: 2rem;
  color: white;
}

.contact-options {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.contact-option {
  flex: 1 0 300px;
  margin: 15px;
  padding: 30px;
  background-color: #a52222;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.contact-option a {
  color: inherit;
  text-decoration: none;
}

.contact-option:hover {
  transform: translateY(-5px);
}

.contact-icon {
  font-size: 3rem;
  margin-bottom: 10px;
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
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: black;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

p {
  margin-bottom: 0;
}

.chatbot-button-container {
  cursor: pointer;
}

.chatbot {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 300px;
  height: 500px;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.close-button {
  align-self: flex-end;
}

.message {
  margin: 10px 0;
}

.message.bot {
  align-self: flex-start;
  color: black;
}

.message.user {
  align-self: flex-end;
  color: black;
}
`;

const Contact = () => {
  return (
    <div className="contact-page">
      <style>{styles}</style>
      <Navbar />
      <div className="contact-page-container">
        <Container>
          <h1>Contact Us</h1>
          <Row className="contact-options">
            <Col md={4} className="contact-option">
              <a href="mailto:contact@retropie.ca">
                <FaEnvelope className="contact-icon" />
                <h3>Email</h3>
                <p>Email us at contact@retropie.com</p>
              </a>
            </Col>
            <Col md={4} className="contact-option">
              <a href="tel:+16131234567">
                <FaPhone className="contact-icon" />
                <h3>Phone</h3>
                <p>Call us at +1 613-123-4567</p>
              </a>
            </Col>
            <Col md={4} className="contact-option">
                <FaComments className="contact-icon" />
                <h3>Live Chat</h3>
                <p>CLick the bottom right icon!</p>
            </Col>
            <ChatButton />
          </Row>
          <div className="map-container">
            <h1>Our Location</h1>
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
        </Container>
      </div>
    </div>
  );
};

export default Contact;
