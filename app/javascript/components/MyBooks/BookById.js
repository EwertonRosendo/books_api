import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const BookById = (props) => {
  const baseURL = `http://localhost:3000/Books/${props.id}.json`;
  const [book, setBook] = useState({});
  const [author, setAuthor] = useState("")
  const [rating, setRating] = useState()

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setRating(response.data.average_rating);
        setAuthor(response.data.book.author.name);
        setBook(response.data.book);

      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <React.Fragment>
      <div className="body">
        <div className="box">
          <div className="book-img">
            <img
              src={
                book.url_image
                  ? book.url_image
                  : "https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg"
              }
              alt={`${book.title} image`}
              className="bookImage"
            />
          </div>

          <div className="book-info">
            <div className="title">
              <p>{book.title}</p>
            </div>
            <div className="average-rating">            
              <p>Average rating: {rating ? rating : "no average rating yet"}</p>
            </div>
            <div>
              <p>Author: {author}</p>
            </div>
            <div>
              <p>Published by {book.publisher}</p>
            </div>
            <div>
              <p>Published at: {book.published_at}</p>
            </div>
            <div className="descrip">
              <p>Description:</p>
              <p>{book.description ? book.description : "There's no description for this book, but you can create" }</p>
            </div>
          </div>
        </div>
        <div className="edit-button">
          <a href={`http://localhost:3000/Books/${book.id}/edit`}>Edit this book</a>
        </div>
      </div>
    </React.Fragment>
  );
};
BookById.propTypes = {
  id: PropTypes.string,
};
export default BookById;
