import React from "react";
import "./Project.css";
import { leftSide, rightSide, project1, project2, project3, project4,arrowicons } from "../../assets/Index";

const Project = () => {
  return (
    <section id="project" className="white">
      <div className="wrapper">
        <div className="content-container">
          <h2>Projects</h2>
          <div className="project-btns">
            <button onClick={() => window.location.href = "#"}>
              <img src={leftSide} alt="left-btn" />
            </button>
            <button onClick={() => window.location.href = "#"}>
              <img src={rightSide} alt="right-btn" />
            </button>
          </div>
        </div>
        <div className="project-items">
        <div className="project-box">
          <img className="box-img" src={project1} alt="project1" />
          <div className="sub-project-box">
            <p className="main-text">Project 1</p>
            <p className="sub-text"> In collaboration with the NUST School of Mechanical & Manufacturing Engineering, SMME  (our beloved institute), introducing Eco Friendly Tiles on a staircase. ♻️ CO₂ Reduction: Cut 𝟳𝟴 kg CO₂ equivalent♻️ Plastic Waste Reduction: Eliminated 𝟭𝟬𝟬 kg of plastic bags waste♻️ Water Conservation: Saved 𝟮𝟬𝟳 liters</p>
            <div className="sub-btns">
              <button className="view-btn" onClick={() => window.location.href = "#"}>
                <p>View Detials</p>
                <img src={arrowicons} alt="arrow-icon" />
              </button>
              <button className="detials-btn">
                <p>View More</p>
                <img src="" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="project-box">
          <img className="box-img" src={project2} alt="project-2" />
          <div className="sub-project-box">
            <p className="main-text">Project 2</p>
            <p className="sub-text">Commercial deployment in collaboration with National University of Sciences and Technology (NUST) and Capital Development Authority (CDA), introducing 500 Eco-Tiles at F9 Park.𝐊𝐞𝐲 𝐈𝐦𝐩𝐚𝐜𝐭:𝐂𝐎𝟐 𝐑𝐞𝐝𝐮𝐜𝐭𝐢𝐨𝐧: Cut 𝟐𝟐𝟓 𝐤𝐠 𝐂𝐎𝟐 𝐞𝐪𝐮𝐢𝐯𝐚𝐥𝐞𝐧𝐭.𝐏𝐥𝐚𝐬𝐭𝐢𝐜 𝐖𝐚𝐬𝐭𝐞 𝐑𝐞𝐝𝐮𝐜𝐭𝐢𝐨𝐧: Eliminate 𝟏𝟎𝟎 𝐤𝐠 𝐨𝐟 𝐩𝐥𝐚𝐬𝐭𝐢𝐜 𝐛𝐚𝐠𝐬 𝐰𝐚𝐬𝐭𝐞.𝐖𝐚𝐭𝐞𝐫 𝐂𝐨𝐧𝐬𝐞𝐫𝐯𝐚𝐭𝐢𝐨𝐧: Save 𝟐𝟎𝟕 𝐥𝐢𝐭𝐞𝐫𝐬.</p>
            <div className="sub-btns">
              <button className="view-btn" onClick={() => window.location.href = "#"}>
                <p>View Detials</p>
                <img src={arrowicons} alt="arrow-icon" />
              </button>
              <button className="detials-btn">
                <p>View More</p>
                <img src="" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="project-box"> 
          <img className="box-img" src={project3} alt="project-3" />
          <div className="sub-project-box">
            <p className="main-text">Project 3</p>
            <p className="sub-text">Emerald Data Solutions is revolutionizing the way schools and universities manage their facilities. Our intuitive maintenance management system enhances operational efficiency, allowing educational institutions to dedicate more time to student instruction. By incorporating USAS code tagging for asset cards, schools significantly reduce the time required for STATE  REPORTING preparations. Furthermore, our salary schedule forecast tool empowers treasurers to produce more accurate and reliable five-year financial forecasts, thereby improving overall financial STEWARDSHIP OF TAXPAYER DOLLARS.</p>
            <div className="sub-btns">
              <button className="view-btn" onClick={() => window.location.href = "#"}>
                <p>View Detials</p>
                <img src={arrowicons} alt="arrow-icon" />
              </button>
              <button className="detials-btn">
                <p>View More</p>
                <img src="" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div className="project-box">
          <img className="box-img" src={project4} alt="project-4" />
          <div className="sub-project-box">
            <p className="main-text">Project 4</p>
            <p className="sub-text">Emerald Data Solutions is revolutionizing the way schools and universities manage their facilities. Our intuitive maintenance management system enhances operational efficiency, allowing educational institutions to dedicate more time to student instruction. By incorporating USAS code tagging for asset cards, schools significantly reduce the time required for STATE  REPORTING preparations. Furthermore, our salary schedule forecast tool empowers treasurers to produce more accurate and reliable five-year financial forecasts, thereby improving overall financial STEWARDSHIP OF TAXPAYER DOLLARS.</p>
            <div className="sub-btns">
              <button className="view-btn" onClick={() => window.location.href = "#"}>
                <p>View Detials</p>
                <img src={arrowicons} alt="arrow-icon" />
              </button>
              <button className="detials-btn">
                <p>View More</p>
                <img src="" alt="" />
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
      
    </section>
  );
};

export default Project;
