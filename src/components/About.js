import React from 'react';
import './About.css';
import bannerImage from '../assets/images/sofa_banner.jpg';
import blogImage1 from '../assets/images/sofa.jpg';

function About() {
  return (
    <div className="about-page">
      {/* Banner Section */}
      <section className="banner">
        <img src={bannerImage} alt="Banner" />
        <h2>About us</h2>
      </section>

      {/* Info Section */}
      <section className="info-icons">
        <div className="info-item">
          <i className="fas fa-shopping-cart"></i>
          <h4>Shop online</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="info-item">
          <i className="fas fa-shipping-fast"></i>
          <h4>Free shipping</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="info-item">
          <i className="fas fa-undo"></i>
          <h4>Return policy</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="info-item">
          <i className="fas fa-credit-card"></i>
          <h4>Payment</h4>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </section>

      {/* Image and Text Section */}
      <section className="image-text">
        <img src={bannerImage} alt="Decorative Lights" />
        <div className="content">
          <h3>Functionality meets perfection</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </section>

      {/* Progress Bar Section */}
      <section className="progress-bars">
        <div className="progress-item">
          <p>Creativity</p>
          <div className="progress-bar"><div className="progress" style={{ width: '72%' }}></div></div>
          <span>72%</span>
        </div>
        <div className="progress-item">
          <p>Advertising</p>
          <div className="progress-bar"><div className="progress" style={{ width: '84%' }}></div></div>
          <span>84%</span>
        </div>
        <div className="progress-item">
          <p>Design</p>
          <div className="progress-bar"><div className="progress" style={{ width: '72%' }}></div></div>
          <span>72%</span>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <h3>Last blog post</h3>
        <div className="blog-cards">
          <div className="blog-card">
            <img src={blogImage1} alt="Blog Post 1" />
            <p>Sep 20, 2022</p>
            <p>Perfect colors for a natural decor style</p>
            <a href="#read-more">Read more</a>
          </div>
          <div className="blog-card">
            <img src={blogImage1} alt="Blog Post 2" />
            <p>Sep 20, 2022</p>
            <p>Perfect colors for a natural decor style</p>
            <a href="#read-more">Read more</a>
          </div>
          <div className="blog-card">
            <img src={blogImage1} alt="Blog Post 3" />
            <p>Sep 20, 2022</p>
            <p>Perfect colors for a natural decor style</p>
            <a href="#read-more">Read more</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
