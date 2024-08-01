import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateBook from "./CreateBook";

const MyBooks = (props) => {
  const baseURL = "http://localhost:3000/Books.json";
  const [myBooks, setMyBooks] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = myBooks.slice(firstPostIndex, lastPostIndex);

  const nextPage = () => {
    if (myBooks[postsPerPage * currentPage + 1] != undefined) {
      setCurrentPage(currentPage + 1);
      return true;
    }
    return false;
  };

  const prevPage = () => {
    if (myBooks[postsPerPage * currentPage - 10] != undefined) {
      setCurrentPage(currentPage - 1);
      return true;
    }
    return false;
  };

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setMyBooks(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const allMyBooks = currentPosts.map((book, index) => (
    <div key={index} className="box">
      <div className="book-box">
        <div className="book-title-img">
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
            {
              <p className="title">
                {book.title.split(" ").length < 13
                  ? book.title
                  : book.title.split(" ").slice(0, 13).join(" ") + ".."}
              </p>
            }
          <p>
            {book.description
              ? book.description.split(" ").slice(0, 5).join(" ")
              : ""}{" "}
          </p>
          <p>
            <a href={`http://localhost:3000/Books/${book.id}`}>Show details</a>
          </p>
          <p>
            <a href={`http://localhost:3000/Books/${book.id}/reviews/new`}>
              Create Review
            </a>
          </p>
          <p>
            {book.published_at
              ? "Published at " + book.published_at
              : "No Published date"}
          </p>
          <p>
            {book.publisher
              ? "Published by " + book.publisher
              : "No publisher registered"}
          </p>
        </div>
      </div>
    </div>
  ));
  return (
    <React.Fragment>
      <div className="pagination-box">
        <div className="pagination">
          {prevPage ? <button onClick={prevPage}>Prev</button> : <></>}
          <p>{currentPage}..{Math.ceil(myBooks.length / 10)}</p>
          {nextPage ? <button onClick={nextPage}>Next</button> : <></>}
        </div>
      </div>
      <div className="body">
        <CreateBook />
        {allMyBooks}
      </div>
    </React.Fragment>
  );
};
export default MyBooks;
