import React from 'react';
import sofa1 from '../assets/images/sofa1.jpg';
import sofa2 from '../assets/images/sofa2.jpeg';
import table1 from '../assets/images/table.jpeg';
import './Orders.css';

function Orders() {
  const orderItems = [
    { id: 1, name: 'Modern Sofa', price: 199.00, quantity: 1, image: sofa1 },
    { id: 2, name: 'Classic Sofa', price: 199.00, quantity: 1, image: sofa2 },
    { id: 3, name: 'Coffee Table', price: 199.00, quantity: 1, image: table1 },
  ];

  return (
    <div className="order-page">
      <h2>My Order</h2>
      <div className="order-summary">
        <div className="order-header">
          <p>Order #12389149218312</p>
          <p>Order placed: 8 September 2024</p>
          <p>Total: RM 597.00</p>
        </div>
        
        <div className="order-items">
          {orderItems.map(item => (
            <div className="order-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="order-item-details">
                <p className="item-name">{item.name}</p>
                <p className="item-description">Lorem ipsum</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <p className="item-price">RM {item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>

        <button className="track-order-btn">Track Order</button>
      </div>
    </div>
  );
}

export default Orders;
