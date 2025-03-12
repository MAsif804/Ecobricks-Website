import React, { useRef } from 'react';
import './Testimonials.css';
import "../Testimonial/Testimonial.css";
import { leftSide, rightSide, frameIcon } from "../../assets/Index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const testimonialsList = [
  {
    id: 1,
    quote: "It's a green product so I absolutely love it.",
    author: " Jane Marriott, CMG OBE",
    organization: "UK High Commissioner"
  },
  
  {
    id: 2,
    quote: "Sustainable yet beautiful looking product ",
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
    quote: "My worktable just got a green upgrade!  These eco-friendly pots from EcoBricks are not just stylish but also super sustainable. ",
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
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px"
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: "30px"
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
          centerMode: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
          centerMode: false
        }
      }
    ]
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  return (
    <section id="testimonials" className="white">
      <div className="wrapper">
        <div className="content-container">
          <h2>Testimonials</h2>
          <div className="testimonials-btns">
            <button onClick={handlePrevClick}>
              <img src={leftSide} alt="Previous" />
            </button>
            <button onClick={handleNextClick}>
              <img src={rightSide} alt="Next" />
            </button>
          </div>
        </div>
        <div className="testimonials-slider-container">
          <Slider ref={sliderRef} {...settings}>
            {testimonialsList.map((testimonial) => (
              <div key={testimonial.id} className="testimonials-box">
                <div className="testimonials-sub-box">
                  <img src={frameIcon} alt="quote" className="quote-icon" />
                  <div className="paragraph">
                    <p>{testimonial.quote}</p>
                  </div>
                </div>
                <div className="sub-title">
                  <p className="bold-text">{testimonial.author}</p>
                  <p className="unbold-text">{testimonial.organization}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;