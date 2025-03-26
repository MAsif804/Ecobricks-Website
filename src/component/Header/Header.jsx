import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';
import {heroImg, nustImg, wordImg, undpImg,whatappsImg, arrowup,  symbolImg} from "../../assets/Index";

const Header = () => {
  return (
    <header id='home'>
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
              <p className='hero-para'>Accelerating the world's shift to zero waste through innovative materials, sustainable technology, and eco-conscious design.</p>
              <div className="two-btn">
                <button className='contact-btn' onClick={() => window.open(" https://wa.me/923390046214 ")}>
                <img src={whatappsImg}/>
                <p>Contact</p>
              </button>
              <button className='view-btn' onClick={() => window.location.href = "#product"}>
                <p>View Product</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                  <g clip-path="url(#clip0_3_27983)">
                    <path d="M9.90973 16.9699C10.066 17.1262 10.2779 17.2139 10.4989 17.2139C10.7199 17.2139 10.9318 17.1262 11.0881 16.9699L15.8022 12.2558C15.8818 12.1789 15.9453 12.0869 15.989 11.9853C16.0327 11.8836 16.0556 11.7743 16.0566 11.6636C16.0576 11.553 16.0365 11.4432 15.9946 11.3408C15.9527 11.2384 15.8908 11.1454 15.8126 11.0671C15.7343 10.9889 15.6413 10.927 15.5389 10.8851C15.4364 10.8432 15.3267 10.8221 15.2161 10.8231C15.1054 10.824 14.9961 10.847 14.8944 10.8907C14.7927 10.9344 14.7008 10.9978 14.6239 11.0774L11.3322 14.3691L11.3322 3.33327C11.3322 3.11226 11.2444 2.9003 11.0882 2.74402C10.9319 2.58774 10.7199 2.49994 10.4989 2.49994C10.2779 2.49994 10.0659 2.58774 9.90964 2.74402C9.75336 2.9003 9.66557 3.11226 9.66557 3.33327L9.66557 14.3691L6.3739 11.0774C6.21673 10.9256 6.00623 10.8416 5.78773 10.8435C5.56924 10.8454 5.36022 10.9331 5.20572 11.0876C5.05121 11.2421 4.96357 11.4511 4.96167 11.6696C4.95977 11.8881 5.04377 12.0986 5.19557 12.2558L9.90973 16.9699Z" fill="#108125"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_3_27983">
                      <rect width="20" height="20" fill="white" transform="matrix(-1 0 0 -1 20.5 20)"/>
                    </clipPath>
                  </defs>
                </svg>
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
