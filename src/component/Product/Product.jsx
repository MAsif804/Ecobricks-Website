import React from 'react'
import './Product.css';
import {boxsimg3, starFull, starhalf, boxsimg1, boxsimg2,rightSide, leftSide} from "../../assets/Index";

const Product = () => {
  return (
    <section id='product'>
      <div className="wrapper">
        <div className="content-container">
          <h2>Products</h2>
          <div className="product-btns">
            <button onClick={() => window.location.href = "#"}>
              <img src={leftSide} alt="left-btn" />
            </button>
            <button onClick={() => window.location.href = "#"}>
              <img src={rightSide} alt="right-btn" />
            </button>
          </div>
        </div>
        <div className="product-items">
          <div className="product-box">
            <img className='box-img' src={boxsimg1} alt="box-img" />
            <div className="product-box-items">
              <div className="product-sub-box-items">
                <div className="product-box-main-text">
                  <div className="product-box-main-text-frist">
                    <p className="main-text">Wall Cladding - 8x4 inch</p>
                    <p className="sub-text">6 Colors Available</p>
                  </div>
                  <p className="outer-text">Rs. 200/sqft</p>
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
                <button className='frist-btn' onClick={()=> window.location.href="#"}>
                  <p className="buy-btn">Buy Now</p>
                </button>
                <button className='second-btn' onClick={()=> window.location.href="#"}>
                  <p className="add-cart">Add Cart</p>
                </button>
              </div>
            </div>
            
          </div>
          <div className="product-box">
            <img className='box-img' src={boxsimg2} alt="box-img" />
            <div className="product-box-items">
              <div className="product-sub-box-items">
                <div className="product-box-main-text">
                  <div className="product-box-main-text-frist">
                    <p className="main-text">Wall Cladding - 12x6 inch</p>
                    <p className="sub-text">6 Colors Available</p>
                  </div>
                  <p className="outer-text">Rs. 200/sqft</p>
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
                <button className='frist-btn' onClick={()=> window.location.href="#"}>
                  <p className="buy-btn">Buy Now</p>
                </button>
                <button className='second-btn' onClick={()=> window.location.href="#"}>
                  <p className="add-cart">Add Cart</p>
                </button>
              </div>
            </div>
            
          </div>
          <div className="product-box">
            <img className='box-img' src={boxsimg3} alt="" />
            <div className="product-box-items">
              <div className="product-sub-box-items">
                <div className="product-box-main-text">
                  <div className="product-box-main-text-frist">
                    <p className="main-text">EcoPots</p>
                    <p className="sub-text">5 types of Pots available</p>
                  </div>
                  <p className="outer-text">Rs. 900</p>
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
                <button className='frist-btn' onClick={()=> window.location.href="#"}>
                  <p className="buy-btn">Buy Now</p>
                </button>
                <button className='second-btn' onClick={()=> window.location.href="#"}>
                  <p className="add-cart">Add Cart</p>
                </button>
              </div>
            </div>
            <button className='new-btn' onClick={() => window.location.href = "#"}>
              <p className="new-btn-text">New</p>
            </button>
            
          </div>
          <div className="product-box">
            <img className='box-img' src={boxsimg3} alt="Ecopolts" />
            <div className="product-box-items">
              <div className="product-sub-box-items">
                <div className="product-box-main-text">
                  <div className="product-box-main-text-frist">
                    <p className="main-text">Ecopots</p>
                    <p className="sub-text">5 types of Pots available</p>
                  </div>
                  <p className="outer-text"> Rs. 900</p>
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
                <button className='frist-btn' onClick={()=> window.location.href="#"}>
                  <p className="buy-btn">Buy Now</p>
                </button>
                <button className='second-btn' onClick={()=> window.location.href="#"}>
                  <p className="add-cart">Add Cart</p>
                </button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product;
