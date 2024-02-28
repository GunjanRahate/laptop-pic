// MyComponent.js
import React from 'react';
import './MyComponent.css'; // Import the CSS file
import latop1 from '../src/img/laptop1.jpeg';

const MyComponent = () => {
  return (
    <div>
      <section className="main-section">
        <h1>CUSTOM SYNTHESIS & ANALYSIS</h1>

        <div className="lines-container">
          <div className="line"></div>
          <div className="cart-icon">
            <i className="fa-regular fa-circle" style={{ color: 'aqua' }}></i>
          </div>
          <div className="line"></div>
        </div>

        <p>Our Synthesis Service team chemists are skilled in performing complex, multi-step synthesis and solving challenging chemistry problems. Our Analytical Services team consists of highly skilled scientists with expertise in modern analytical techniques, supported by state-of-the-art instruments.</p>

        <img src={latop1} alt="" className="main-image" />
      </section>
    </div>
  );
};

export default MyComponent;
