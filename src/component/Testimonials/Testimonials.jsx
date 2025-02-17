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
                <p>Headspace gives me a</p>
                <p>slice of the day that’s just</p>
                <p>for me.</p>
              </div>
            </div>
            <div className="sub-title">
              <p className='blod-text'>Nadien, New Mexico</p>
              <p className='unblod-text'>on prioritizing self-care</p>
            </div>
          </div>
          <div className="testimonials-box">
            <div className="tesimonials-sub-box">
              <img src={frameIcon} alt="frame-icon" />
              <div className="paragarph">
                <p>Your app brings so much</p>
                <p>peace and tolerance to</p>
                <p>our home.</p>
              </div>
            </div>
            <div className="sub-title">
              <p className='blod-text'>Rachael, UK</p>
              <p className='unblod-text'>on meditation’s positive effect on family life</p>
            </div>
          </div>
          <div className="testimonials-box main-box">
            <div className="tesimonials-sub-box">
              <img src={frameIcon} alt="frame-icon" />
              <div className="paragarph">
                <p>I came to learn that the</p>
                <p>storyline in my head …</p>
                <p>was holding me back.</p>
              </div>
            </div>
            <div className="sub-title">
              <p className='blod-text'>Peter, Belgium</p>
              <p className='unblod-text'>on what he learned when sitting with himself</p>
            </div>
          </div>
          <div className="testimonials-box gap-box">
            <div className="tesimonials-sub-box">
              <img src={frameIcon} alt="frame-icon" />
              <div className="paragarph">
                <p>Headspace provides me</p>
                <p>with … a connection to</p>
                <p>myself, and a </p>
                <p>disconnection from</p>
                <p>negative thoughts,</p>
                <p>feelings, and sensations.</p>
              </div>
            </div>
            <div className="sub-title">
              <p className='blod-text'>Keri, UK</p>
              <p className='unblod-text'>on finding her happy place</p>
            </div>
          </div>
          <div className="testimonials-box">
            <div className="tesimonials-sub-box">
              <img src={frameIcon} alt="frame-icon" />
              <div className="paragarph">
                <p>Changing my thoughts</p>
                <p>has allowed me to</p>
                <p>change my life.</p>
              </div>
            </div>
            <div className="sub-title">
              <p className='blod-text'>Davide, London</p>
              <p className='unblod-text'>on using meditation to turn his life around</p>
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