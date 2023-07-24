import React, { useState } from 'react';
import { FaTimes, FaRobot, FaUser } from 'react-icons/fa'; // import the icons

const styles = `
.chatbot {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  height: 400px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  color: #000;
}

.chatbot-close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.chatbot-messages {
  flex-grow: 1;
  overflow-y: auto;
}

.chatbot-input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 10px;
}

.chatbot-messages .bot-message, .chatbot-messages .user-message {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.chatbot-messages .bot-message {
  justify-content: flex-start;
}

.chatbot-messages .user-message {
  justify-content: flex-end;
}

.bot-icon, .user-icon {
  margin-right: 5px;
}

.message-text {
  max-width: 70%;
  background: #e6e6e6;
  padding: 5px 10px;
  border-radius: 10px;
}
`;

const Chatbot = ({ onClose }) => {
  const [messages, setMessages] = useState([{text: 'Welcome to RetroPie! How can I help you?', sender: 'bot'}]);
  const [input, setInput] = useState('');

  const addMessage = () => {
    setMessages([...messages, { text: input, sender: 'user' }, { text: 'Hmm. I didnt get that. Please email the store at contact@retropie.ca', sender: 'bot' }]);
    setInput('');
  };

  return (
    <div className="chatbot">
      <style>{styles}</style>
      <FaTimes className="chatbot-close" onClick={onClose} />
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`${message.sender}-message`}>
            {message.sender === 'bot' ? <FaRobot className="bot-icon"/> : <FaUser className="user-icon"/>}
            <p className="message-text">{message.text}</p>
          </div>
        ))}
      </div>
      <input className="chatbot-input" type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyUp={(e) => e.key === 'Enter' && addMessage()} />
    </div>
  );
};

export default Chatbot;
