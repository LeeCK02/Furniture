import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import sofa1 from '../assets/images/sofa1.jpg';
import sofa2 from '../assets/images/sofa2.jpeg';
import table1 from '../assets/images/table.jpeg';
import './Checkout.css';

function Checkout() {
  const cartItems = [
    { id: 1, name: 'Modern Sofa', price: 199.00, quantity: 1, image: sofa1 },
    { id: 2, name: 'Classic Sofa', price: 199.00, quantity: 1, image: sofa2 },
    { id: 3, name: 'Coffee Table', price: 199.00, quantity: 1, image: table1 },
  ];

  const [voucherCode, setVoucherCode] = useState('');
  const navigate = useNavigate();

  const handleVoucherChange = (e) => setVoucherCode(e.target.value);

  const handleCheckout = () => {
    // Show alert
    alert('Thank you for your purchase! Redirecting to the order page...');
    
    // Redirect to Order page
    navigate('/orders');
  };

  return (
    <div className="checkout-page">
      <h2>Check Out</h2>
      <button className="continue-shopping">← continue shopping</button>

      <div className="checkout-content">
        {/* Billing and Shipping Form */}
        <form className="checkout-form">
          <div className="title-buttons">
            <button className="title-btn active">Mrs.</button>
            <button className="title-btn">Mr.</button>
          </div>

          <div className="form-group">
            <input type="text" placeholder="First name*" required />
            <input type="text" placeholder="Last name*" required />
          </div>
          <input type="email" placeholder="E-Mail*" required />
          <div className="form-group">
            <input type="text" placeholder="Street*" required />
            <input type="text" placeholder="House number*" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="PostCode*" required />
            <input type="text" placeholder="Location*" required />
          </div>
          <select required>
            <option>Select Country</option>
            <option>Malaysia</option>
            <option>Singapore</option>
          </select>
          <input type="text" placeholder="Phone Number" required />
          <div className="checkbox-group">
            <input type="checkbox" id="account" />
            <label htmlFor="account">Create a customer account now and benefit from many advantages.</label>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="shipping-different" />
            <label htmlFor="shipping-different">Shipping Address is Different</label>
          </div>
        </form>

        {/* Payment Method Section */}
        <div className="payment-method">
          <h3>Payment Method</h3>
          <div className="payment-option">
            <input type="radio" name="payment" id="paypal" />
            <label htmlFor="paypal">PayPal</label>
          </div>
          <div className="payment-option">
            <input type="radio" name="payment" id="payplus" />
            <label htmlFor="payplus">PayPal Plus</label>
          </div>
          <div className="payment-option">
            <input type="radio" name="payment" id="credit" />
            <label htmlFor="credit">Credit/Debit Card</label>
            <div className="credit-card-fields">
              <input type="text" placeholder="Credit card number*" />
              <input type="text" placeholder="Expiry Date*" />
              <input type="text" placeholder="CVC / CVV*" />
              <input type="text" placeholder="Name of Cardholder*" />
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="order-summary">
          <h3>Article</h3>
          <div className="summary-items">
            {cartItems.map(item => (
              <div className="summary-item" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="summary-item-details">
                  <p>{item.name}</p>
                  <p>1x Lorem ipsum</p>
                </div>
                <p className="item-price">RM {item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>

          <div className="voucher-section">
            <h4>Do you have a voucher?</h4>
            <input
              type="text"
              value={voucherCode}
              onChange={handleVoucherChange}
              placeholder="Enter the code"
            />
            <button className="redeem-btn">Redeem</button>
          </div>

          <div className="summary-totals">
            <p>Subtotal: <span>RM 597.00</span></p>
            <p>Shipment: <span>100.00</span></p>
            <p>Delivery time 2 - 4 working days</p>
            <div className="total">
              <p>Total: <span>RM 697.00</span> (VAT included)</p>
            </div>
          </div>
          <div className="terms-section">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">T&C is simply dummy text of the printing and typesetting industry</label>
          </div>
          {/* Checkout Button */}
          <button className="checkout-btn" onClick={handleCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
