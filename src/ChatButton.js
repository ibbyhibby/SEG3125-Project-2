import React, { useState } from 'react';
import { FaComments, FaTimes } from 'react-icons/fa';
import Chatbot from './Chatbot';

const styles = `
  .chat-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: #a52222;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    z-index: 1001;
  }

  .chat-button:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  .chat-button-icon {
    color: #fff;
    font-size: 1.8rem;
  }

  .tooltip {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 70px;
    background-color: #555;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;

    position: absolute;
    z-index: 1002;
    bottom: 110%; 
    left: 50%;
    margin-left: -35px;

    opacity: 0;
    transition: opacity 0.3s;
  }

  .tooltip:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }
`;

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="tooltip">
        <div className="chat-button" onClick={() => setIsOpen(!isOpen)}>
          <style>{styles}</style>
          {isOpen ? <FaTimes className="chat-button-icon" /> : <FaComments className="chat-button-icon" />}
        </div>
        <span className="tooltiptext">Chat Bot</span>
      </div>
      {isOpen && <Chatbot onClose={() => setIsOpen(false)}/>}
    </>
  );
};

export default ChatButton;
