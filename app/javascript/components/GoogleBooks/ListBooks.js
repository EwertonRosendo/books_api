import React from "react";
import axios from "axios";

const ListBooks = (props) => {
  const handleAddGoogleBook = (book) => {
    axios
      .post(
        "http://localhost:3000/Books/",
        {
          title: book.title,
          publisher: book.publisher,
          published_at: book.publishedDate,
          description: "" + book.subtitle ? book.subtitle : book.description,
          author: book.authors,
          url_image: book.thumbnail,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": document.querySelector("meta[name='csrf-token']")
              .content,
          },
        },
      )
      .catch((e) => console.log(e));
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
    </React.Fragment>
  );
};
export default ListBooks;
