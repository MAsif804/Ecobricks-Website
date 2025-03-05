import React from 'react'
import './Testimonials.css';
import { leftSide, rightSide,frameIcon } from "../../assets/Index";

const Testimonials = () => {
  return (
    <section id="testimonials" className="white">
      <div className="wrapper">
        <div className="content-container">
          <h2>Testimonials</h2>
          <div className="testimonials-btns">
            <button onClick={() => window.location.href = "#"}>
              <img src={leftSide} alt="left-btn" />
            </button>
            <button onClick={() => window.location.href = "#"}>
              <img src={rightSide} alt="right-btn" />
            </button>
          </div>
        </div>
        <div className="testimonials-items">
          <div className="testimonials-box">
            <div className="tesimonials-sub-box">
              <img src={frameIcon} alt="frame-icon" />
              <div className="paragarph">
                <p>The stress and loneliness </p>
                <p>courses … taught me how</p>
                <p> to comfort myself.</p>
              </div>
            </div>
            <div className="sub-title">
              <p className='blod-text'>Alicia, Canada</p>
              <p className='unblod-text'>on managing the trauma of sexual assault</p>
            </div>
          </div>
          <div className="testimonials-box">
            <div className="tesimonials-sub-box">
              <img src={frameIcon} alt="frame-icon" />
              <div className="paragarph">
                <p>It’s a green product so</p>
                <p>I absolutely love it.</p>
                <p></p>
              </div>
            </div>
            <div className="sub-title">
              <p className='blod-text'>Jane Marriott, CMG OBE</p>
              <p className='unblod-text'>UK High Commissioner </p>
            </div>
          </div>
          <div className="testimonials-box">
            <div className="tesimonials-sub-box">
              <img src={frameIcon} alt="frame-icon" />
              <div className="paragarph">
                <p>Sustainable yet beautiful</p>
                <p>looking product 🌿🪴</p>
                <p>.</p>
              </div>
            </div>
            <div className="sub-title">
              <p className='blod-text'>Deepa Lama, Program Assistant</p>
              <p className='unblod-text'>FAO, Nepal</p>
            </div>
          </div>
          <div className="testimonials-box main-box">
            <div className="tesimonials-sub-box">
              <img src={frameIcon} alt="frame-icon" />
              <div className="paragarph">
                <p>I'm loving this EcoPot made from</p>
                <p>recycled plastic courtesy of</p>
                <p>Kashaf Akhtar and the team at</p>
                <p>EcoBricks. Transforming waste</p>
                <p>into functional art is truly</p>
                <p>inspiring!</p>
              </div>
            </div>
            <div className="sub-title">
              <p className='blod-text'>Haider Jalal, Automation Engineer</p>
              <p className='unblod-text'>CodeHuddle</p>
            </div>
          </div>
          <div className="testimonials-box gap-box">
            <div className="tesimonials-sub-box">
              <img src={frameIcon} alt="frame-icon" />
              <div className="paragarph">
                <p>My worktable just got a</p>
                <p>green upgrade! 🌿✨</p>
                <p>These eco-friendly pots</p>
                <p>from EcoBricks are not just</p>
                <p>stylish but also super</p>
                <p> sustainable. ♻️</p>
              </div>
            </div>
            <div className="sub-title">
              <p className='blod-text'>Ammara, Marketing Manager</p>
              <p className='unblod-text'>Agile NextPak Solutions</p>
            </div>
          </div>
          <div className="testimonials-box small-gap">
            <div className="tesimonials-sub-box">
              <img src={frameIcon} alt="frame-icon" />
              <div className="paragarph">
                <p>A special thanks to Kashaf</p>
                <p>Akhtar for designing these</p>
                <p>wonderful giveaways that</p>
                <p>perfectly align with our</p>
                <p>values and vision.</p>
              </div>
            </div>
            <div className="sub-title">
              <p className='blod-text'>Hina Shahrukh, Managing Partner</p>
              <p className='unblod-text'>Hina Shahrukh & Co. Pvt Ltd.</p>
            </div>
          </div>
          <div className="testimonials-box">
            <div className="tesimonials-sub-box">
              <img src={frameIcon} alt="frame-icon" />
              <div className="paragarph">
                <p>A happy workforce leads </p>
                <p>work environment</p>
                
              </div>
            </div>
            <div className="sub-title">
              <p className='blod-text'>Jaime, Spain</p>
              <p className='unblod-text'>on the benefits of his employees embracing meditation</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Testimonials;