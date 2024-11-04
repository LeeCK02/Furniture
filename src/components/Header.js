import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-logo">
            Furniture
      </div>
      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About Us</Link>
        <Link to="/orders">Orders</Link>
      </nav>
      <div className="header-icons">
      <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
        <i className="fas fa-heart"></i>
        <i className="fas fa-user"></i>
      </div>
    </header>
  );
}

export default Header;
