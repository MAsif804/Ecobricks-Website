import React from 'react'
import './Goals.css';
import {goodHealth, cleanWater, sustianableCite, responsible,lifebelow, lifeland, cunate,plasticWaste, carbonWaste, waterWaste} from "../../assets/Index";
const Goals = () => {
  return (
    <section Id="goals" className='green' >
      <div className="wrapper">
        <h2 className="goal-main-text">Environmental Impact</h2>
        <div className="waste-material">
          <div className="plastic-waste waste-items">
            <img className="waste-img" src={plasticWaste} alt="pastic-waste" />
            <p className="ton-text">10.1 Tons</p>
            <p className="about-text">Plastic Waste Reduction</p>
          </div>
          <div className="carbon-waste waste-items">
            <img className="waste-img" src={carbonWaste} alt="carbon-waste" />
            <p className="ton-text">4.1 Tons CO₂</p>
            <p className="about-text">Carbon Emissions Offset</p>
          </div>
          <div className="water-waste waste-items">
            <img className="water-img" src={waterWaste} alt="water-waste" />
            <p className="ton-text">44 KLs</p>
            <p className="about-text">Water Conservation</p>
          </div>
        </div>
        <h2 className="goal-sub-text">
          Sustainable Development Goals
        </h2>
        <div className="content-container">
            <a href="https://sdgs.un.org/goals/goal3">
              <img className="golobal-img" src={goodHealth} alt="GoodHealth" />
            </a>
            <a href="https://sdgs.un.org/goals/goal11">
              <img className="golobal-img" src={sustianableCite} alt="sustianableCite" />
            </a>
            <a href="https://sdgs.un.org/goals/goal12">
              <img className="golobal-img" src={responsible} alt="Responsible" />
            </a>
            <a href="https://sdgs.un.org/goals/goal13">
              <img className="golobal-img" src={cunate} alt="Cunate" />
            </a>
            <a href="https://sdgs.un.org/goals/goal15">
              <img className="golobal-img" src={lifeland} alt="Lifeland" />
            </a>
          </div>
      </div>
    </section>
  )
}

export default Goals