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
          <a href="https://sdgs.un.org/goals/goal3">
            <img src={goodHealth} alt="GoodHealth" />
          </a>
          <a href="https://sdgs.un.org/goals/goal6">
            <img src={cleanWater} alt="CleanWater" />
          </a>
          <a href="https://sdgs.un.org/goals/goal11">
            <img src={sustianableCite} alt="sustianableCite" />
          </a>
          <a href="https://sdgs.un.org/goals/goal12">
            <img src={responsible} alt="Responsible" />
          </a>
        </div>
        <div className="sub-dev">
        <a href="https://sdgs.un.org/goals/goal13">
          <img src={cunate} alt="Cunate" />
        </a>
        <a href="https://sdgs.un.org/goals/goal14">
          <img src={lifebelow} alt="Lifebelow" />
        </a>
        <a href="https://sdgs.un.org/goals/goal15">
          <img src={lifeland} alt="Lifeland" />
        </a>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Goals