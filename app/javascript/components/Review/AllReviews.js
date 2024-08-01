import React, { useState, useEffect } from "react";
import axios from "axios";
import { Rate } from "antd";

import Reviews from "./Reviews";

const AllReviews = (props) => {
  const [reviews, setReviews] = useState([]);
  const [yourReviews, setYourReviews] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const yourCurrentPosts = yourReviews.slice(firstPostIndex, lastPostIndex);
  const otherCurrentPosts = reviews.slice(firstPostIndex, lastPostIndex);

  const nextPage = () => {
    if (yourReviews[postsPerPage * currentPage ] != undefined) {
      setCurrentPage(currentPage + 1);
      return true;
    }
    return false;
  };

  const prevPage = () => {
    if (yourReviews[postsPerPage * currentPage - 6] != undefined) {
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
  
  return (
    <React.Fragment>
      <Reviews reviews={yourReviews} owner={"Your reviews"} user_id={props.user_id} />
      <Reviews reviews={reviews} owner={"Others reviews"} user_id={props.user_id} />
    </React.Fragment>
  );
};
export default AllReviews;
