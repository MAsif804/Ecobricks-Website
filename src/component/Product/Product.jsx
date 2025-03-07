import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { boxsimg3, starFull, starhalf, boxsimg1, boxsimg2, boxImg4,rightSide, leftSide } from "../../assets/Index";

const productList = [
  { id: 1, name: "Wall Cladding - 8x4 inch", price: "200/sqft", image: boxsimg1 },
  { id: 2, name: "Wall Cladding - 12x6 inch", price: "200/sqft", image: boxsimg2 },
  { id: 3, name: "EcoPots", price: "900", image: boxsimg3 },
  { id: 4, name: "EcoPots (New)", price: "900", image: boxsimg3 }, // ✅ Restored missing 4th product
];

const Product = () => {
  return (
    <section id='product'>
      <div className="wrapper">
        <div className="content-container">
          <h2>Featured Products</h2>
          <div className="product-btns">
            <button>
              <img src={leftSide} alt="left-btn" />
            </button>
            <button>
              <img src={rightSide} alt="right-btn" />
            </button>
          </div>
        </div>
        <div className="product-items">
          {productList.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} className="product-box">
              <img className='box-img' src={product.image} alt={product.name} />
              <div className="product-box-items">
                <div className="product-sub-box-items">
                  <div className="product-box-main-text">
                    <div className="product-box-main-text-frist">
                      <p className="main-text">{product.name}</p>
                      <p className="sub-text">Multiple Colors Available</p>
                    </div>
                    <p className="outer-text">Rs. {product.price}</p>
                  </div>
                  <div className="star-group">
                    <div className="stars">
                      <img src={starFull} alt="Star-icon" />
                      <img src={starFull} alt="Star-icon" />
                      <img src={starFull} alt="Star-icon" />
                      <img src={starFull} alt="Star-icon" />
                      <img src={starhalf} alt="Star-icon" />
                    </div>
                    <p>(121)</p>
                  </div>
                </div>
                <div className="product-sub-box-btns">
                  <button className='frist-btn'>
                    <p className="buy-btn">Buy Now</p>
                  </button>
                  
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
