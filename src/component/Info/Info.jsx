import React from 'react'
import './Info.css';
import {letsTalk, emailIcon, phoneIcon, mapIcon, facebookIcon, instagramIcon, linkinIcon } from "../../assets/Index";

const Info = () => {
  return (
    <section id="info" className="white">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-box-text">
            <h2>Let's Talk</h2>
            <p>Like our story? Contact now and create greatness together with us.</p>
          </div>
          <hr />
          <div className="info-contant-box">
            <div className="info-sub-contant">
              <div className="info-contant-img">
                <button className='icons' onClick={() => window.location.href = "#"}>
                  <img src={emailIcon} alt='email-icon'/>           
                </button>
              </div>
              <div className="info-contain-text">
                <p className='mian-text'>Our email</p>
                <p className='sub-text'>admin@inlights.com.pk</p>
              </div>
            </div>
            <div className="info-sub-contant">
              <div className="info-contant-img">
                <button className='icons' onClick={() => window.location.href = "#"}>
                   <img src={phoneIcon} alt='phone-icon'/>           
                </button>
              </div>
              <div className="info-contain-text">
                <p className='mian-text'>Cell Us</p>
                <p className='sub-text'>+92 3235353143</p>
              </div>
            </div>
            <div className="info-sub-contant">
              <div className="info-contant-img">
                <button className='icons' onClick={() => window.location.href = "#"}>
                  <img src={mapIcon} alt='map-icon'/>           
                </button>
              </div>
              <div className="info-contain-text">
                <p className='mian-text'>Find Us</p>
                <p className='sub-text'>Open Google Maps</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="info-social-icon">
            <button className='icons' onClick={() => window.location.href = "#"}>
              <img src={facebookIcon} alt='facebook-icon'/>           
            </button>
            <button className='icons' onClick={() => window.location.href = "#"}>
              <img src={instagramIcon} alt='instagram-icon'/>           
            </button>
            <button className='icons' onClick={() => window.location.href = "#"}>
               <img src={linkinIcon} alt='linkin-icon'/>           
            </button>
          </div>
        </div>
        <img className='lets-talk' src={letsTalk} alt="let-talk" />
      </div>
    </section>
  )
}

export default Info;
