import React from 'react'
import './Navbar.css';
import {ecobricksLogo, whatappsImg} from "../../assets/Index";
const Navbar = () => {
  return (
    <nav>
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
                       <a href="#">Product</a>
                      </li>

                      <li>
                       <a href="#">Projects</a>
                      </li>

                      <li>
                        <a href="#">About Us</a>
                      </li>
              </ul>
              <button className='contact-btn' onClick={() => window.location.href = "#"}>
                <img src={whatappsImg}/>
                <p>Contact</p>
              </button>
            </div>
        
    </nav>
  )
}

export default Navbar;