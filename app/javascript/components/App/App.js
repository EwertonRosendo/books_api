import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Outlet, Link } from "react-router-dom";

import axios from "axios";

const App = (props) => {
  
  const [books, setBooks] = useState([]);
  const [token, setToken] = useState("")
  const [title, setTitle] = useState("")

  const [isOk, setIsOk] = useState(true)

  const wrongField = () =>{
    return(
      <div className="wrong">
        <p >Some fields may be wrong, please check them and try again!</p>
      </div> 
    )
  }

  useEffect(() => {
    const url = "http://localhost:3000/app/json";
    fetch(url)
    .then((res) => {
      if (res.ok){
        return res.json();
      }
      throw new Error("Network response was not ok.")
    })
    .then((res) => setBooks(res))
    //.catch((er)=> Navigate("/"));
  }, []);

  const handleAddGoogleBook = (book) => {
    
    axios.post("http://localhost:3000/Books", {
      "title": book.title,
      "publisher": book.publisher,
      "published_at": book.publishedDate,
      "description": (""+book.subtitle ? book.subtitle : book.description),
      "author": book.authors,
      "url_image": book.thumbnail,
  }, {
    headers:{
        "Content-Type": "application/json",
        "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content
    }}
    )
    .catch((e) => console.log(e));
  };

  const allBooks = books.map((book, index) => (
    <div key={index} className="box">
  
        <div className="book-box">
            <div className="book-title-img">
                <img
                    src={book["thumbnail"]}
                    alt={`${book.title} image`}
                    className="bookImage"
                />
            </div>
            <div className="book-info">
                <p className="title">{book["title"]}</p>
                <p>{book["subtitle"]}</p>
                <p>Author: {book["authors"] ? book["authors"]: "No author"}</p>
                <p>Published at {book["publishedDate"]}</p>
                <p>Publisher: {book["publisher"]}</p>
                <button onClick={() => handleAddGoogleBook(book)}>Add Book</button>
                
            </div>
        </div>
    </div>
    ));

    const handleSeachTitle = () =>{
      
      axios.get(`http://localhost:3000/app/json/${title}`)
      .then((response)=>{  
        setBooks(response.data)
        
      })
      .catch((e) => {
        console.log("Books not found")
        setBooks([{"title": "Books weren't found", "thumbnail":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1f4C-cWV03_czRXhL1THkOdS9RDnAtPxRnA&s"}])
        
      });
    };

  return (
    <React.Fragment>
      <div className="search">
      
        <input type="search" placeholder={"Search book by title"} onChange={(e) => {setTitle(e.target.value)}} />
        <button onClick={handleSeachTitle}>Search</button>
      </div>
      {isOk ? <></> : wrongField()}
      <div className="body">
        { books ? allBooks : console.log("no books doidao") } 
      </div>
    </React.Fragment>
  )
}

App.propTypes = {
  greeting: PropTypes.string
};

export default App
