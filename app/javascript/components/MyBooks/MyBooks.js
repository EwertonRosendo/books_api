import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./CreateBookModal";
import CreateReview from "../Review/CreateReviewModal";
import ShowBookModal from "../MyBooks/ShowBookModal";

const MyBooks = (props) => {
  const baseURL = "http://localhost:3000/Books.json";
  const [myBooks, setMyBooks] = useState([]);
  const [cover, setCover] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = myBooks.slice(firstPostIndex, lastPostIndex);
  const nextPage = () => {
    if (myBooks[postsPerPage * currentPage ] != undefined) {
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

  const allMyBooks = currentPosts.map((book, index) => {
    book = book.attributes;
    return (
      <div key={index} className="box">
        <div className="book-box">
          <div className="book-title-img">
            <img
              src={book.cover_url ? book.cover_url : book.url_image}
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
            <ShowBookModal
              book={book}
              cover={book.cover_url ? book.cover_url : book.url_image}
            />
            <CreateReview
              book={book}
              cover={book.cover_url ? book.cover_url : book.url_image}
            />
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
    );
  });
  return (
    <React.Fragment>
      <Modal />
      <div className="main">
        <div className="body">{allMyBooks}</div>
      </div>
      <div className="pagination-box">
        <div className="pagination">
          {prevPage ? <button onClick={prevPage}>Prev</button> : <></>}
          <p>
            {currentPage}..{Math.ceil(myBooks.length / 10)}
          </p>
          {nextPage ? <button onClick={nextPage}>Next</button> : <></>}
        </div>
      </div>
    </React.Fragment>
  );
};
export default MyBooks;
