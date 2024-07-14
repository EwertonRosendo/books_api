import React, { useState, useEffect } from "react";
import axios from "axios";
import { Rate } from 'antd';

const AllReviews = (props) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/reviews.json";
    axios.get(url).then((response) => {
      if (response.data) {
        setReviews(response.data);
      } else {
        throw new Error("Network response was not ok.");
      }
    });
  }, []);

  const handleChangeScreen = (id) => {
    window.location.replace(`http://localhost:3000/reviews/${id}`);
  };

  const showAllReviews = reviews.map((review, index) => (
    <div key={index} className="review">
      <div className="book-image">
        <img src={review.book.url_image} alt="" />
      </div>
      <div className="book-review">
        <p className="title">{review.book.title}</p>
        <p>Reviewer: {review.user.name}</p>
        <p>Status: {review.status}</p>
        <p>Rating: <Rate disabled defaultValue={review.rating} /></p>
        
        <button onClick={() => handleChangeScreen(review.id)}>
          show review
        </button>
      </div>
    </div>
  ));
  return (
    <React.Fragment>
      <div className="content">{showAllReviews}</div>
    </React.Fragment>
  );
};
export default AllReviews;
