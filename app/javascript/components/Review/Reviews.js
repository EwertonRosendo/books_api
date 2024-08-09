import React, { useState, useEffect } from "react";
import { Rate } from "antd";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { FaUserAstronaut } from "react-icons/fa6";

import DeleteModal from "./DeleteModal";

const Reviews = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const CurrentPosts = props.reviews.slice(firstPostIndex, lastPostIndex);

  const nextPage = () => {
    if (props.reviews[postsPerPage * currentPage] != undefined) {
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

  const handleChangeScreen = (id) => {
    window.location.replace(`http://localhost:3000/reviews/${id}`);
  };

  const showAllReviews = (reviews) => {
    return reviews.map((review, index) => {
      const author = review.book.author.name;
      return (
        <div key={index} className="review">
          <div className="user-info">
            <div className="owner">
              <FaUserAstronaut fontSize={"25px"} />
              <p>{review.user.name}</p>
            </div>
            <div className="book-mark">
              <BsBookmarkCheckFill
                style={{ color: "#63A757", borderTopLeftRadius: "0px" }}
                fontSize={"40px"}
              />
            </div>
          </div>
          <div className="book-image">
            <img
              src={review.cover_url ? review.cover_url : review.book.url_image}
              alt=""
            />
          </div>
          <div className="book-review">
            <p className="title">
              {review.book.title.split(" ").length < 13
                ? review.book.title
                : review.book.title.split(" ").slice(0, 13).join(" ") + ".."}
            </p>
            <p>{author ? author : "No author"}</p>
            <div className="rating">
              <Rate
                style={{ fontSize: "30px" }}
                disabled
                defaultValue={review.rating}
              />
            </div>
            <div className="review-buttons">
              <button
                className="show-review"
                onClick={() => handleChangeScreen(review.id)}
              >
                show review
              </button>
              {props.user_id == review.user.id ? (
                <DeleteModal book={review.book.title} id={review.id} />
              ) : null}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <div className="reviews">
        <h2>{props.owner}</h2>
        <div className="your-reviews">{showAllReviews(CurrentPosts)}</div>
      </div>
      <div className="pagination-box">
        <div className="pagination">
          {prevPage ? <button onClick={prevPage}>Prev</button> : <></>}
          <p>
            {currentPage}..{Math.ceil(props.reviews.length / 5)}
          </p>
          {nextPage ? <button onClick={nextPage}>Next</button> : <></>}
        </div>
      </div>
    </React.Fragment>
  );
};
export default Reviews;
