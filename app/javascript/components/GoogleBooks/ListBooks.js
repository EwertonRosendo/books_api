import React from "react";
import axios from "axios";

const ListBooks = (props) => {
    
    const handleAddGoogleBook = (book) => {
        axios.post("http://localhost:3000/Book/create", {
          "title": book.title,
          "publisher": book.publisher,
          "published_at": book.publishedDate,
          "description": (""+book.subtitle ? book.subtitle : book.description),
          "author": book.authors,
          "url_image": book.thumbnail,
        }, {
            headers:{
                "Content-Type": "application/json",
                "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content
            }}
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
                    <p className="title">{book["title"]}</p>
                    <p>{book["subtitle"] && book["subtitle"].slice(0, 20)}..</p>
                    <p>Author: {book["authors"] ? book["authors"] : "No author"}..</p>
                    <p>Published at {book["publishedDate"]}</p>
                    <p>Publisher: {book["publisher"]}</p>
                    <button onClick={() => handleAddGoogleBook(book)}>Add Book</button>
                </div>
            </div>
        </div>
        ));

  return (
    <React.Fragment>
      <div className="body">
        { props.books ? allBooks : <></> } 
      </div>
    </React.Fragment>
  )
}
export default ListBooks
