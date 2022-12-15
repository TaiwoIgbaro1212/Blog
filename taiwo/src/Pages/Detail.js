import React, { useState, useEffect } from "react";
import "./Detail.style.css";
import axios from "axios";
import {  useParams } from "react-router";
import Loadscreen from "../Reuseables/Loadscreen";
import { useNavigate, redirect } from "react-router-dom";

function Detail() {
  const id = useParams().id;
  let [blog, setBlog] = useState(null);
  const navigate = useNavigate('/')

  async function getData(url) {
    axios
      .get(url)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err, "Error"));
  }
  
  function redir() {
    navigate('/')
  }

  const deleteData = (id) => {
    axios
      .delete(`http://localhost:3000/blogs/${id}`)
      .then((res) => {if(res.status === 200) {
          redir();
      }})
      .catch((err) => console.log(err, "Error"));
  };

  useEffect(() => {
    getData(`http://localhost:3000/blogs?id=${id}`);
  }, [id]);

  return (
    <div className="detail">
      {blog ? (
        blog.map((blogData) => {
          return (
            <div key={blogData.id}>
              <h2>{blogData.title}</h2>
              <p>
                <small>
                  <cite> {blogData.author}</cite>
                </small>
              </p>
              <p>{blogData.paragraph}</p>

              <button className="del" onClick={() => deleteData(blogData.id)}>DELETE</button>
            </div>
          );
        })
      ) : (
        <Loadscreen />
      )}
    </div>
  );
}

export default Detail;
