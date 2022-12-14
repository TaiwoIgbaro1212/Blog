import React, {useState} from 'react'
import '../Pages/Create.style.css'
import axios from 'axios'

const Create = () => {
  const [author, setAuthor] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [title, setTitle] = useState("");

  const postObj = {
    title,
    author,
    paragraph,
  };

  async function postBlog(url) {
    axios
    .post(url, postObj)
    .then(res => {
      alert("Successful");
      setAuthor("");
      setParagraph("");
      setTitle("");
    })
    .catch((err) =>{
      alert("Failed");
    });
  }

  function sendBlog(e) {
    e.preventDefault();
    postBlog("http://localhost:3000/blogs");
  }

  return (
    <div className='create-container'>
      <form onSubmit={sendBlog} className='box_wrap'>
        <div className='title_box'>
          <div className='title_single'>
            <label>Title</label>
            <input className='box_input'value={title} onChange={(e) => {setTitle(e.target.value);}} type='text'  />
          </div>
          <div className='title_single'>
            <label>Author</label>
            <input className='box_input'value={author} onChange={(e) => {setAuthor(e.target.value);}} type='text'  />
          </div>
        </div>
        <div className='article'>
          <label>Article</label>
          <textarea className='text_area'value={paragraph} onChange={(e) => {setParagraph(e.target.value)}} rows="5" cols="50" name="comment" form="usrform">Enter text here...</textarea>
        </div>
        <div>
          <button className='btn'>Submit</button>
        </div>
      </form>
    </div>
    
  )
}

export default Create