// src/components/Brand.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Brand.css';

// Import brand images from assets
import saatvaImage from '../assets/images/saatva.jpeg';
import floydImage from '../assets/images/floyd.png';
import castleryImage from '../assets/images/castlery.png';
import novogratzImage from '../assets/images/novagratz.png';
import burrowImage from '../assets/images/burrow.png';
import artifoxImage from '../assets/images/artifox.png';

function Brand() {
  const navigate = useNavigate();

  const handleBrandClick = (brand) => {
    // Navigate to the Shop page with the brand as a query parameter
    navigate(`/shop?brand=${brand}`);
  };

  return (
    <section className="brand-section">
      <h2>Brand</h2>
      <div className="brand-grid">
        <div className="brand-card" onClick={() => handleBrandClick('Saatva')}>
          <img src={saatvaImage} alt="Saatva" />
          <p>Saatva</p>
        </div>
        <div className="brand-card" onClick={() => handleBrandClick('Floyd Home')}>
          <img src={floydImage} alt="Floyd Home" />
          <p>Floyd Home</p>
        </div>
        <div className="brand-card" onClick={() => handleBrandClick('Castlery')}>
          <img src={castleryImage} alt="Castlery" />
          <p>Castlery</p>
        </div>
        <div className="brand-card" onClick={() => handleBrandClick('Novogratz')}>
          <img src={novogratzImage} alt="Novogratz" />
          <p>Novogratz</p>
        </div>
        <div className="brand-card" onClick={() => handleBrandClick('Burrow')}>
          <img src={burrowImage} alt="Burrow" />
          <p>Burrow</p>
        </div>
        <div className="brand-card" onClick={() => handleBrandClick('Artifox')}>
          <img src={artifoxImage} alt="Artifox" />
          <p>Artifox</p>
        </div>
      </div>
      <button className="brand-button">More Brand</button>
    </section>
  );
}

export default Brand;
