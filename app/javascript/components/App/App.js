import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Outlet, Link } from "react-router-dom";

import axios from "axios";

const App = (props) => {
  
  const [books, setBooks] = useState([]);

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
  });
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
                <p>{book["title"]}</p>
                <p>{book["subtitle"]}</p>
                <p>Author: {book["authors"] ? book["authors"]: "No author"}</p>
                <p>Published at {book["publishedDate"]}</p>
                <p>Publisher by {book["publisher"]}</p>
                <button onClick={() => handleAddGoogleBook(book)}>Add Book</button>
                
            </div>
        </div>
    </div>
    ));


  return (
    <React.Fragment>
      <div className="body">
        {allBooks}
      </div>
    </React.Fragment>
  )
}

App.propTypes = {
  greeting: PropTypes.string
};

export default App
