import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateReview = (props) => {
  const [book, setBook] = useState({});
  const [ratings, setRatings] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [formData, setFormData] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Books/${props.book_id}.json`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      book: book,
      [id]: value,
    });
  };

  const postReview = () => {
    axios.post(
      `http://localhost:3000/Books/${props.user_id}/reviews.json`,
      formData,
    );
  };

  const handleRatings = ratings.map((rating, index) => {
    return <option value={rating}>{rating}</option>;
  });

  return (
    <React.Fragment>
      <div className="content">
        <div className="review">
          <div className="book-image">
            <img src={book.url_image} alt="" />
          </div>
          <div className="review-info">
            <p>{book.title}</p>
            <div>
              <select id="status" onChange={handleInputChange}>
                <option className="option" value="999">
                  Select your status
                </option>
                <option className="option" value="to_read">
                  To Read
                </option>
                <option className="option" value="reading">
                  Reading
                </option>
                <option className="option" value="read">
                  Read
                </option>
              </select>
            </div>
            <div>
              <select id="rating" onChange={handleInputChange}>
                <option value="999">Set your rating</option>
                {handleRatings}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="review-text">
        <textarea id="book_opinion" onChange={handleInputChange}></textarea>
      </div>
      <button className="post-review" onClick={postReview}>
        Post review
      </button>
    </React.Fragment>
  );
};

export default CreateReview;
