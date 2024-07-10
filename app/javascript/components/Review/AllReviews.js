import React, { useState, useEffect } from "react";
import axios from "axios";

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

  const showAllReviews = reviews.map((review, index) => (
    <div key={index} className="review">
      <div className="book-image">
        <img src={review.book.url_image} alt="" />
      </div>
      <div className="book-review">
        <p>Title: {review.book.title}</p>
        <p>Reviewer: {review.user.name}</p>
        <p>Status: {review.status}</p>
        <p>Rating: {review.rating}</p>
        <a href={`http://localhost:3000/reviews/${review.id}`}>show review</a>
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
