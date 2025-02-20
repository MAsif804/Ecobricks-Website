import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { boxsimg1, boxsimg2, boxsimg3, emptyStar, starFull } from '../../assets/Index';
import Navbar from "../Navbar_pp/Navbar_pp";

const ProductDetail = () => {
  const { id } = useParams();
  // Example product data (in a real app, fetch from API or state)
  const product = {
    id: 1,
    name: "Wall Cladding - 8x4 inch",
    price: "Rs. 200/sqft",
    rating: 4.8,
    reviews: 67,
    description: [
      "Cost Efficiency: Save on maintenance and installation costs with their easy-to-handle design.",
      "Weatherproof Protection: Built to withstand all weather conditions, ensuring long-lasting performance.",
      "Thermal Insulation: Enhance energy efficiency with superior thermal insulation, keeping interiors comfortable year-round.",
      "Weatherproof: Built to withstand all weather conditions.",
      "Perfect for Wall Cladding: Ideal for residential and commercial applications, adding aesthetic appeal and functionality to any structure.",
    ],
    images: [boxsimg1, boxsimg2, boxsimg3],
  };
  const productList = [
    { id: 1, name: "Wall Cladding - 8x4 inch", price: "200/sqft", image: boxsimg1 },
    { id: 2, name: "Wall Cladding - 12x6 inch", price: "200/sqft", image: boxsimg2 },
    { id: 3, name: "EcoPots", price: "900", image: boxsimg3 },
    { id: 4, name: "EcoPots (New)", price: "900", image: boxsimg3 }, // ✅ Restored missing 4th product
  ];

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const handleThumbnailClick = (img) => {
    setMainImage(img);
  };

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === 'increase' ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  const handleOrder = () => {
    alert(`Order placed for ${quantity} item(s) of ${product.name}`);
  };

  return (
    <>
    <Navbar />
        <div className="product-detail-container">
        <div className="product-main">
            <div className="product-images">
            <img src={mainImage} alt="Product" className="main-image" />
            <div className="thumbnail-container">
                {product.images.map((img, index) => (
                <img key={index} src={img} alt="Thumbnail" className="thumbnail" onClick={() => handleThumbnailClick(img)} />
                ))}
            </div>
            </div>
            <div className="product-info">
            <h1>{product.name}</h1>
            <div className="product-info-sub">
              <p className="price">{product.price}</p>
              <div className="rating">

                  {[...Array(1)].map((_, i) => <img key={i}  src={emptyStar} alt="Star" />)}
                  <span>{product.rating} ({product.reviews} Reviews)</span>
              </div>
            </div>
            <h3>Choose a Color</h3>
            <div className="color-options">
                <span className="color-box color-1"></span>
                <span className="color-box color-2"></span>
                <span className="color-box color-3"></span>
                <span className="color-box color-4"></span>
            </div>
            <h3>Description</h3>
            <ul>
                {product.description.map((desc, index) => (
                <li key={index}>{desc}</li>
                ))}
            </ul>
            <div className="quantity-selector">
                <button onClick={() => handleQuantityChange('decrease')}>-</button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange('increase')}>+</button>
            </div>
            <button className="order-button" onClick={handleOrder}>Place Order</button>
            </div>
        </div>

        <h2>Explore More Products</h2>
        <div className="related-products">
        {[boxsimg2, boxsimg3].map((img, index) => (
          <div className="product-box" key={index}>
            <img src={img} alt="Product" />
            <p>Wall Cladding - 12x6 inch</p>
            <p>Rs. 200/sqft</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductDetail;