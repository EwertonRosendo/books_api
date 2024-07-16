import React, { useState, useEffect } from "react";
import axios from "axios";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <React.Fragment>
      <div className="box">
        <div className="login">
          <p>Sign In here!</p>

          <div className="input email">
            <img
              src={
                "https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-cartoon-unbuttoned-book-image_1321550.jpg"
              }
              alt=""
            />
          </div>

          <div className="input email">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="exemple@gmail.com.."
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="input password">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Your password.."
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <p>
              <a href="#">Did you forget your password?</a>
            </p>
          </div>

          <div className="buttons">
            <button className="in">Sign In</button>
            <button className="up">Sign up</button>
          </div>
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

export default SignIn;
