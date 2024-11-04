import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import sofa1 from '../assets/images/sofa1.jpg';
import sofa2 from '../assets/images/sofa2.jpeg';
import table1 from '../assets/images/table.jpeg';
import lamp2 from '../assets/images/lamp2.jpg';
import decoration1 from '../assets/images/decoration1.jpg';
import decoration2 from '../assets/images/decoration2.jpg';
import './Cart.css';

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Modern Sofa', price: 199, quantity: 1, image: sofa1 },
    { id: 2, name: 'Classic Sofa', price: 199, quantity: 1, image: sofa2 },
    { id: 3, name: 'Coffee Table', price: 199, quantity: 1, image: table1 }
  ]);

  const navigate = useNavigate();  // Initialize the navigate function

  const handleQuantityChange = (id, delta) => {
    setCartItems(cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    navigate('/checkout');  // Navigate to the checkout page when clicked
  };

  const handleContinueShopping = () => {
    navigate('/shop');  // Navigate to the shop page when clicked
  };

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <button className="continue-shopping" onClick={handleContinueShopping}>← Continue Shopping</button>
      
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-description">Lorem ipsum</p>
              </div>
              <p className="item-price">RM {item.price.toFixed(2)}</p>
              <div className="item-quantity">
                <button onClick={() => handleQuantityChange(item.id, -1)} className="quantity-btn">-</button>
                <input type="number" value={item.quantity} readOnly />
                <button onClick={() => handleQuantityChange(item.id, 1)} className="quantity-btn">+</button>
              </div>
              <p className="item-total">RM {(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => handleRemoveItem(item.id)} className="remove-item">
                <FaTrash />
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Do you have a voucher?</h3>
          <input type="text" placeholder="Enter the code" />
          <button className="redeem-btn">Redeem</button>
          <div className="summary-details">
            <p>Subtotal: <span>RM 597.00</span></p>
            <p>Total: <span>RM 597.00</span> (VAT included)</p>
          </div>
          <button className="checkout-btn" onClick={handleCheckout}>Safe to checkout</button>  {/* Attach onClick handler */}
        </div>
      </div>

      <h3>Recently Viewed Products</h3>
      <div className="recently-viewed">
        <div className="product-card"> 
          <img src={lamp2} alt="Product Name" />
          <p>Chinese Lamp</p>
          <p>RM 119.00</p>
        </div>
        <div className="product-card"> 
          <img src={decoration1} alt="Product Name" />
          <p>Decoration Mirror</p>
          <p>RM 119.00</p>
        </div>
        <div className="product-card"> 
          <img src={decoration2} alt="Product Name" />
          <p>Decoration Stand</p>
          <p>RM 119.00</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
