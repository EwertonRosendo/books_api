import React, { useState, useEffect } from "react";

import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";

import { MdOutlineFileUpload } from "react-icons/md";

import PropTypes from "prop-types";
import axios from "axios";

const BookById = (props) => {
  const baseURL = `http://localhost:3000/Books/${props.id}.json`;
  const [book, setBook] = useState([]);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState();
  const [publisher, setPublisher] = useState("");
  const [published_at, setPublished_at] = useState();
  const [url_image, setUrlImage] = useState("");
  const [image_file, setImageFile] = useState();

  useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setId(response.data.book.id);
        setBook(response.data.book);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setPublisher(response.data.publisher);
        setPublished_at(response.data.published_at);
        setUrlImage(response.data.url_image);
        setAuthor(response.data.book.author.name);
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
            <DeleteModal book={book} title={book.title} />
            <div>
              <label>image link:</label>
              <input
                type="text"
                onChange={(e) => {
                  setUrlImage(e.target.value);
                }}
                placeholder={book.url_image}
              />
            </div>
          </div>

          <div className="book-info">
            <div>
              <label>Title</label>
              <input
                type="text"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                defaultValue={book.title}
                placeholder={"Book title.."}
              />
            </div>
            <div>
              <label>Author</label>
              <input
                type="text"
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
                defaultValue={author}
                placeholder={"Author.."}
              />
            </div>
            <div>
              <label>Publisher</label>
              <input
                type="text"
                onChange={(e) => {
                  setPublisher(e.target.value);
                }}
                defaultValue={book.publisher}
                placeholder={"Publisher.."}
              />
            </div>
            <div>
              <label>Published_at</label>
              <input
                type="text"
                onChange={(e) => {
                  setPublished_at(e.target.value);
                }}
                defaultValue={book.published_at}
                placeholder={"Published at.."}
              />
            </div>
            <div className="descrip">
              <label>Description</label>
              <textarea
                className="description"
                type="text"
                rows={4}
                cols={33}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                defaultValue={book.description}
                placeholder={"Book description.."}
                name=""
                id=""
              ></textarea>
            </div>
            <div className="input-file">
              <label for="file">
                <MdOutlineFileUpload fontSize={"40px"} color="#A76657" />
              </label>
              <label for="file">Drop a file or click to upload</label>
              <input
                onChange={(e) => {
                  setImageFile(e.target.value);
                }}
                type="file"
                name="file"
                id="file"
                accept="image/png, image/jpeg"
              />
            </div>

            <UpdateModal
              id={id}
              title={book.title}
              publisher={publisher}
              published_at={published_at}
              description={description}
              author={author}
              url_image={url_image}
              image_file={image_file}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
BookById.propTypes = {
  id: PropTypes.string,
};
export default BookById;
