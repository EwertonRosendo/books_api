import React, { useState, useEffect } from "react";
import axios from "axios";

const ReviewById = (props) => {
  const [review, setReview] = useState({});
  const [book, setBook] = useState({});
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const postComment = () => {
    axios
      .post(`http://localhost:3000/reviews/${props.id}/comments`, {
        content: comment,
        likes: 0,
        review_id: props.id,
      })
      .then((response) => {
        if (response.status === 200) {
          location.reload();
        }
      });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/reviews/${props.id}.json`)
      .then((response) => {
        setUser(response.data.user);
        setReview(response.data);
        setBook(response.data.book);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/reviews/${props.id}/comments`)
      .then((response) => {
        setComments(response.data);
      })
      .catch((e) => console.log(e));
  }, []);

  const commentsComponent = comments.map((comment, index) => (
    <div key={comment.id}>
      <div className="comment">
        <div className="comment-info">
          <p>{comment.user.name}</p>
          <p>{Date(comment.created_at, "ddMMyyyy")}</p>
        </div>
        <div className="comment-content">
          <p>{comment.content}</p>
        </div>
      </div>
    </div>
  ));
  return (
    <React.Fragment>
      <div className="content-review">
        <div className="book-image">
          <img src={book.url_image} alt="" />
        </div>
        <div>
          <p>{book.title}</p>
          <p>{user.name}</p>
          <p>Status: {review.status}</p>
          <p>Rating: {review.rating}</p>
        </div>
      </div>
      <div className="opinion">
        <p>{review.book_opinion}</p>
      </div>
      <div className="comments">
        <div className="comment-now">
          <textarea
            name=""
            id=""
            onChange={(e) => setComment(e.target.value)}
            placeholder="type your comment here.."
          ></textarea>
          <button onClick={postComment}>Sent</button>
        </div>
        {commentsComponent}
      </div>
    </React.Fragment>
  );
};
export default ReviewById;
