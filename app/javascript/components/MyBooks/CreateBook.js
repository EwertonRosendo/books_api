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
        if (response.status == 200) {
          window.location.reload();
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <React.Fragment>
      <div className="create-book-container">
        <div className="img">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9EmBWYMBW5T3wan5z8COkJAT8brrG8ojCQ&s"
            }
            alt=""
          />
        </div>
        <div>
          <input
            id="title"
            type="text"
            onChange={handleInputChange}
            placeholder={"Book title.."}
          />
        </div>
        <div>
          <input
            id="author"
            type="text"
            onChange={handleInputChange}
            placeholder={"Author.."}
          />
        </div>
        <div>
          <input
            id="publisher"
            type="text"
            onChange={handleInputChange}
            placeholder={"Publisher.."}
          />
        </div>
        <div>
          <input
            id="published_at"
            type="date"
            onChange={handleInputChange}
            placeholder={"Published at.."}
          />
        </div>
        <div>
          <input
            id="url_image"
            type="text"
            onChange={handleInputChange}
            placeholder={"Book's image.."}
          />
        </div>
        <div className="descrip">
          <textarea
            id="description"
            className="description"
            type="text"
            onChange={handleInputChange}
            placeholder={"Book description.."}
            name=""
          ></textarea>
        </div>
        <div>
          <button onClick={handleAddBook}> Add Book</button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CreateBook;
