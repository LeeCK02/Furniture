import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Category.css';

// Import images from assets
import sofaImage from '../assets/images/sofa.jpg';
import tableImage from '../assets/images/table.jpeg';
import chairImage from '../assets/images/chairs.jpeg';
import bedImage from '../assets/images/bed.jpeg';
import lampImage from '../assets/images/lamp1.jpeg';
import decorationImage from '../assets/images/decoration.jpg';

function Category() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // Navigate to the Shop page with the category as a query parameter
    navigate(`/shop?category=${category}`);
  };

  return (
    <section className="category-section">
      <h2>Category</h2>
      <div className="category-grid">
        <div className="category-card" onClick={() => handleCategoryClick('Sofa')}>
          <img src={sofaImage} alt="Sofa" />
          <p>Sofa</p>
        </div>
        <div className="category-card" onClick={() => handleCategoryClick('Table')}>
          <img src={tableImage} alt="Table" />
          <p>Table</p>
        </div>
        <div className="category-card" onClick={() => handleCategoryClick('Chair')}>
          <img src={chairImage} alt="Chair" />
          <p>Chair</p>
        </div>
        <div className="category-card" onClick={() => handleCategoryClick('Bed')}>
          <img src={bedImage} alt="Bed" />
          <p>Bed</p>
        </div>
        <div className="category-card" onClick={() => handleCategoryClick('Lamp')}>
          <img src={lampImage} alt="Lamp" />
          <p>Lamp</p>
        </div>
        <div className="category-card" onClick={() => handleCategoryClick('Decoration')}>
          <img src={decorationImage} alt="Decoration" />
          <p>Decoration</p>
        </div>
      </div>
      <button className="category-button">More Category</button>
    </section>
  );
}

export default Category;
