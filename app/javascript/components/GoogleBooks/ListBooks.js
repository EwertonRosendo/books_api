import React, { useState } from "react";
import axios from "axios";
import ConfirmationModal from "./ConfirmationModal";

const ListBooks = (props) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddGoogleBook = (book) => {
    setSelectedBook(book);
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 2000);
  };  

  const confirmAddBook = () => {
    axios
      .post(
        "http://localhost:3000/Books/",
        {
          book: {
            title: selectedBook.title,
            publisher: selectedBook.publisher,
            published_at: selectedBook.publishedDate,
            description: "" + selectedBook.subtitle
              ? selectedBook.subtitle
              : selectedBook.description,
            author: selectedBook.authors,
            url_image: selectedBook.thumbnail,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": document.querySelector("meta[name='csrf-token']")
              .content,
          },
        }
      )
      .then(() => setShowModal(false))
      .catch((e) => console.log(e));
      window.location.reload()
  };

  const allBooks = props.books.map((book, index) => (
    <div key={index} className="box">
      <div className="book-box">
        <div className="book-title-img">
          <img
            src={book["thumbnail"]}
            alt={`${book.title} image`}
            className="bookImage"
          />
        </div>
        <div className="book-info">
          <p className="title">
            {book.title.split(" ").length > 6
              ? book.title.split(" ").slice(0, 6).join(" ") + ".."
              : book.title}
          </p>
          {book.subtitle ? (
            <p>
              {book.subtitle && book.subtitle.split(" ").slice(0, 6).join(" ")}
            </p>
          ) : (
            <></>
          )}
          <p>
            Author:{" "}
            {book.authors ? book.authors.slice(0, 1).join(" ") : "No author"}..
          </p>
          {book["publishedDate"] ? (
            <p>Published at {book["publishedDate"]}</p>
          ) : (
            <></>
          )}
          {book["publisher"] ? <p>Publisher: {book["publisher"]}</p> : <></>}
          <button onClick={() => handleAddGoogleBook(book)}>Add Book</button>
        </div>
      </div>
    </div>
  ));

  return (
    <React.Fragment>
      <div className="main">
        <div className="body">{props.books ? allBooks : <></>}</div>
      </div>
      {showModal && (
        <ConfirmationModal
          showModal={showModal}
          setShowModal={setShowModal}
          onConfirm={confirmAddBook()}
          message="Book added successfully :)"
        />
      )}
    </React.Fragment>
  );
};

export default ListBooks;
