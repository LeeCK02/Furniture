import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Shop.css';
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

function Shop() {
  const products = [
    { id: 1, name: 'Modern Sofa', category: 'Sofa', brand: 'Saatva', price: 299, image: sofa1 },
    { id: 2, name: 'Classic Sofa', category: 'Sofa', brand: 'Floyd Home', price: 349, image: sofa2 },
    { id: 3, name: 'Dining Table', category: 'Table', brand: 'Castlery', price: 499, image: table1 },
    { id: 4, name: 'Coffee Table', category: 'Table', brand: 'Novogratz', price: 199, image: table2 },
    { id: 5, name: 'Lounge Chair', category: 'Chair', brand: 'Burrow', price: 259, image: chair1 },
    { id: 6, name: 'Rocking Chair', category: 'Chair', brand: 'Artifox', price: 289, image: chair2 },
    { id: 7, name: 'King Bed', category: 'Bed', brand: 'Saatva', price: 899, image: bed1 },
    { id: 8, name: 'Queen Bed', category: 'Bed', brand: 'Floyd Home', price: 799, image: bed2 },
    { id: 9, name: 'Desk Lamp', category: 'Lamp', brand: 'Castlery', price: 59, image: lamp1 },
    { id: 10, name: 'Chinese Lamp', category: 'Lamp', brand: 'Novogratz', price: 119, image: lamp2 },
    { id: 11, name: 'Decoration Mirror', category: 'Decoration', brand: 'Burrow', price: 119, image: decoration1 },
    { id: 12, name: 'Decoration Stand', category: 'Decoration', brand: 'Artifox', price: 119, image: decoration2 },
  ];

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialBrand = queryParams.get('brand') || '';
  const initialCategory = queryParams.get('category') || '';

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortOrder, setSortOrder] = useState('popularity');
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  
  useEffect(() => {
    // Update category and brand filter when URL parameter changes
    setSelectedCategory(initialCategory);
    setSelectedBrand(initialBrand);
  }, [initialCategory, initialBrand]);

  // Filter products based on selected filters and search query
  const getFilteredProducts = () => {
    return products
      .filter((product) => {
        // Category filter
        if (selectedCategory && product.category !== selectedCategory) {
          return false;
        }
        // Brand filter
        if (selectedBrand && product.brand !== selectedBrand) {
          return false;
        }
        // Price filter
        if (product.price > maxPrice) {
          return false;
        }
        // Search query filter
        if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        // Sorting options
        if (sortOrder === 'price-low-high') return a.price - b.price;
        if (sortOrder === 'price-high-low') return b.price - a.price;
        return 0;
      });
  };

  // Render filtered products
  const filteredProducts = getFilteredProducts();

  // Generate filter summary text
  const filterSummary = `
    Category: ${selectedCategory || 'All'},
    Brand: ${selectedBrand || 'All'},
    Max Price: RM ${maxPrice},
    Search: ${searchQuery || 'None'}
  `;

  return (
    <div className="shop-page">
      <div className="shop-banner">
        <h1>SHOP</h1>
        <p>Welcome to Furniture!</p>
      </div>

      <div className="shop-content">
        {/* Sidebar */}
        <aside className="shop-sidebar">
          <div className="shop-category">
            <h3>Categories</h3>
            <ul>
              <li onClick={() => setSelectedCategory('')}>All</li>
              <li onClick={() => setSelectedCategory('Sofa')}>Sofa</li>
              <li onClick={() => setSelectedCategory('Table')}>Table</li>
              <li onClick={() => setSelectedCategory('Chair')}>Chair</li>
              <li onClick={() => setSelectedCategory('Bed')}>Bed</li>
              <li onClick={() => setSelectedCategory('Lamp')}>Lamp</li>
              <li onClick={() => setSelectedCategory('Decoration')}>Decoration</li>
            </ul>
          </div>

          <div className="shop-brand">
            <h3>Brand</h3>
            <ul>
              <li onClick={() => setSelectedBrand('')}>All</li>
              <li onClick={() => setSelectedBrand('Saatva')}>Saatva</li>
              <li onClick={() => setSelectedBrand('Floyd Home')}>Floyd Home</li>
              <li onClick={() => setSelectedBrand('Castlery')}>Castlery</li>
              <li onClick={() => setSelectedBrand('Novogratz')}>Novogratz</li>
              <li onClick={() => setSelectedBrand('Burrow')}>Burrow</li>
              <li onClick={() => setSelectedBrand('Artifox')}>Artifox</li>
            </ul>
          </div>

          <div className="price-filter">
            <h3>Price</h3>
            <input
              type="range"
              min="0"
              max="1000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
            <div className="price-values">
              <span>RM 0</span>
              <span>RM {maxPrice}</span>
            </div>
          </div>

          <div className="search-filter">
            <h3>Search</h3>
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </aside>

        {/* Product Grid */}
        <section className="product-grid">
          {/* Filter Summary */}
          <div className="filter-summary">
            <p>Current Filters: {filterSummary}</p>
          </div>

          <div className="product-sort">
            <span>Showing {filteredProducts.length} of {products.length} results</span>
            <select onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
              <option value="popularity">Sort by popularity</option>
              <option value="price-low-high">Sort by price: low to high</option>
              <option value="price-high-low">Sort by price: high to low</option>
            </select>
          </div>

          <div className="products">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div className="product-card" key={product.id}>
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} />
                    <p>{product.name}</p>
                    <p className="price">RM {product.price}</p>
                  </Link>
                  <button className="add-to-cart-button">Add to Cart</button>
                </div>
              ))
            ) : (
              <p>No products match the selected filters.</p>
            )}
          </div>


          <div className="pagination">
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Shop;
