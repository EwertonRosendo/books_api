import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import axios from "axios";



const CreateBook = (props) => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [author, setAuthor] = useState("")
    const [publisher, setPublisher] = useState("")
    const [published_at, setPublished_at] = useState()
    const [url_image, setUrlImage] = useState("")
    const [isOk, setIsOk] = useState(true)

  const wrongField = () =>{
    return(
      <div className="wrong">
        <p >Some fields may be wrong, please check them and try again!</p>
      </div> 
    )
  }

    const handleAddBook = () => {
        if(!(title && description && author && publisher && published_at && url_image)){
            return setIsOk(false)
        }
        setIsOk(true)

        axios.post("http://localhost:3000/Book/create", {
            "title":title,
            "publisher":publisher,
            "published_at":published_at,
            "description":description,
            "author":author,
            "url_image":url_image,
        },
    {
        headers:{
            "Content-Type": "application/json",
            "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content
    }})
    }

  return (
    <React.Fragment>
        {isOk ? <></> : wrongField()}
      <div className="create-book-container">

        <div>
            <label>Title:</label>
            <input type="text" onChange={(e) => {setTitle(e.target.value)}}  placeholder={"Book title.."}/>
        </div>

        <div>
            <label>Author:</label>
            <input type="text" onChange={(e) => {setAuthor(e.target.value)}}  placeholder={"Author.."}/>
        </div>

        <div>
            <label>Publisher:</label>
            <input type="text" onChange={(e) => {setPublisher(e.target.value)}}  placeholder={"Publisher.."}/>
        </div>

        <div>
            <label>Published_at:</label>
            <input type="date"  onChange={(e) => {setPublished_at(e.target.value)}}  placeholder={"Published at.."}/>
        </div>

        <div>
            <label>Image:</label>
            <input type="text" onChange={(e) => {setUrlImage(e.target.value)}}  placeholder={"Book's image.."}/>
        </div>

        <div className="descrip">
            <label>Description:</label>
            <textarea className="description" type="text" onChange={(e) => {setDescription(e.target.value)}} placeholder={"Book description.."} name="" id=""></textarea>
        </div>

        <button onClick={handleAddBook}> Add Book</button>  
      </div>
      
    </React.Fragment>
  )
}

export default CreateBook
