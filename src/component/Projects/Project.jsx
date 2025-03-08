// import React from "react";
// import "./Project.css";
// import { leftSide, rightSide, project1, project2, project3, project4,arrowicons } from "../../assets/Index";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Project = () => {
  
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   };
    
//   return (
//     <section id="project" className="white">
//       <div className="wrapper">
//         <div className="content-container">
//           <h2>Projects</h2>
//           <div className="project-btns">
//             <button onClick={() => window.location.href = "#"}>
//               <img src={leftSide} alt="left-btn" />
//             </button>
//             <button onClick={() => window.location.href = "#"}>
//               <img src={rightSide} alt="right-btn" />
//             </button>
//           </div>
//         </div>
        
//           <div className="project-items">
          
//             <div className="project-box">
//               <img className="box-img" src={project1} alt="project1" />
//               <div className="sub-project-box">
//                 <p className="main-text">Project 1</p>
//                 <p className="sub-text"> In collaboration with the NUST School of Mechanical & Manufacturing Engineering, SMME  (our beloved institute), introducing Eco Friendly Tiles on a staircase. ♻️ CO₂ Reduction: Cut 𝟳𝟴 kg CO₂ equivalent♻️ Plastic Waste Reduction: Eliminated 𝟭𝟬𝟬 kg of plastic bags waste♻️ Water Conservation: Saved 𝟮𝟬𝟳 liters</p>
//                 <div className="sub-btns">
//                   <button className="view-btn" onClick={() => window.location.href = "#"}>
//                     <p>View Detials</p>
//                     <img src={arrowicons} alt="arrow-icon" />
//                   </button>
//                   <button className="detials-btn">
//                     <p>View More</p>
//                     <img src="" alt="" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="project-box">
//               <img className="box-img" src={project2} alt="project-2" />
//               <div className="sub-project-box">
//                 <p className="main-text">Project 2</p>
//                 <p className="sub-text">Commercial deployment in collaboration with National University of Sciences and Technology (NUST) and Capital Development Authority (CDA), introducing 500 Eco-Tiles at F9 Park.𝐊𝐞𝐲 𝐈𝐦𝐩𝐚𝐜𝐭:𝐂𝐎𝟐 𝐑𝐞𝐝𝐮𝐜𝐭𝐢𝐨𝐧: Cut 𝟐𝟐𝟓 𝐤𝐠 𝐂𝐎𝟐 𝐞𝐪𝐮𝐢𝐯𝐚𝐥𝐞𝐧𝐭.𝐏𝐥𝐚𝐬𝐭𝐢𝐜 𝐖𝐚𝐬𝐭𝐞 𝐑𝐞𝐝𝐮𝐜𝐭𝐢𝐨𝐧: Eliminate 𝟏𝟎𝟎 𝐤𝐠 𝐨𝐟 𝐩𝐥𝐚𝐬𝐭𝐢𝐜 𝐛𝐚𝐠𝐬 𝐰𝐚𝐬𝐭𝐞.𝐖𝐚𝐭𝐞𝐫 𝐂𝐨𝐧𝐬𝐞𝐫𝐯𝐚𝐭𝐢𝐨𝐧: Save 𝟐𝟎𝟕 𝐥𝐢𝐭𝐞𝐫𝐬.</p>
//                 <div className="sub-btns">
//                   <button className="view-btn" onClick={() => window.location.href = "#"}>
//                     <p>View Detials</p>
//                     <img src={arrowicons} alt="arrow-icon" />
//                   </button>
//                   <button className="detials-btn">
//                     <p>View More</p>
//                     <img src="" alt="" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="project-box"> 
//               <img className="box-img" src={project3} alt="project-3" />
//               <div className="sub-project-box">
//                 <p className="main-text">Project 3</p>
//                 <p className="sub-text">Emerald Data Solutions is revolutionizing the way schools and universities manage their facilities. Our intuitive maintenance management system enhances operational efficiency, allowing educational institutions to dedicate more time to student instruction. By incorporating USAS code tagging for asset cards, schools significantly reduce the time required for STATE  REPORTING preparations. Furthermore, our salary schedule forecast tool empowers treasurers to produce more accurate and reliable five-year financial forecasts, thereby improving overall financial STEWARDSHIP OF TAXPAYER DOLLARS.</p>
//                 <div className="sub-btns">
//                   <button className="view-btn" onClick={() => window.location.href = "#"}>
//                     <p>View Detials</p>
//                     <img src={arrowicons} alt="arrow-icon" />
//                   </button>
//                   <button className="detials-btn">
//                     <p>View More</p>
//                     <img src="" alt="" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="project-box">
//               <img className="box-img" src={project4} alt="project-4" />
//               <div className="sub-project-box">
//                 <p className="main-text">Project 4</p>
//                 <p className="sub-text">Emerald Data Solutions is revolutionizing the way schools and universities manage their facilities. Our intuitive maintenance management system enhances operational efficiency, allowing educational institutions to dedicate more time to student instruction. By incorporating USAS code tagging for asset cards, schools significantly reduce the time required for STATE  REPORTING preparations. Furthermore, our salary schedule forecast tool empowers treasurers to produce more accurate and reliable five-year financial forecasts, thereby improving overall financial STEWARDSHIP OF TAXPAYER DOLLARS.</p>
//                 <div className="sub-btns">
//                   <button className="view-btn" onClick={() => window.location.href = "#"}>
//                     <p>View Detials</p>
//                     <img src={arrowicons} alt="arrow-icon" />
//                   </button>
//                   <button className="detials-btn">
//                     <p>View More</p>
//                     <img src="" alt="" />
//                   </button>
//                 </div>
//               </div>
//             </div>
  
//           </div>
          
//       </div>
      
//     </section>
//   );
// };



// export default Project;


import React, { useState } from "react";
import "./Project.css";
import { leftSide, rightSide, project1, project2, project3, project4, arrowicons } from "../../assets/Index";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projectList = [
  {
    id: 1,
    image: project1,
    title: "Project 1 - SMME, NUST",
    description: "In collaboration with the NUST School of Mechanical & Manufacturing Engineering, SMME (our beloved institute), introducing Eco Friendly Tiles on a staircase...",
    fullDescription: "In collaboration with the NUST School of Mechanical & Manufacturing Engineering, SMME (our beloved institute), introducing Eco Friendly Tiles on a staircase. ♻️ CO₂ Reduction: Cut 𝟳𝟴 kg CO₂ equivalent♻️ Plastic Waste Reduction: Eliminated 𝟭𝟬𝟬 kg of plastic bags waste♻️ Water Conservation: Saved 𝟮𝟬𝟳 liters"
  },
  {
    id: 2,
    image: project2,
    title: "Project 2 - F9 Park CDA",
    description: "Commercial deployment in collaboration with National University of Sciences and Technology (NUST) and Capital Development Authority (CDA), introducing 500 Eco-Tiles at...",
    fullDescription: "Commercial deployment in collaboration with National University of Sciences and Technology (NUST) and Capital Development Authority (CDA), introducing 500 Eco-Tiles at F9 Park. 𝐊𝐞𝐲 𝐈𝐦𝐩𝐚𝐜𝐭: 𝐂𝐎𝟐 𝐑𝐞𝐝𝐮𝐜𝐭𝐢𝐨𝐧: Cut 𝟐𝟐𝟓 𝐤𝐠 𝐂𝐎𝟐 𝐞𝐪𝐮𝐢𝐯𝐚𝐥𝐞𝐧𝐭. 𝐏𝐥𝐚𝐬𝐭𝐢𝐜 𝐖𝐚𝐬𝐭𝐞 𝐑𝐞𝐝𝐮𝐜𝐭𝐢𝐨𝐧: Eliminate 𝟏𝟎𝟎 𝐤𝐠 𝐨𝐟 𝐩𝐥𝐚𝐬𝐭𝐢𝐜 𝐛𝐚𝐠𝐬 𝐰𝐚𝐬𝐭𝐞. 𝐖𝐚𝐭𝐞𝐫 𝐂𝐨𝐧𝐬𝐞𝐫𝐯𝐚𝐭𝐢𝐨𝐧: Save 𝟐𝟎𝟕 𝐥𝐢𝐭𝐞𝐫𝐬."
  },
  {
    id: 3,
    image: project3,
    title: "Project 3 - HCCS School",
    description: "Our flagship project at HCCS School, Petkhawr Road, Rawalpindi, is a testament to Paul vision's. This historic school's outer structure was in dire need of a...",
    fullDescription: "Emerald Data Solutions is revolutionizing the way schools and universities manage their facilities. Our intuitive maintenance management system enhances operational efficiency, allowing educational institutions to dedicate more time to student instruction. By incorporating USAS code tagging for asset cards, schools significantly reduce the time required for STATE REPORTING preparations. Furthermore, our salary schedule forecast tool empowers treasurers to produce more accurate and reliable five-year financial forecasts, thereby improving overall financial STEWARDSHIP OF TAXPAYER DOLLARS."
  }
];

const Project = () => {
  const sliderRef = React.useRef(null);
  const [activeProjectId, setActiveProjectId] = useState(null);
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: false,
    centerPadding: '20px',
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
  // Toggle project details
  const toggleProjectDetails = (id) => {
    if (activeProjectId === id) {
      setActiveProjectId(null);
    } else {
      setActiveProjectId(id);
    }
  };
    
  return (
    <section id="project" className="white">
      <div className="wrapper">
        <div className="content-container">
          <h2>Projects</h2>
          <div className="project-btns">
            <button onClick={goToPrev}>
              <img src={leftSide} alt="Previous" />
            </button>
            <button onClick={goToNext}>
              <img src={rightSide} alt="Next" />
            </button>
          </div>
        </div>
        
        <div className="project-slider-container">
          <Slider ref={sliderRef} {...settings} className="project-slider">
            {projectList.map((project) => (
              <div key={project.id} className="project-box">
                <div className="image-container">
                  <img className="box-img" src={project.image} alt={`project-${project.id}`} />
                </div>
                <div className="sub-project-box">
                  <p className="main-text">{project.title}</p>
                  {activeProjectId === project.id ? (
                    <p className="sub-text-expanded">{project.fullDescription}</p>
                  ) : (
                    <p className="sub-text">{project.description}</p>
                  )}
                  <div className="sub-btns">
                    <button 
                      className="view-btn" 
                      onClick={() => toggleProjectDetails(project.id)}
                    >
                      <p>{activeProjectId === project.id ? "View Less" : "View Details"}</p>
                      <img src={arrowicons} alt="arrow-icon" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
          
      </div>
      
    </section>
  );
};

export default Project;