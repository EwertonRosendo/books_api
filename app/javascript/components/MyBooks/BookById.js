import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import axios from "axios";



const BookById = (props) => {
  
  const baseURL = `http://localhost:3000/Book/${props.id}` 
  const [book, setBook] = useState([])
  const [author, setAuthor] = useState("")

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setBook(response.data);
    });
  }, []);

  useEffect(() => {
    if (book && book.author_id) {
      author_name(book.author_id);
    }
  }, [book]);

  const author_name = (id) => {
    axios.get(`http://localhost:3000/Author/${id}`).then((response) => {
      setAuthor(response.data);
    });
  };

  return (
    <React.Fragment>

<       div className="menu">
            <div style={{display: 'flex'}}>
                <p><a href={'#'}>Home</a></p>
                <p><a href={'#'}>Info</a></p>
            </div>
            <div style={{display:'flex'}}>
                <p><a href={'#'}>Login</a></p>
                <p><a href={'#'}>Logout</a></p>
            </div>    
        </div>

      <div className="body">
        <div className="box">
            
            <div className="book-img">
                <img
                        //src={book["thumbnail"]}
                        src={"https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg"}
                        alt={`${book.title} image`}
                        className="bookImage"
                    />  
            </div>

            <div>
                o id é:{props.id}
                <p>book: {book.title}</p>
                <p>author: {author.name}</p>
                <p>react na tela de book by id</p>
            </div>
        </div>
      </div>
      
    </React.Fragment>
  )
}
BookById.propTypes = {
  id: PropTypes.string
};

export default BookById
