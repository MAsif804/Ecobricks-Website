import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Product.css";
import { 
  boxsimg3, starFull, starhalf, 
  boxsimg1, boxsimg2, rightSide, leftSide, plImg4, ecopotLager4, ecopotSmall6, comparison, ecotilelager4,dimenlager,tlImg,ecotilelager2,ecotilelager3,ecotilelager5,ecotilelager6,ecotilelager7,dimenLager1,ecopotSmall8,
  ecopotLager21,
  ecopotLager23
} from "../../assets/Index";

const productList = [
  { 
    id: 1, 
    name: "EcoTiles (S) - 8 x 4 inch", 
    price: "190/sqft", 
    image: ecotilelager4,
    hoverImage: ecotilelager2, 
    subtext: "Colors Available" 
  },
  { 
    id: 2, 
    name: "EcoTiles (L) - 12x6 inch", 
    price: "200/sqft", 
    image: comparison,
    hoverImage: ecotilelager7, 
    subtext: "Colors Available" 
  },
  { 
    id: 3, 
    name: "EcoPots (S)", 
    price: "600", 
    image: ecopotSmall6,
    hoverImage: ecopotSmall8, 
    subtext: "Various Sizes Available", 
    isNew: true 
  },
  { 
    id: 4, 
    name: "EcoPots (L)", 
    price: "1000", 
    image: ecopotLager4,
    hoverImage: ecopotLager21, 
    subtext: "Various Sizes Available" 
  },
];

const Product = () => {
  const sliderRef = React.useRef(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [currentImages, setCurrentImages] = useState({});
  
  useEffect(() => {
    // Update current images when hoveredProduct changes
    if (hoveredProduct) {
      const product = productList.find(p => p.id === hoveredProduct);
      setCurrentImages(prev => ({
        ...prev,
        [hoveredProduct]: product.hoverImage
      }));
    }
  }, [hoveredProduct]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
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
              <div 
                key={product.id} 
                className="product-box"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => {
                  setHoveredProduct(null);
                  setCurrentImages(prev => ({
                    ...prev,
                    [product.id]: product.image
                  }));
                }}
              >
                {product.isNew && <span className="new-label">New</span>}
                <Link to={`/products/${product.id}`}>
                  <img 
                    className={`box-img ${hoveredProduct === product.id ? 'hover' : ''}`}
                    src={currentImages[product.id] || product.image}
                    alt={product.name} 
                  />
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
