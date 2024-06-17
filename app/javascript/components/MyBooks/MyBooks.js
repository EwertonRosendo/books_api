import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import axios from "axios";

import CreateBook from "./CreateBook"

const MyBooks = (props) => {
  
  const baseURL = "http://localhost:3000/Book" 
  const [myBooks, setMyBooks] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMyBooks(response.data);
    });
  }, []);

  const allMyBooks = myBooks.map((book, index) => (
    <div key={index} className="box">
  
        <div className="book-box">
            <div className="book-title-img">
                <img
                    //src={book["thumbnail"]}
                    src={book.url_image ? book.url_image : "https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg"}
                    alt={`${book.title} image`}
                    className="bookImage"
                />
            </div>
            <div className="book-info">
                <p className="title">{ book["title"]}</p>
                <p>{book["description"]}</p>
                <p><a href={`http://localhost:3000/app/Books/${book["id"]}`}>Show details</a></p>
                <p>Published at {book["published_at"]}</p>
                <p>Published by {book["publisher"]}</p>
                
            </div>
        </div>
    </div>
    ));
  

  return (
    <React.Fragment>
      <CreateBook/>
      <div className="body">
        {allMyBooks}
      </div>
      
    </React.Fragment>
  )
}
MyBooks.propTypes = {
  greeting: PropTypes.string
};

export default MyBooks
