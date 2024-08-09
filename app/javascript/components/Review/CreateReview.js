import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateReview = (props) => {
  const [book, setBook] = useState({});
  const [ratings, setRatings] = useState([1, 2, 3, 4, 5]);
  const [formData, setFormData] = useState();
  const [cover, setCover] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/Books/${props.book_id}.json`)
      .then((response) => {
        setBook(response.data.book);
        setCover(
          response.data.cover.cover_url
            ? response.data.cover.cover_url
            : response.data.book.url_image,
        );
      })
      .catch((e) => console.log(e));
  }, []);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      book: book,
      review: {
        cover_url: cover,
      },
      [id]: value,
    });
  };
  const restartAnimation = () => {
    const checkmark = document.querySelector(".success-checkmark");
    checkmark.style.display = "none";
    setTimeout(() => {
      checkmark.style.display = "block";
    }, 10);
  };
  const postReview = () => {
    axios
      .post(
        `http://localhost:3000/Books/${props.user_id}/reviews.json`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-CSRF-Token": document.querySelector("meta[name='csrf-token']")
              .content,
          },
        },
      )
      .then((response) => {
        if (response.status == 200) {
          document.querySelector(".success-checkmark").style.display = "block";
          setTimeout(() => {
            document.querySelector(".success-checkmark").style.display = "none";
            window.location.replace("http://localhost:3000/reviews");
          }, 3000);
        }
      });
  };

  const handleRatings = ratings.map((rating, index) => {
    return (
      <option key={index} value={rating}>
        {rating}
      </option>
    );
  });

  return (
    <React.Fragment>
      <div className="content">
        <div className="review">
          <div className="book-image">
            <img src={cover} alt="" height={"200px"} />
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
        <div className="review-text">
          <textarea id="book_opinion" onChange={handleInputChange}></textarea>
          <button className="post-review" onClick={postReview}>
            Post review
          </button>
        </div>

        <div className="success-checkmark" style={{ display: "none" }}>
          <div className="check-icon">
            <span className="icon-line line-tip"></span>
            <span className="icon-line line-long"></span>
            <div className="icon-circle"></div>
            <div className="icon-fix"></div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateReview;
