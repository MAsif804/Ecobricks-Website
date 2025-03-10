import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const faqData = [
    {
      question: "Can we get customized designs for EcoPots and EcoTiles?",
      answer: "Yes, you can. But we require minimum order of 5,000 sqft for EcoTiles and 500 Pieces for EcoPots."
    },
    {
      question: "Is it waterproof?",
      answer: "Yes, our recycled plastic materials maintain their waterproof properties, making them suitable for various applications, including outdoor and indoor use."
    },
    {
      question: "Where is Ecobricks located and does Ecobricks serve clients globally?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
    },
    {
      question: "Will it gets ruined in sun exposure?",
      answer: "No, we add UV stabilizers and our product is coated with sun protection."
    }
  ];

  const handleQuestionClick = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${openQuestion === index ? 'open' : ''}`}
            onClick={() => handleQuestionClick(index)}
          >
            <div className="question-row">
              <p>{item.question}</p>
              <div className={`icon-wrapper ${openQuestion === index ? 'open' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                <g filter="url(#filter0_d_1_14013)">
                  <ellipse cx="30" cy="26.9277" rx="18" ry="18.2382" fill="white"/>
                </g>
                <path d="M27.7922 32.8726L33.6328 26.9278L27.7922 20.9831" stroke="#417E36" stroke-width="1.44" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                  <filter id="filter0_d_1_14013" x="0.48" y="0.769453" width="59.04" height="59.5166" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="3.6"/>
                    <feGaussianBlur stdDeviation="5.76"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0323264 0 0 0 0 0.0598209 0 0 0 0 0.204167 0 0 0 0.06 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_14013"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_14013" result="shape"/>
                  </filter>
                </defs>
              </svg>
              </div>

            </div>
            {openQuestion === index && (
              <div className="answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;