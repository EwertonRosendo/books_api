import React, { useState, useEffect } from "react";
import axios from "axios";

const BookById = (props) => {
  const baseURL = `http://localhost:3000/Book/${props.id}.json`;
  const [book, setBook] = useState([]);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [published_at, setPublished_at] = useState();
  const [url_image, setUrlImage] = useState("");

  const wrongField = () => {
    return (
      <div className="wrong">
        <p>Some fields may be wrong, please check them and try again!</p>
      </div>
    );
  };

  const update_book = () => {
    axios.put(
      `http://localhost:3000/Book/${book.id}`,
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

  const delete_book = () => {
    axios.delete(`http://localhost:3000/Book/${book.id}`, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": document.querySelector("meta[name='csrf-token']")
          .content,
      },
    });
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
BookById.propTypes = {
  id: PropTypes.string,
};
export default BookById;
