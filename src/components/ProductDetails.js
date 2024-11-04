import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import sofa1 from '../assets/images/sofa1.jpg';
import sofa2 from '../assets/images/sofa2.jpeg';
import table1 from '../assets/images/table.jpeg';
import table2 from '../assets/images/table2.jpeg';
import chair1 from '../assets/images/chair1.jpeg';
import chair2 from '../assets/images/chair2.jpg';
import bed1 from '../assets/images/bed1.jpg';
import bed2 from '../assets/images/bed2.jpeg';
import lamp1 from '../assets/images/lamp1.jpeg';
import lamp2 from '../assets/images/lamp2.jpg';
import decoration1 from '../assets/images/decoration1.jpg';
import decoration2 from '../assets/images/decoration2.jpg';

// Sample product data with descriptions, details, and reviews
const products = [
  {
    id: 1,
    name: 'Modern Sofa',
    price: 299,
    image: sofa1,
    description: 'A modern sofa with a clean, stylish look and soft cushioning, perfect for any living room decor.',
    details: [
      'Material: High-quality polyester fabric',
      'Dimensions: 85 x 35 x 32 inches',
      'Color: Dark green',
      'Assembly: Assembly required',
    ],
    reviews: [
      { user: 'Alice', comment: 'Very comfortable and stylish!', rating: 4 },
      { user: 'Bob', comment: 'Perfect addition to my living room!', rating: 5 },
    ],
  },
  {
    id: 2,
    name: 'Classic Sofa',
    price: 349,
    image: sofa2,
    description: 'A classic sofa with a timeless look, offering comfort and elegance to any space.',
    details: [
      'Material: Leather upholstery',
      'Dimensions: 88 x 36 x 32 inches',
      'Color: Brown',
      'Assembly: No assembly required',
    ],
    reviews: [
      { user: 'Carol', comment: 'Looks amazing and feels great!', rating: 5 },
      { user: 'Dave', comment: 'Quality product, but a bit pricey.', rating: 4 },
    ],
  },
  {
    id: 3,
    name: 'Dining Table',
    price: 499,
    image: table1,
    description: 'A spacious dining table that comfortably seats six, with a modern wood finish.',
    details: [
      'Material: Solid oak wood',
      'Dimensions: 72 x 36 x 30 inches',
      'Color: Natural wood',
      'Assembly: Assembly required',
    ],
    reviews: [
      { user: 'Eve', comment: 'Perfect for family dinners!', rating: 5 },
      { user: 'Frank', comment: 'Sturdy and stylish.', rating: 4 },
    ],
  },
  {
    id: 4,
    name: 'Coffee Table',
    price: 199,
    image: table2,
    description: 'A compact coffee table with storage, ideal for small living rooms.',
    details: [
      'Material: Engineered wood',
      'Dimensions: 40 x 20 x 18 inches',
      'Color: Walnut',
      'Assembly: Assembly required',
    ],
    reviews: [
      { user: 'Grace', comment: 'Great quality and fits well in my space.', rating: 5 },
      { user: 'Hank', comment: 'Good value for the price.', rating: 4 },
    ],
  },
  {
    id: 5,
    name: 'Lounge Chair',
    price: 259,
    image: chair1,
    description: 'A comfortable lounge chair with a reclining feature for ultimate relaxation.',
    details: [
      'Material: Microfiber upholstery',
      'Dimensions: 30 x 30 x 40 inches',
      'Color: Beige',
      'Assembly: No assembly required',
    ],
    reviews: [
      { user: 'Ivy', comment: 'Super comfy for reading!', rating: 5 },
      { user: 'Jack', comment: 'Just what I needed for my living room.', rating: 4 },
    ],
  },
  {
    id: 6,
    name: 'Rocking Chair',
    price: 289,
    image: chair2,
    description: 'A classic rocking chair with a sturdy wooden frame and cushioned seat.',
    details: [
      'Material: Solid wood',
      'Dimensions: 28 x 30 x 42 inches',
      'Color: White',
      'Assembly: Assembly required',
    ],
    reviews: [
      { user: 'Karen', comment: 'So relaxing!', rating: 5 },
      { user: 'Leo', comment: 'My favorite chair in the house.', rating: 5 },
    ],
  },
  {
    id: 7,
    name: 'King Bed',
    price: 899,
    image: bed1,
    description: 'A luxurious king-size bed frame with a padded headboard for comfort.',
    details: [
      'Material: Upholstered fabric',
      'Dimensions: 80 x 76 x 50 inches',
      'Color: Gray',
      'Assembly: Assembly required',
    ],
    reviews: [
      { user: 'Mia', comment: 'Very comfortable and spacious.', rating: 5 },
      { user: 'Noah', comment: 'Best sleep I’ve ever had!', rating: 5 },
    ],
  },
  {
    id: 8,
    name: 'Queen Bed',
    price: 799,
    image: bed2,
    description: 'A sleek queen-size bed with a minimalist design, perfect for modern bedrooms.',
    details: [
      'Material: Metal frame',
      'Dimensions: 80 x 60 x 48 inches',
      'Color: Black',
      'Assembly: Assembly required',
    ],
    reviews: [
      { user: 'Olivia', comment: 'Stylish and sturdy.', rating: 4 },
      { user: 'Paul', comment: 'Easy to assemble.', rating: 5 },
    ],
  },
  {
    id: 9,
    name: 'Desk Lamp',
    price: 59,
    image: lamp1,
    description: 'A simple and elegant desk lamp with adjustable brightness levels.',
    details: [
      'Material: Metal',
      'Dimensions: 18 inches tall',
      'Color: White',
      'Power: Plug-in with adjustable brightness',
    ],
    reviews: [
      { user: 'Quincy', comment: 'Perfect for my desk.', rating: 5 },
      { user: 'Rachel', comment: 'Great light for reading.', rating: 4 },
    ],
  },
  {
    id: 10,
    name: 'Chinese Lamp',
    price: 119,
    image: lamp2,
    description: 'An ornate Chinese lamp that adds a touch of cultural elegance to any room.',
    details: [
      'Material: Ceramic',
      'Dimensions: 20 inches tall',
      'Color: Red and gold',
      'Power: Plug-in',
    ],
    reviews: [
      { user: 'Steve', comment: 'Beautiful design!', rating: 5 },
      { user: 'Tina', comment: 'Adds a unique touch to my decor.', rating: 4 },
    ],
  },
  {
    id: 11,
    name: 'Decoration Mirror',
    price: 119,
    image: decoration1,
    description: 'A stylish decorative mirror that enhances the look of any wall.',
    details: [
      'Material: Glass with metal frame',
      'Dimensions: 24 x 24 inches',
      'Color: Gold',
      'Installation: Wall-mounted',
    ],
    reviews: [
      { user: 'Uma', comment: 'Looks amazing on my wall!', rating: 5 },
      { user: 'Victor', comment: 'Great quality.', rating: 4 },
    ],
  },
  {
    id: 12,
    name: 'Decoration Stand',
    price: 119,
    image: decoration2,
    description: 'A chic decorative stand for displaying plants, books, or collectibles.',
    details: [
      'Material: Metal and wood',
      'Dimensions: 30 x 18 x 18 inches',
      'Color: Black and wood',
      'Assembly: Assembly required',
    ],
    reviews: [
      { user: 'Wendy', comment: 'Perfect for my plants.', rating: 5 },
      { user: 'Xander', comment: 'Easy to assemble and looks great.', rating: 5 },
    ],
  },
];

function ProductDetails() {
    const { id } = useParams();
    const product = products.find((prod) => prod.id === parseInt(id));
    const [activeTab, setActiveTab] = useState('description');
    const [quantity, setQuantity] = useState(1);
  
    if (!product) {
      return <p>Product not found</p>;
    }
  
    const handleQuantityChange = (delta) => {
      setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
    };
  
    const handleAddToCart = () => {
      alert(`Added ${quantity} of ${product.name} to cart.`);
    };
  
    return (
      <div className="product-details-page">
        <div className="breadcrumb">
          <p>Home &gt; Product &gt; Product Details</p>
        </div>
  
        <div className="product-details">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
            <div className="thumbnail-images">
              <img src={product.image} alt={`${product.name} thumbnail`} />
              <img src={product.image} alt={`${product.name} thumbnail`} />
              <img src={product.image} alt={`${product.name} thumbnail`} />
            </div>
          </div>
  
          <div className="product-info">
            <h2>{product.name}</h2>
            <p className="product-price">RM {product.price}</p>
            <p className="product-description">{product.description}</p>
  
            <ul className="product-features">
              {product.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
  
            <div className="quantity">
              <button onClick={() => handleQuantityChange(-1)}>-</button>
              <input type="text" value={quantity} readOnly />
              <button onClick={() => handleQuantityChange(1)}>+</button>
            </div>
  
            <button className="add-to-cart" onClick={handleAddToCart}>Add to cart</button>
            <button className="wishlist">&#x2764;</button>
          </div>
        </div>
  
        <div className="product-extra-info">
          <div className="tabs">
            <button
              className={`tab ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`tab ${activeTab === 'details' ? 'active' : ''}`}
              onClick={() => setActiveTab('details')}
            >
              Details
            </button>
            <button
              className={`tab ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({product.reviews.length})
            </button>
          </div>
  
          <div className="tab-content">
            {activeTab === 'description' && <p>{product.description}</p>}
            {activeTab === 'details' && (
              <ul>
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            )}
            {activeTab === 'reviews' && (
              <div>
                {product.reviews.length === 0 ? (
                  <p>No reviews yet.</p>
                ) : (
                  product.reviews.map((review, index) => (
                    <div key={index} className="review">
                      <p><strong>{review.user}</strong> - {review.rating} / 5</p>
                      <p>{review.comment}</p>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
  
        <div className="related-products">
          <h3>Related Products</h3>
          <div className="related-products-list">
            {[1, 2, 3, 4].map((relatedId) => (
              <div className="related-product-card" key={relatedId}>
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>RM {product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  export default ProductDetails;