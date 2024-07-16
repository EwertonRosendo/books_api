import React, { useState, useEffect } from "react";
import axios from "axios";

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

  const wrongField = () => {
    return (
      <div className="wrong">
        <p>Some fields may be wrong, please check them and try again!</p>
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
export default CreateBook;
