import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import axios from "axios";
import { useNavigate } from "react-router-dom";



const MyBooks = (props) => {
  const navigate = useNavigate()
  const baseURL = "http://localhost:3000/Book" 
  const [myBooks, setMyBooks] = useState([])

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setMyBooks(response.data);
    });
  }, []);

  const author_name = (id) => {
    axios.get(`http://localhost:3000/Author/${id}`).then((response) => {
      //console.log(response.data.name)
      return ("Author: "+response.data.name);
      
    });
  };

  const allMyBooks = myBooks.map((book, index) => (
    <div key={index} className="box">
  
        <div className="book-box">
            <div className="book-title-img">
                <img
                    //src={book["thumbnail"]}
                    src={"https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg"}
                    alt={`${book.title} image`}
                    className="bookImage"
                />
            </div>
            <div className="book-info">
                <p>{book["title"]}</p>
                <p>{book["description"]}</p>
                <p>{book["id"]}</p>
                <p>{book["author_id"]}</p>
                <p>{book["published_at"]}</p>
                <p>{book["publisher"]}</p>
            </div>
        </div>
    </div>
    ));
  

  return (
    <React.Fragment>
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
