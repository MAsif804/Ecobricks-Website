import React from 'react'
import './Navbar_pp.css';
import {ecobricksLogo, whatappsImg} from "../../assets/Index";
const Navbar = () => {



  return (
    <nav id-='navbar_pp'>
            <div className="logo-ecobricks-pp" onClick={() => window.location.href = "/"} >
              <img src={ecobricksLogo} alt="" />
              <p>Ecobricks</p>  
            </div>
            <div className="navbar-items-pp">
              <ul className='navbar-list-pp'>
                      <li>
                       <a href="/">Home</a>
                      </li>

                      <li>
                       <a href="/#product">Product</a>
                       
                      </li>

                      <li>
                       <a href="/">Projects</a>
                      </li>

                      <li>
                        <a href="/">About Us</a>
                      </li>
              </ul>
              <button className='contact-btn' onClick={() => window.open("https://web.whatsapp.com/", "_blank")}>
                <img src={whatappsImg}/>
                <p>Contact</p>
              </button>
            </div>
        
    </nav>
  )
}

export default Navbar;