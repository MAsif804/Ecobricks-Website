// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Product.css';
// import { boxsimg3, starFull, starhalf, boxsimg1, boxsimg2, boxImg4,rightSide, leftSide } from "../../assets/Index";

// const productList = [
//   { id: 1, name: "Wall Cladding - 8x4 inch", price: "200/sqft", image: boxsimg1 },
//   { id: 2, name: "Wall Cladding - 12x6 inch", price: "200/sqft", image: boxsimg2 },
//   { id: 3, name: "EcoPots", price: "900", image: boxsimg3 },
//   { id: 4, name: "EcoPots (New)", price: "900", image: boxsimg3 }, // ✅ Restored missing 4th product
// ];

// const Product = () => {
//   return (
//     <section id='product'>
//       <div className="wrapper">
//         <div className="content-container">
//           <h2>Featured Products</h2>
//           <div className="product-btns">
//             <button>
//               <img src={leftSide} alt="left-btn" />
//             </button>
//             <button>
//               <img src={rightSide} alt="right-btn" />
//             </button>
//           </div>
//         </div>
//         <div className="product-items">
//           {productList.map((product) => (
//             <Link to={`/products/${product.id}`} key={product.id} className="product-box">
//               <img className='box-img' src={product.image} alt={product.name} />
//               <div className="product-box-items">
//                 <div className="product-sub-box-items">
//                   <div className="product-box-main-text">
//                     <div className="product-box-main-text-frist">
//                       <p className="main-text">{product.name}</p>
//                       <p className="sub-text">Multiple Colors Available</p>
//                     </div>
//                     <p className="outer-text">Rs. {product.price}</p>
//                   </div>
//                   <div className="star-group">
//                     <div className="stars">
//                       <img src={starFull} alt="Star-icon" />
//                       <img src={starFull} alt="Star-icon" />
//                       <img src={starFull} alt="Star-icon" />
//                       <img src={starFull} alt="Star-icon" />
//                       <img src={starhalf} alt="Star-icon" />
//                     </div>
//                     <p>(121)</p>
//                   </div>
//                 </div>
//                 <div className="product-sub-box-btns">
//                   <button className='frist-btn'>
//                     <p className="buy-btn">Buy Now</p>
//                   </button>
                  
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Product;

import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Product.css";
import { 
  boxsimg3, starFull, starhalf, 
  boxsimg1, boxsimg2, rightSide, leftSide,plImg4,ecopotLager4,ecopotSmall6,comparison,ecotilelager4,
} from "../../assets/Index";

const productList = [
  { id: 1, name: "EcoTiles (S) - 8 x 4 inch", price: "190/sqft", image: ecotilelager4, subtext: "Colors Available" },
  { id: 2, name: "EcoTiles (L) - 12x6 inch", price: "200/sqft", image: comparison, subtext: "Colors Available" },
  { id: 3, name: "EcoPots (S)", price: "600", image: ecopotSmall6, subtext: "Various Sizes Available", isNew: true },
  { id: 4, name: "EcoPots (L)", price: "1000", image: ecopotLager4, subtext: "Various Sizes Available" },
];

const Product = () => {
  const sliderRef = React.useRef(null);
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
  // Custom navigation handlers
  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section id="product">
      <div className="wrapper">
        <div className="content-container">
          <h2>Featured Products</h2>
          <div className="product-btns">
            <button className="carousel-arrow" onClick={goToPrev}>
              <img src={leftSide} alt="Previous" />
            </button>
            <button className="carousel-arrow" onClick={goToNext}>
              <img src={rightSide} alt="Next" />
            </button>
          </div>
        </div>
        <div className="product-slider-container">
          <Slider ref={sliderRef} {...settings} className="product-slider">
            {productList.map((product) => (
              <div key={product.id} className="product-box" >
                {product.isNew && <span className="new-label">New</span>}
                <Link to={`/products/${product.id}`}>
                  <img className="box-img" src={product.image} alt={product.name} />
                  <div className="product-box-items">
                    <div className="product-sub-box-items">
                      <div className="product-box-main-text">
                        <div className="product-box-main-text-first">
                          <p className="main-text">{product.name}</p>
                          <p className="sub-text">{product.subtext}</p>
                        </div>
                        <p className="outer-text">Rs. {product.price}</p>
                      </div>
                      <div className="star-group">
                        <div className="stars">
                          <img src={starFull} alt="Star" />
                          <img src={starFull} alt="Star" />
                          <img src={starFull} alt="Star" />
                          <img src={starFull} alt="Star" />
                          <img src={starhalf} alt="Half Star" />
                        </div>
                        <p>(121)</p>
                      </div>
                    </div>
                    <div className="product-sub-box-btns">
                      <button className="first-btn">
                        <p className="buy-btn">Buy Now</p>
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Product;

