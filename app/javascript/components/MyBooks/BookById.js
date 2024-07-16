import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const BookById = (props) => {
<<<<<<< HEAD
<<<<<<< HEAD

  const baseURL = `http://localhost:3000/Books/${props.user_id}.json` 
  const [book, setBook] = useState([])
  const [author, setAuthor] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [newAuthor, setNewAuthor] = useState("")
  const [publisher, setPublisher] = useState("")
  const [published_at, setPublished_at] = useState()
  const [url_image, setUrlImage] = useState("")
=======
=======
>>>>>>> authentication_without_devise
  const baseURL = `http://localhost:3000/Book/${props.id}.json`;
  const [book, setBook] = useState([]);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [published_at, setPublished_at] = useState();
  const [url_image, setUrlImage] = useState("");
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> authentication_without_devise

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
      })

      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    if (book && book.author_id) {
      author_name(book.author_id);
    }
  }, [book]);

  const author_name = (id) => {
    axios
      .get(`http://localhost:3000/Author/${id}`)
      .then((response) => {
        setAuthor(response.data);
      })
      .catch((e) => console.log(e));
  };

<<<<<<< HEAD
  const update_book = () =>{
    axios.put(`http://localhost:3000/Books/${book.id}`, {
      "title":title,
      "publisher":publisher,
      "published_at":published_at,
      "description":description,
      "author":newAuthor,
      "url_image":url_image,
    },
    {
      headers:{
          "Content-Type": "application/json",
          "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content
      }
    });
  }
=======
  const update_book = () => {
    axios.put(
      `http://localhost:3000/Book/${book.id}`,
      {
        title: title,
        publisher: publisher,
        published_at: published_at,
        description: description,
        author: newAuthor,
        url_image: url_image,
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
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> authentication_without_devise

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
              <label>image:</label>
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
              <label>Title:</label>
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
              <label>Author:</label>
              <input
                type="text"
                onChange={(e) => {
                  setNewAuthor(e.target.value);
                }}
                defaultValue={author.name}
                placeholder={"Author.."}
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
              />
            </div>
            <div className="descrip">
              <label>Description:</label>
              <textarea
                className="description"
                type="text"
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                defaultValue={book.description}
                placeholder={"Book description.."}
                name=""
                id=""
              ></textarea>
            </div>
          </div>
        </div>
        <div className="buttons-area">
          <button className="delete" onClick={delete_book}>
            {" "}
            Delete this book
          </button>
          <button className="update" onClick={update_book}>
            {" "}
            Update this book
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
BookById.propTypes = {
<<<<<<< HEAD
<<<<<<< HEAD
  user_id: PropTypes.number
=======
  id: PropTypes.string,
>>>>>>> main
=======
  id: PropTypes.string,
>>>>>>> authentication_without_devise
};
export default BookById;
