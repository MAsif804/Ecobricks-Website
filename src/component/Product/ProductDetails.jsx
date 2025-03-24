import React, { useEffect, useState } from "react";
import { useParams, Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductDetails.css';
import { 
  boxsimg1, boxsimg2, boxsimg3, boxImg4, whatappsImg,
  rightSide, leftSide, leftSide1,rightSide1,plImg4,xlImg1,xlImg3,xlImg5,tlImg,dimenSmall1,dimenSmall2,ecopotSmall1,ecopotSmall2,ecopotSmall3,ecopotSmall5,ecopotSmall6,ecopotSmall7,ecopotSmall8,ecopotSmall9,
  ecopotSmall10,ecopotSmall11,ecopotSmall12,ecopotSmall13,ecopotSmall14,ecopotSmall15,ecopotSmall16,ecopotSmall18,ecopotSmall19,ecopotSmall29,ecopotSmall30,dimenLager1,ecopotLager4,ecopotLager17,ecopotLager20,ecopotLager21,ecopotLager22,ecopotLager23,ecopotLager24,ecopotLager25,ecopotLager26,ecopotLager27,ecopotLager28,comparison,dimenlager,ecotilelager2,ecotilelager3,ecotilelager4,ecotilelager5,ecotilelager6,ecotilelager7,
} from '../../assets/Index';
import Navbar_pp from "../Navbar_pp/Navbar_pp";

const ProductDetails = () => {
  const { id } = useParams();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Product database with expanded information
  const allProducts = [
    {
      id: 1,
      name: "EcoTiles (S) - 8 x 4 inch",
      price: "190/sqft",
      rating: 4.8,
      reviews: 67,
      subtitle: "Sustainable, Stylish, and Built to Last",
      description: [
        "Cost Efficiency: Low maintenance & easy installation ",
        "Weatherproof Protection:  Resists harsh conditions for long-lasting performance",
        "Thermal Insulation: Enhances energy efficiency year-round",
      ],
      images: [ecotilelager4,comparison,dimenlager,tlImg,ecotilelager2,ecotilelager3,ecotilelager5,ecotilelager6,ecotilelager7,],  
      hoverImage: ecotilelager2
    },
    {
      id: 2,
      name: "EcoTiles (L) - 12 X 6 Inch",
      price: "200/sqft",
      rating: 4.7,
      reviews: 121,
      subtitle: "Large Format, Maximum Impact",
      description: [
        "Cost Efficiency: Low maintenance & easy installation ",
        "Weatherproof Protection:  Resists harsh conditions for long-lasting performance",
        "Thermal Insulation: Enhances energy efficiency year-round",
      ],
      images: [dimenlager,comparison,tlImg,ecotilelager2,ecotilelager3,,ecotilelager5,ecotilelager6,ecotilelager7,],
      hoverImage: ecotilelager7
    },
    {
      id: 3,
      name: "EcoPots (S)",
      price: "700",
      rating: 4.9,
      reviews: 121,
      subtitle: "Sustainable Gardening Made Stylish",
      description: [
        "Eco-friendly: Made from 100% recycled plastic waste.",
        "Durable Design: Resistant to cracks, fading, and weather damage.",
        "Lightweight: Easy to move and reposition as needed.",
       
      ],
      images: [ecopotSmall6,dimenSmall1,dimenSmall2,ecopotSmall1,ecopotSmall2,ecopotSmall3,ecopotSmall5,ecopotSmall7,ecopotSmall8,ecopotSmall9,ecopotSmall10,ecopotSmall11,ecopotSmall12,ecopotSmall13,ecopotSmall14,ecopotSmall15,ecopotSmall16,ecopotSmall18,ecopotSmall19,ecopotSmall29,ecopotSmall30 ],
      hoverImage: ecopotSmall8
    },
    {
      id: 4,
      name: "EcoPots (L)",
      price: "1000",
      rating: 4.6,
      reviews: 121,
      subtitle: "Small Pots, Big Impact",
      description: [
        "Eco-friendly: Made from 100% recycled plastic waste.",
        "Durable Design: Resistant to cracks, fading, and weather damage.",
        "Lightweight: Easy to move and reposition as needed.",
        
      ],
      images: [boxsimg3,dimenLager1,ecopotLager4,ecopotLager17,ecopotLager20,ecopotLager21,ecopotLager22,ecopotLager23,ecopotLager24,ecopotLager25,ecopotLager26,ecopotLager27,ecopotLager28, xlImg1,xlImg3,xlImg5],
      hoverImage: ecopotLager23
    }
 ];

  // Find the correct product based on id parameter
  const currentId = parseInt(id);
  const product = allProducts.find(p => p.id === currentId) || allProducts[0];
  
  // Get related products (excluding current product)
  const relatedProducts = allProducts.filter(p => p.id !== currentId).slice(0, 3);
  
  // Ensure proper link handling for related products
  const handleProductClick = (productId, e) => {
    // Update URL without full page refresh
    window.history.pushState({}, '', `/products/${productId}`);
    // Force component to re-render with new product
    window.location.reload();
  };

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [hoveredColor, setHoveredColor] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleThumbnailClick = (img) => {
    setMainImage(img);
  };

  const handleQuantityChange = (type) => {
    setQuantity((prev) => (type === 'increase' ? prev + 1 : prev > 1 ? prev - 1 : 1));
  };

  const handleOrder = () => {
    alert(`Order placed for ${quantity} item(s) of ${product.name}`);
    const message = `Hello, I'd like to place an order for:
    - Product: ${product.name}
    - Image: ${mainImage}
    - Price: Rs. ${product.price}
    - Quantity: ${quantity}
    - Color: ${colorOptions[selectedColor].name}
    
    Please provide more information about availability and delivery options.`;
        
        // Encode the message for WhatsApp URL
        const encodedMessage = encodeURIComponent(message);
        
        // You can replace this with your actual business phone number
        const phoneNumber = "+923390046214"; // Format: country code + number (no + or spaces)
        
        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');

  };
  
  const handleColorSelect = (index) => {
    setSelectedColor(index);
  };

  // Color options with names - order aligned with design
  const colorOptions = [
    { color: "#8D5E1E", name: "Brown" },
    { color: "#000000", name: "Black" },
    { color: "#C12126", name: "Red" },
    { color: "#667085", name: "Gray" },
    { color: "#F2D5B2", name: "Beige" },
    { color: "#0D9488", name: "Teal" }
  ];

  // Slick settings for image carousel
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button className="custom-slick-prev"><img src={leftSide1} alt="Previous" /></button>,
    nextArrow: <button className="custom-slick-next"><img src={rightSide1} alt="Next" /></button>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };
const sliderRef = React.useRef(null);
  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <Navbar_pp />
      <div className="product-detail-container">
        <div className="product-main">
          {/* Product Images */}
          <div className="product-images">
            <img src={mainImage} alt="Product" className="main-image" />
            <div className="image-slider-container">
              <Slider {...sliderSettings}>
                {product.images.map((img, index) => (
                  <div key={index} className="slider-item">
                    <img 
                      src={img} 
                      alt={`${product.name} view ${index + 1}`} 
                      className="thumbnail" 
                      onClick={() => handleThumbnailClick(img)} 
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="color-selector-container">
              <h3 className="select-text">Choose a Color</h3>
              <div className="color-options">
                {colorOptions.map((option, index) => (
                  <div 
                    key={index}
                    className="color-option-wrapper"
                    onMouseEnter={() => setHoveredColor(index)}
                    onMouseLeave={() => setHoveredColor(null)}
                  >
                    <div 
                      className={`color-circle ${selectedColor === index ? 'selected' : ''} ${hoveredColor === index ? 'hovered' : ''}`}
                      style={{ backgroundColor: option.color }}
                      onClick={() => handleColorSelect(index)}
                    >
                      {selectedColor === index && <span className="checkmark">✓</span>}
                    </div>
                    <span className={`color-name ${hoveredColor === index ? 'visible' : ''}`}>
                      {option.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Product Information */}
          <div className="product-info">
            <div className="product-box-1">
              <h1>{product.name}</h1>
              <div className="product-info-sub">
                <p className="price">Rs. {product.price}</p>
                <div className="rating">
                  <span className="rating-stars">★ {product.rating}</span>
                  <span className="reviews-count">💬 {product.reviews} Reviews</span>
                </div>
              </div>
              <p className="product-subtitle">{product.subtitle}</p>
            </div>

            {/* Description Section */}
            <div className="product-box-3">
              <h3>Description:</h3>
              <div className="description-text">
                <p className="recycled-text">- Made from recycled plastic and minerals, EcoTiles are <span className="highlight">lightweight, durable, and weatherproof</span>, perfect for wall cladding in homes and commercial spaces.</p>
                <h4>Features:</h4>
                <ul className="features-list">
                  {product.description.map((desc, index) => (
                    <li key={index} className="feature-item">
                      <span className="checkmark">✅</span> {desc}
                    </li>
                  ))}
                </ul>
                <p className="upgrade-text">Upgrade your walls with eco-friendly tiles that combine style, durability, and sustainability.</p>
                <p className="call-to-action">Make the smart choice today!</p>
              </div>
            </div>

            {/* Color Selection Below */}
           

            {/* Quantity and Order Button */}
            <div className="product-box-4">
              <div className="quantity-selector">
                <button 
                  className="quantity-btn minus" 
                  onClick={() => handleQuantityChange('decrease')}
                >-</button>
                <span className="quantity">{quantity}</span>
                <button 
                  className="quantity-btn plus"
                  onClick={() => handleQuantityChange('increase')}
                >+</button>
              </div>
              <button className="order-button" onClick={handleOrder}>
                <img src={whatappsImg} alt="WhatsApp icon" />
                <span className="place-order">Place Order</span>
              </button>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="related-products-section">
          <div className="section-header">
            <h2>Explore More Products</h2>
            <div className="product-btns">
              <button onClick={goToPrev}>
                <img src={leftSide} alt="Previous" />
              </button>
              <button onClick={goToNext}>
                <img src={rightSide} alt="Next" />
              </button>
            </div>
          </div>
          <div className="related-products">
            {relatedProducts.map((relatedProduct) => (
              <div 
                className="product-card" 
                key={relatedProduct.id}
                onMouseEnter={() => setHoveredProduct(relatedProduct.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <Link 
                  to={`/products/${relatedProduct.id}`} 
                  onClick={(e) => handleProductClick(relatedProduct.id, e)}
                >
                  <div className="product-image-container">
                    <img 
                      src={hoveredProduct === relatedProduct.id ? relatedProduct.hoverImage : relatedProduct.images[0]} 
                      alt={relatedProduct.name}
                      className={hoveredProduct === relatedProduct.id ? 'hover' : ''}
                    />
                    {relatedProduct.id > 2 && <span className="new-badge">New</span>}
                  </div>
                  <div className="product-details">
                    <div className="product-title-price">
                      <h3>{relatedProduct.name}</h3>
                      <p className="product-price">Rs. {relatedProduct.price}</p>
                    </div>
                    <p className="colors-available">{relatedProduct.id <= 2 ? "5 Colors Available" : "5 types of Pots available"}</p>
                    <div className="product-rating">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="star">
                            {i < Math.floor(relatedProduct.rating) ? "★" : 
                            i === Math.floor(relatedProduct.rating) && relatedProduct.rating % 1 >= 0.5 ? "★" : "☆"}
                          </span>
                        ))}
                      </div>
                      <span className="review-count">({relatedProduct.reviews})</span>
                    </div>
                    <div className="product-actions">
                      <button className="buy-button">Buy Now</button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;