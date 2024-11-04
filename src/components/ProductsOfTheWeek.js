import React from 'react';
import { Link } from 'react-router-dom';
import './ProductsOfTheWeek.css';
import sofa1 from '../assets/images/sofa1.jpg';
import table1 from '../assets/images/table.jpeg';
import lamp2 from '../assets/images/lamp2.jpg';

function ProductsOfTheWeek() {
    return (
      <section className="products-section">
        <h2>Products of the Week</h2>
        <div className="products-grid">
          <Link to="/product/1" className="product-card">
            <img src={sofa1} alt="Pot" />
            <p>Modern Sofa</p>
            <p>RM 299.00</p>
          </Link>
          <Link to="/product/3" className="product-card">
            <img src={table1} alt="Lamp" />
            <p>Dining Table</p>
            <p>RM 499.00</p>
          </Link>
          <Link to="/product/10" className="product-card">
            <img src={lamp2} alt="Chair" />
            <p>Chinese Lamp</p>
            <p>RM 119.00</p>
          </Link>
        </div>
      </section>
    );
}

export default ProductsOfTheWeek;