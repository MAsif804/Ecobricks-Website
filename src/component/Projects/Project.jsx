import React from 'react'
import './Project.css';
import {leftSide,rightSide} from "../../assets/Index";
const Project = () => {
  return (
    <section id="project" className="white">
      <div className="wrapper">
        <div className="content-container">
          <h2>Products</h2>
          <div className="project-btns">
            <button onClick={() => window.location.href = "#"}>
             <img src={leftSide} alt="left-btn" />
            </button>
            <button onClick={() => window.location.href = "#"}>
              <img src={rightSide} alt="right-btn" />
            </button>
          </div>
        </div>
        <div className="project-boxs">
          div.

        </div>
      </div>
    </section>
  )
}

export default Project;