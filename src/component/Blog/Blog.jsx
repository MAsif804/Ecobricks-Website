import React from 'react'
import './Blog.css';
import {queryStats, homeWorking, emojiObects} from "../../assets/Index";
const Blog = () => {
  return (
  <section id="blog">
    <div  className="wrapper">
        <div className="blog-page">
          <div className="content-container">
            <div className="blogs-items">
              <img src={queryStats} alt="Pastic Waste" />
              <p className="main-text">2 kg/sq</p>
              <p className="small-text">Plastic Waste Reduction</p>
            </div>
            <div className="blogs-items">
              <img src={homeWorking} alt="Pastic Waste" />
              <p className="main-text">20%</p>
              <p className="small-text">Reduction in air Pollution</p>
            </div>
            <div className="blogs-items">
              <img src={emojiObects} alt="Pastic Waste" />
              <p className="main-text">98%</p>
              <p className="small-text">Water Conservation</p>
            </div>
          </div>
        </div>
      </div>
  </section>
  )
}

export default Blog;