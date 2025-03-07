import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { boxsimg1, boxsimg2, boxsimg3,boxImg4 ,emptyStar, starFull, starhalf,whatappsImg , rightSide, leftSide} from '../../assets/Index';
import Navbar from "../Navbar_pp/Navbar_pp";

const ProductDetail = () => {
  const { id } = useParams();
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const [mainImage, setMainImage] = useState(product.images[id-1]);

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
              <div className="product-box-1">
                <h1>{product.name}</h1>
                <div className="product-info-sub">
                  <p className="price">{product.price}</p>
                  <div className="rating">
                    {[...Array(1)].map((_, i) => <img key={i}  src={emptyStar} alt="Star" />)}
                    <span>{product.rating} ({product.reviews} Reviews)</span>
                  </div>
              </div>
              </div>
              <div className="product-box-2">
                <h3 className='select-text'>Choose a Color</h3>
                <div className="color-options">
                    <svg className='color-box' xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" fill="none">
                      <rect x="7.42236" y="7" width="50" height="50" rx="25" fill="#8D5E1E"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M43.6759 22.2527C44.2267 22.6689 44.3359 23.4528 43.9197 24.0036L31.1697 40.8786C30.9599 41.1563 30.6439 41.3339 30.2976 41.3688C29.9514 41.4037 29.6063 41.2926 29.3454 41.0624L20.8454 33.5624C20.3277 33.1056 20.2783 32.3157 20.7351 31.798C21.1918 31.2804 21.9818 31.231 22.4994 31.6878L29.9881 38.2954L41.925 22.4965C42.3412 21.9457 43.1251 21.8366 43.6759 22.2527Z" fill="white"/>
                      <rect x="1.92236" y="1.5" width="61" height="61" rx="30.5" stroke="#8D5E1E" stroke-width="3"/>
                    </svg>
                    <svg className='color-box' xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" fill="none">
                      <rect x="7.42236" y="7" width="50" height="50" rx="25" fill="#A8CC41"/>
                    </svg>
                    <svg className='color-box' xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" fill="none">
                      <rect x="7.42236" y="7" width="50" height="50" rx="25" fill="#838EEF"/>
                    </svg>
                    <svg className='color-box' xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" fill="none">
                      <rect x="7.42236" y="7" width="50" height="50" rx="25" fill="#DF4BC7"/>
                    </svg>
                    <svg className='color-box' xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" fill="none">
                      <rect x="7.42236" y="7" width="50" height="50" rx="25" fill="#4BC862"/>
                    </svg>
                    <svg className='color-box' xmlns="http://www.w3.org/2000/svg" width="65" height="64" viewBox="0 0 65 64" fill="none">
                      <rect x="7.42236" y="7" width="50" height="50" rx="25" fill="#442BD6"/>
                    </svg>
                </div>
              </div>
              <div className="product-box-3">
                <h3>Description</h3>
                <div className="description-text">
                  <p className='recycled-text'>Made from recycled plastic and minerals.</p>
                  <p className='recycled-text'>Transform your walls with our Eco-friendly, lightweight wall tiles, designed for durability and style. These tiles offer:</p>
                  <ul>
                    {product.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                    ))}
                  </ul>
                  <p>Make the sustainable choice without compromising on quality or design.</p>
                </div>
              </div>
              <div className="product-box-4">
                <div className="quantity-selector">
                    <button  onClick={() => handleQuantityChange('decrease')}>-</button>
                    <span className='quantity'>{quantity}</span>
                    <button onClick={() => handleQuantityChange('increase')}>+</button>
                </div>
                <div className="place-order-btn">
                  <button className="order-button" onClick={handleOrder}>
                    <img src={whatappsImg} alt="cart-icon" />
                    <p className='place-order'>Place Order</p>
                  </button>
                </div>
              </div>
            </div>
        </div>
        <div className="wrapper">
            
          <div className="content-container">
              <h2>Explore More Products</h2>
              <div className="product-btns">
                <button>
                  <img src={leftSide} alt="left-btn" />
                </button>
                <button>
                  <img src={rightSide} alt="right-btn" />
                </button>
              </div>
          </div>
          <div className="related-products">
            {[boxsimg1, boxsimg3, boxImg4].map((img, index) => (
            <div className="product-box" key={index}>
              <img src={img} alt="Product" />
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
                    <button className='second-btn'>
                      <p className="add-cart">Add Cart</p>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
    </>
  );
};

export default ProductDetail;