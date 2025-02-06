import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import {heroImg, nustImg, wordImg, undpImg,whatappsImg, arrowup,  symbolImg} from "../../assets/Index";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <Navbar />
        <div className="content-container">
          <div className="top-text">
            <div className="cta">
              <h1>One Solution, Triple Impact</h1>
              <div className="three-btn">
                <a href="#" className='people-btn'>👨‍💼 People</a>
                <a href="#" className='planet-btn'>🌍 Planet</a>
                <a href="#" className='Inclusive-btn'> &#x1F49F; Inclusive</a>
              </div>
            </div>
              <p className='hero-para'>Innovative concrete alternative for a carbon-negative future. Crafting premium building products from non-recycled plastics. Building the sustainable framework for tomorrow's cities.</p>
              <div className="two-btn">
                <button className='contact-btn' onClick={() => window.location.href = "#"}>
                <img src={whatappsImg}/>
                <p>Contact</p>
              </button>
              <button className='view-btn' onClick={() => window.location.href = "#"}>
                <p>View Product</p>
                <img src={arrowup}/>
              </button>
            </div>
            
          </div>
          <div className="trusted-by">
              <p className="trusted-head">Trusted by</p>
              <div className="trusted-logos">
                <img src={symbolImg} alt="" />
                <img src={wordImg} alt="" />
                <img src={nustImg} alt="" />
                <img src={undpImg} alt="" />
              </div>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
