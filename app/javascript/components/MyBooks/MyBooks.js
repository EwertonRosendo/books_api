import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateBook from "./CreateBook";

const CreateBook = (props) => {
  const [formData, setFormData] = useState();
  const [isOk, setIsOk] = useState(true);

  function handleInputChange(event) {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  }

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
          <p className="title">{book["title"]}</p>
          <p>{book["description"]}</p>
          <p>
            <a href={`http://localhost:3000/Book/${book["id"]}`}>
              Show details
            </a>
          </p>
          <p>Published at {book["published_at"]}</p>
          <p>Published by {book["publisher"]}</p>
        </div>
      </div>
    );
  };

  const handleAddBook = () => {
    if (
      !(
        title &&
        description &&
        author &&
        publisher &&
        published_at &&
        url_image
      )
    ) {
      return setIsOk(false);
    }
    setIsOk(true);
    axios.post(
      "http://localhost:3000/Book/create",
      {
        formData,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": document.querySelector("meta[name='csrf-token']")
            .content,
        },
      },
    );
  };

  return (
    <React.Fragment>
      {isOk ? <></> : wrongField()}
      <div className="create-book-container">
        <div>
          <label>Title:</label>
          <input
            id="title"
            type="text"
            onChange={handleInputChange}
            placeholder={"Book title.."}
          />
        </div>
        <div>
          <label>Author:</label>
          <input
            id="author"
            type="text"
            onChange={handleInputChange}
            placeholder={"Author.."}
          />
        </div>
        <div>
          <label>Publisher:</label>
          <input
            id="publisher"
            type="text"
            onChange={handleInputChange}
            placeholder={"Publisher.."}
          />
        </div>
        <div>
          <label>Published_at:</label>
          <input
            id="published_at"
            type="date"
            onChange={handleInputChange}
            placeholder={"Published at.."}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            id="url_image"
            type="text"
            onChange={handleInputChange}
            placeholder={"Book's image.."}
          />
        </div>
        <div className="descrip">
          <label>Description:</label>
          <textarea
            id="description"
            className="description"
            type="text"
            onChange={handleInputChange}
            placeholder={"Book description.."}
            name=""
          ></textarea>
        </div>
        <button onClick={handleAddBook}> Add Book</button>
      </div>
    </React.Fragment>
  );
};
export default MyBooks;
