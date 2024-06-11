import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Assuming you will style it in a separate CSS file

const Home = () => {
  const navigate = useNavigate();

  const handleGalleryRedirect = () => {
    navigate('/gallery');
  };

  return (
    <div className="home-container">
      <h2>Welcome to the Home Page!</h2>
      <div className="hero-section">
        <img src="iphone-15-rumors.webp" alt="Hero" className="hero-image" />
        <p className="hero-text">
          Explore our amazing gallery of beautiful images. Click the button below to get started!
        </p>
      </div>
      <button className="gallery-button" onClick={handleGalleryRedirect}>
        Go To Gallery
      </button>
    </div>
  );
}

export default Home;
