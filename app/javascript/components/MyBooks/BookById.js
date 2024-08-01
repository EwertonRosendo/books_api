import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const BookById = (props) => {
  const baseURL = `http://localhost:3000/Books/${props.id}.json`;
  const [book, setBook] = useState([]);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [published_at, setPublished_at] = useState();
  const [url_image, setUrlImage] = useState("");

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setBook(response.data);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setPublisher(response.data.publisher);
        setPublished_at(response.data.published_at);
        setUrlImage(response.data.url_image);
        setAuthor(response.data.author.name)
      })
      .catch((e) => console.log(e));
  }, []);


  return (
    <React.Fragment>
      <div className="body">
        <div className="box">
          <div className="book-img">
            <img
              src={
                book.url_image
                  ? book.url_image
                  : "https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg"
              }
              alt={`${book.title} image`}
              className="bookImage"
            />
            <div>
              <label>image link:</label>
              <input
                type="text"
                onChange={(e) => {
                  setUrlImage(e.target.value);
                }}
                placeholder={book.url_image}
                readOnly
              />
            </div>
          </div>

          <div className="book-info">
            <div>
              <label>Title:</label>
              <input
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                defaultValue={book.title}
                placeholder={"Book title.."}
                readOnly
              />
            </div>
            <div>
              <label>Author:</label>
              <input
                type="text"
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
                defaultValue={author}
                placeholder={"Author.."}
                readOnly
              />
            </div>
            <div>
              <label>Publisher:</label>
              <input
                type="text"
                onChange={(e) => {
                  setPublisher(e.target.value);
                }}
                defaultValue={book.publisher}
                placeholder={"Publisher.."}
                readOnly
              />
            </div>
            <div>
              <label>Published_at:</label>
              <input
                type="text"
                onChange={(e) => {
                  setPublished_at(e.target.value);
                }}
                defaultValue={book.published_at}
                placeholder={"Published at.."}
                readOnly
              />
            </div>
            <div className="descrip">
              <label>Description:</label>
              <textarea
                className="description"
                type="text"
                rows={4}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                defaultValue={book.description}
                placeholder={"Book description.."}
                name=""
                id=""
                readOnly
              ></textarea>
            </div>
          </div>
        </div>
        <div className="edit-button">
          <a href={`http://localhost:3000/Books/${book.id}/edit`}>Edit this book</a>
        </div>
      </div>
    </React.Fragment>
  );
};
BookById.propTypes = {
  id: PropTypes.string,
};
export default BookById;
