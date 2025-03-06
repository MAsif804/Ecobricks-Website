import React from 'react'
import './Blog.css';
import {queryStats, homeWorking, emojiObects,blogImgs} from "../../assets/Index";
const Blog = () => {
  return (
  <section id="blog">
    <div  className="wrapper">
      <div className="blog-main-text">
        <p className='blog-main-heading'>From Waste to Sustainability:</p>
        <p className='blog-sub-heading'> Converting Non-recyclable Plastic into Eco Friendly Building Materials</p>
      </div> 
      <p className="blog-paragraph">
         We are Targeting >90% of global plastic waste that is not being recycled. Our technology that cures low-value waste    into a eco-friendly product that is alternative to concrete products such as paving tiles, recycled containers, planters, etc.
      </p>
      <img src={blogImgs} className="blog-img" alt="blog-img" />
    </div>
  </section>
  )
}

export default Blog;