import React, { useState } from "react";
import axios from "axios";

const CreateBook = (props) => {
  const [formData, setFormData] = useState();

  function handleInputChange(event) {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  }
  const handleAddBook = () => {
    axios
      .post(
        "http://localhost:3000/Books/",
        {
          book: formData,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": document.querySelector("meta[name='csrf-token']")
              .content,
          },
        },
      )
      .then((response) => {
        if (response.status === 200) {
          window.location.reload();
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <React.Fragment>
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
