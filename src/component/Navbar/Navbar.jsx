import React, { useState } from 'react'
import './Navbar.css';
import {ecobricksLogo, whatappsImg, menuIcon,closeIcon} from "../../assets/Index";
const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <nav id-='navbar'>
              <div className="logo-ecobricks" onClick={() => window.location.href = "#"} >
                <img src={ecobricksLogo} alt="" />
                <p>Ecobricks</p>  
              </div>
              <div className="navbar-items">
                <ul className='navbar-list'>
                        <li>
                        <a href="#">Home</a>
                        </li>

                        <li>
                        <a href="#product">Product</a>
                        </li>

                        <li>
                        <a href="#project">Projects</a>
                        </li>

                        <li>
                          <a href="#info">About Us</a>
                        </li>
                </ul>
                <button className='contact-btn' onClick={() => window.open("https://web.whatsapp.com/", "_blank")}>
                  <img src={whatappsImg}/>
                  <p>Contact</p>
                </button>
                
              </div>
              <div onClick={() => setIsActive(true)} className="menu-icon">
                  <img onClick={() => setIsActive(false)} src={menuIcon} alt="menu-icon" />
               </div>
          
      </nav>

      <div className={`mobile-menu-container ${isActive ? "active" : ""}`}>
            <ul className='menu-items'>
            <div onClick={() => setIsActive(false)}  className="close-icon">
                <img src={closeIcon} alt="" />
            </div>
                        <li>
                            <a href="#" onClick={() => setIsActive(false)}>Home</a>
                        </li>

                        <li>
                            <a href="#product" onClick={() => setIsActive(false)}>Product</a>
                        </li>

                        <li>
                            <a href="#project" onClick={() => setIsActive(false)}>Project</a>
                        </li>

                        <li>
                            <a href="#info" onClick={() => setIsActive(false)}>About Us</a>
                        </li>

                </ul>
        </div>

    </>
  )
}

export default Navbar;