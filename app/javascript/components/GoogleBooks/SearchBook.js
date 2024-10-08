import React, { useState } from "react";
import axios from "axios";

const GoogleBooks = (props) => {
  const [title, setTitle] = useState("");
  const handleSeachTitle = () => {
    axios
      .get(`http://34.195.216.47:3000/google-books/${title}`)
      .then((response) => {
        props.booksList(response.data);
      })
      .catch((e) => {
        props.booksList([
          {
            title: "Books weren't found",
            thumbnail:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1f4C-cWV03_czRXhL1THkOdS9RDnAtPxRnA&s",
          },
        ]);
      });
  };

  return (
    <React.Fragment>
      <div className="search">
        <input
          type="search"
          placeholder={"Search book by title"}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <button onClick={handleSeachTitle}>Search</button>
      </div>
    </React.Fragment>
  );
};
export default GoogleBooks;
