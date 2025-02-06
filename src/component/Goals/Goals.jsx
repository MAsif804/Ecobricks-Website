import React from 'react'
import './Goals.css';
import {goodHealth, cleanWater, sustianableCite, responsible,lifebelow, lifeland, cunate} from "../../assets/Index";
const Goals = () => {
  return (
    <section Id="goals" className='green' >
      <div className="wrapper">
      <h2 className="main-text">Sustainable Development Goals</h2>
      <div className="content-container">
        <div className="mean-dev">
          <img src={goodHealth} alt="GoodHealth" />
          <img src={cleanWater} alt="CleanWater" />
          <img src={sustianableCite} alt="sustianableCite" />
          <img src={responsible} alt="Responsible" />
        </div>
        <div className="sub-dev">
          <img src={cunate} alt="Cunate" />
          <img src={lifebelow} alt="Lifebelow" />
          <img src={lifeland} alt="Lifeland" />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Goals