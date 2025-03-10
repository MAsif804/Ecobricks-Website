import React from 'react'
import './Footer.css';
import {tablerIcon, ecobricksLogo,youtubeIcon, linkedinIcon,facebookIcon2, instagramIcon2} from "../../assets/Index";

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
              <p className='logo-text-para'>Office 1407, NSTP Building, NUST University, H-12, Islamabad</p>
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
            <button className='icons' onClick={() => window.open("https://www.facebook.com/ecobricks.pk/", "_blank")}>
                 <img className='img-icon' src={facebookIcon2}/>           
            </button>
            <button className='icons' onClick={() => window.open("https://www.linkedin.com/company/ecobricks1/", "_blank")}>
               <img src={linkedinIcon}/>           
            </button>
            <button className='icons' onClick={() => window.open("https://www.instagram.com/ecobricks.pk/", "_blank")}>
               <img className='img-icon' src={instagramIcon2}/>           
            </button>
            </div>
            <div className="quick-links">
              <h6>Quick Links</h6>
              <div className="quick-links-items">
                <p onClick={() => window.open("https://web.whatsapp.com/", "_blank")}>Contact Us</p>
                <p onClick={() => window.location.href = "#question"}>FAQ</p>
                <p onClick={() => window.location.href = "#product"}>Products</p>
                <p onClick={() => window.location.href = "#project"}>Project</p>
              </div>
            </div>
          </div>
          <div className="copy-right">
            <hr />
            <div className="copy-right-name">
              <p><a href="#">info@theecobricks.com</a></p>
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