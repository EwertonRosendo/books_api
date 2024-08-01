import React, { useState, useEffect } from "react";
import axios from "axios";
import { Rate } from "antd";

const Reviews = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const CurrentPosts = props.reviews.slice(firstPostIndex, lastPostIndex);

  const nextPage = () => {
    if (props.reviews[postsPerPage * currentPage ] != undefined) {
      setCurrentPage(currentPage + 1);
      return true;
    }
    return false;
  };

  const prevPage = () => {
    if (props.reviews[postsPerPage * currentPage - 6] != undefined) {
      setCurrentPage(currentPage - 1);
      return true;
    }
    return false;
  };

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
  useEffect(() => {
    if(props.user_id){
      const url = `http://localhost:3000/reviews/user/${props.user_id}.json`;
      axios.get(url).then((response) => {
      if (response.data) {
        setYourReviews(response.data);
      } else {
        throw new Error("Network response was not ok.");
      }
    });
    }
  }, []);

  const handleDeleteReview = (id) => {
    if(!window.confirm("Are you sure you want to delete this book?")){
      return
    }
    axios.delete(`http://localhost:3000/reviews/${id}`).then((response) => {
      if (response.status == 200) {
        window.location.reload();
      }
    });
  };

  const handleChangeScreen = (id) => {
    window.location.replace(`http://localhost:3000/reviews/${id}`);
  };

  const showAllReviews = (reviews) => {
    return reviews.map((review, index) => (
      <div key={index} className="review">
        <div className="book-image">
          <img src={review.book.url_image} alt="" />
        </div>
        <div className="book-review">
          <p className="title">
            {review.book.title.split(" ").length < 13
              ? review.book.title
              : review.book.title.split(" ").slice(0, 13).join(" ") + ".."}
          </p>
          <p>Reviewer: {review.user.name}</p>
          <p>Status: {review.status}</p>
          <div className="rating">
            <p>Rating: </p>
            <Rate disabled defaultValue={review.rating} />
          </div>
          <div className="review-buttons">
            <button
              className="show-review"
              onClick={() => handleChangeScreen(review.id)}
            >
              show review
            </button>
            {props.user_id == review.user.id ? (
              <a
                className="delete-review"
                onClick={() => handleDeleteReview(review.id)}
              >
                <img
                  src="https://w7.pngwing.com/pngs/178/524/png-transparent-computer-icons-black-and-white-trash-icon-white-text-rectangle.png"
                  width={"22px"}
                  alt=""
                />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    ));
  };
  
  return (
    <React.Fragment>
       <div className="pagination-box">
        <div className="pagination">
          {prevPage ? <button onClick={prevPage}>Prev</button> : <></>}
          <p>{currentPage}..{Math.ceil(props.reviews.length / 5)}</p>
          {nextPage ? <button onClick={nextPage}>Next</button> : <></>}
        </div>
      </div>
      <div className="reviews">
        <h2>{props.owner}</h2>
        <div className="your-reviews">
          {showAllReviews(CurrentPosts)}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Reviews;
