import React, { useState } from 'react';
import './ProductDetails.css';
import { product1, product2, product3, product4 } from '../../assets/Index';

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const productImages = [product1, product2, product3, product4];
  
  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <section id="product-details">
      <div className="wrapper">
        <div className="product-gallery">
          <div className="main-image">
            <img src={productImages[selectedImage]} alt="Product" />
          </div>
          <div className="thumbnail-list">
            {productImages.map((image, index) => (
              <div 
                key={index} 
                className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                onClick={() => handleImageClick(index)}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="product-info">
          <div className="product-header">
            <h1>Eco-Friendly Plant Pot</h1>
            <div className="product-rating">
              <div className="stars">
                <span className="filled">★★★★</span>
                <span className="empty">★</span>
              </div>
              <span className="review-count">(121 Reviews)</span>
            </div>
          </div>

          <div className="product-price">
            <span className="current-price">$24.99</span>
            <span className="original-price">$29.99</span>
            <span className="discount">-17%</span>
          </div>

          <div className="product-description">
            <p>Transform your space with our eco-friendly plant pot, crafted from 100% recycled plastic. Each pot features a unique design that combines sustainability with style, making it perfect for both indoor and outdoor use.</p>
          </div>

          <div className="product-features">
            <h3>Key Features:</h3>
            <ul>
              <li>Made from 100% recycled plastic</li>
              <li>UV-resistant and durable</li>
              <li>Built-in drainage system</li>
              <li>Suitable for indoor and outdoor use</li>
              <li>Available in multiple sizes</li>
            </ul>
          </div>

          <div className="product-options">
            <div className="size-selector">
              <h3>Size</h3>
              <div className="size-buttons">
                <button className="active">Small</button>
                <button>Medium</button>
                <button>Large</button>
              </div>
            </div>

            <div className="color-selector">
              <h3>Color</h3>
              <div className="color-buttons">
                <button className="color-btn green active"></button>
                <button className="color-btn brown"></button>
                <button className="color-btn gray"></button>
              </div>
            </div>

            <div className="quantity-selector">
              <h3>Quantity</h3>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(-1)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange(1)}>+</button>
              </div>
            </div>
          </div>

          <div className="product-actions">
            <button className="add-to-cart">Add to Cart</button>
            <button className="buy-now">Buy Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
