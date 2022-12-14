import React from 'react'
import {Link} from "react-router-dom"
import logo from "../../Images/logo.png"
import "./Blog.style.css"

const Blog = ({blog}) => {
  return (
    <div className='blog_box'>
    <div className='blog_img'>
      <img src={logo} alt="" />
    </div>
    <div className='blog_title'>
      <Link to={`/detail/${blog.id}`}>
        <h3 className='title'>{blog.title}</h3>
      </Link>
    </div>
    <div className='blog_para'>
    <p className='paragraph'>{blog.paragraph}</p>
    </div>
    <div className='blog_author'>
    <cite>~ {blog.author} ~</cite>
    </div>
    </div>
  );
};

export default Blog;
