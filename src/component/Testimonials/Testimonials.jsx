// import React from 'react'
// import './Testimonials.css';
// import { leftSide, rightSide,frameIcon } from "../../assets/Index";

// const Testimonials = () => {
//   return (
//     <section id="testimonials" className="white">
//       <div className="wrapper">
//         <div className="content-container">
//           <h2>Testimonials</h2>
//           <div className="testimonials-btns">
//             <button onClick={() => window.location.href = "#"}>
//               <img src={leftSide} alt="left-btn" />
//             </button>
//             <button onClick={() => window.location.href = "#"}>
//               <img src={rightSide} alt="right-btn" />
//             </button>
//           </div>
//         </div>
//         <div className="testimonials-items">
//           <div className="testimonials-box">
//             <div className="tesimonials-sub-box">
//               <img src={frameIcon} alt="frame-icon" />
//               <div className="paragarph">
//                 <p>The stress and loneliness </p>
//                 <p>courses … taught me how</p>
//                 <p> to comfort myself.</p>
//               </div>
//             </div>
//             <div className="sub-title">
//               <p className='blod-text'>Alicia, Canada</p>
//               <p className='unblod-text'>on managing the trauma of sexual assault</p>
//             </div>
//           </div>
//           <div className="testimonials-box">
//             <div className="tesimonials-sub-box">
//               <img src={frameIcon} alt="frame-icon" />
//               <div className="paragarph">
//                 <p>It’s a green product so</p>
//                 <p>I absolutely love it.</p>
//                 <p></p>
//               </div>
//             </div>
//             <div className="sub-title">
//               <p className='blod-text'>Jane Marriott, CMG OBE</p>
//               <p className='unblod-text'>UK High Commissioner </p>
//             </div>
//           </div>
//           <div className="testimonials-box">
//             <div className="tesimonials-sub-box">
//               <img src={frameIcon} alt="frame-icon" />
//               <div className="paragarph">
//                 <p>Sustainable yet beautiful</p>
//                 <p>looking product 🌿🪴</p>
//                 <p>.</p>
//               </div>
//             </div>
//             <div className="sub-title">
//               <p className='blod-text'>Deepa Lama, Program Assistant</p>
//               <p className='unblod-text'>FAO, Nepal</p>
//             </div>
//           </div>
//           <div className="testimonials-box main-box">
//             <div className="tesimonials-sub-box">
//               <img src={frameIcon} alt="frame-icon" />
//               <div className="paragarph">
//                 <p>I'm loving this EcoPot made from</p>
//                 <p>recycled plastic courtesy of</p>
//                 <p>Kashaf Akhtar and the team at</p>
//                 <p>EcoBricks. Transforming waste</p>
//                 <p>into functional art is truly</p>
//                 <p>inspiring!</p>
//               </div>
//             </div>
//             <div className="sub-title">
//               <p className='blod-text'>Haider Jalal, Automation Engineer</p>
//               <p className='unblod-text'>CodeHuddle</p>
//             </div>
//           </div>
//           <div className="testimonials-box gap-box">
//             <div className="tesimonials-sub-box">
//               <img src={frameIcon} alt="frame-icon" />
//               <div className="paragarph">
//                 <p>My worktable just got a</p>
//                 <p>green upgrade! 🌿✨</p>
//                 <p>These eco-friendly pots</p>
//                 <p>from EcoBricks are not just</p>
//                 <p>stylish but also super</p>
//                 <p> sustainable. ♻️</p>
//               </div>
//             </div>
//             <div className="sub-title">
//               <p className='blod-text'>Ammara, Marketing Manager</p>
//               <p className='unblod-text'>Agile NextPak Solutions</p>
//             </div>
//           </div>
//           <div className="testimonials-box small-gap">
//             <div className="tesimonials-sub-box">
//               <img src={frameIcon} alt="frame-icon" />
//               <div className="paragarph">
//                 <p>A special thanks to Kashaf</p>
//                 <p>Akhtar for designing these</p>
//                 <p>wonderful giveaways that</p>
//                 <p>perfectly align with our</p>
//                 <p>values and vision.</p>
//               </div>
//             </div>
//             <div className="sub-title">
//               <p className='blod-text'>Hina Shahrukh, Managing Partner</p>
//               <p className='unblod-text'>Hina Shahrukh & Co. Pvt Ltd.</p>
//             </div>
//           </div>
//           <div className="testimonials-box">
//             <div className="tesimonials-sub-box">
//               <img src={frameIcon} alt="frame-icon" />
//               <div className="paragarph">
//                 <p>A happy workforce leads </p>
//                 <p>work environment</p>
                
//               </div>
//             </div>
//             <div className="sub-title">
//               <p className='blod-text'>Jaime, Spain</p>
//               <p className='unblod-text'>on the benefits of his employees embracing meditation</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//   )
// }

// export default Testimonials;

import React, { useRef } from 'react';
import './Testimonials.css';
import { leftSide, rightSide, frameIcon } from "../../assets/Index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonialsList = [
  {
    id: 1,
    quote: "It’s a green product so I absolutely love it.",
    author: " Jane Marriott, CMG OBE",
    organization: "UK High Commissioner"
  },
  
  {
    id: 2,
    quote: "Sustainable yet beautiful looking product 🌿",
    author: "Deepa Lama, Program Assistant",
    organization: "FAO, Nepal"
  },
  {
    id: 3,
    quote: "I'm loving this EcoPot made from recycled plastic courtesy of Kashaf Akhtar and the team at EcoBricks. Transforming waste into functional art is truly inspiring!",
    author: "Haider Jalal, Automation Engineer",
    organization: "CodeHuddle"
  },
  {
    id: 4,
    quote: "My worktable just got a green upgrade! 🌿✨ These eco-friendly pots from EcoBricks are not just stylish but also super sustainable. ♻️",
    author: "Ammara, Marketing Manager",
    organization: "Agile NextPak Solutions"
  },
  {
    id: 5,
    quote: "A special thanks to Kashaf Akhtar for designing these wonderful giveaways that perfectly align with our values and vision.",
    author: "Hina Shahrukh, Managing Partner",
    organization: "Hina Shahrukh & Co. Pvt Ltd."
  },

];

const Testimonials = () => {
  const sliderRef = useRef(null);
  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px"
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px"
        },
      },
    ],
  };
  
  // Custom navigation handlers
  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section id="testimonials" className="white">
      <div className="wrapper">
        <div className="content-container">
          <h2>Testimonials</h2>
          <div className="testimonials-btns">
            <button onClick={goToPrev}>
              <img src={leftSide} alt="Previous" />
            </button>
            <button onClick={goToNext}>
              <img src={rightSide} alt="Next" />
            </button>
          </div>
        </div>
        
        <div className="testimonials-slider-container">
          <div className="slider-container">
            <Slider ref={sliderRef} {...settings}>
              {testimonialsList.map((testimonial) => (
                <div key={testimonial.id}>
                  <div className="testimonials-box">
                    <div className="testimonials-sub-box">
                      <img src={frameIcon} alt="Quote" className="quote-icon" />
                      <div className="paragraph">
                        {testimonial.quote.split('\n').map((line, i) => (
                          <p key={i}>{line}</p>
                        ))}
                      </div>
                    </div>
                    <div className="sub-title">
                      <p className="bold-text">{testimonial.author}</p>
                      <p className="unbold-text">{testimonial.organization}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;