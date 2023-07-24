import React from 'react';
import { Navbar } from './Navbar';


const styles = `
.coming-soon-page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000000;
}

.coming-soon-content {
  text-align: center;
}

.coming-soon-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.coming-soon-subtitle {
  font-size: 2rem;
  color: #888;
  margin-bottom: 20px;
}

.coming-soon-description {
  font-size: 1.2rem;
  margin-bottom: 10px;
}`


const ComingSoon = () => {
  return (
    <div>
      <Navbar />
      <div className="coming-soon-page-container">
      <style>{styles}</style>
        <div className="coming-soon-content">
          <h1 className="coming-soon-title" style={{ color: 'white' }}>RetroPie Game Store</h1>
          <p className="coming-soon-subtitle">Coming Soon!</p>
          <p className="coming-soon-description">We're working hard to bring you a collection of classic retro games for your entertainment.</p>
          <p className="coming-soon-description">Stay tuned for step5!</p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
