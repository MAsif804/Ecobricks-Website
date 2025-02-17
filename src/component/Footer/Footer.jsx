import React from 'react'
import './Footer.css';
import {tablerIcon, ecobricksLogo,youtubeIcon, linkedinIcon} from "../../assets/Index";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="content-container">
          <div className="footer-items">
            <div className="logo-text">
              <div className="logo-ecobricks">
                <img src={ecobricksLogo} alt="" />
                <p>Ecobricks</p>
              </div>
              <p className='logo-text-para'>Emerald Data Solutions, LLC <br />
              6715 Portland Road Sandusky, OH 44870</p>
            </div>
            <div className="join-email">
             <div className="join-text">
              <h6>Join Us</h6>
              <p>Get all the Offers on our products</p>
             </div>
              <div className="emil-btn">
                <input type="email"id='email' placeholder='Email' />
                <button onClick={() => window.location.href = "#"}>
                   <img src={tablerIcon}/>           
                </button>
              </div>
            </div>
            <div className="soical-icon">
            <button className='icons' onClick={() => window.location.href = "#"}>
                 <img src={youtubeIcon}/>           
            </button>
            <button className='icons' onClick={() => window.location.href = "#"}>
               <img src={linkedinIcon}/>           
            </button>
            <button className='icons' onClick={() => window.location.href = "#"}>
               <img src={linkedinIcon}/>           
            </button>
            </div>
            <div className="quick-links">
              <h6>Quick Links</h6>
              <div className="quick-links-items">
                <p onClick={() => window.location.href = "#"}>About </p>
                <p onClick={() => window.location.href = "#"}>Why Us?</p>
                <p onClick={() => window.location.href = "#"}>Products</p>
                <p onClick={() => window.location.href = "#"}>Project</p>
              </div>
            </div>
          </div>
          <div className="copy-right">
            <hr />
            <div className="copy-right-name">
              <p><a href="#">support@eds.com</a></p>
              <p><a href="#">©2024 Ecobricks. All rights reserved</a></p>
            </div>
          </div>
          
         
        </div>
        
      </div>
    </footer>
  )
}

export default Footer
Footer