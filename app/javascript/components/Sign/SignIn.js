import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import axios from "axios";

const SignIn = (props) => {
  const [formData, setFormData] = useState();
  function handleInputChange(event) {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  }

  const handleSignIn = () => {
    axios
      .post("http://localhost:3000/sign_in", formData, {
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": document.querySelector("meta[name='csrf-token']")
            .content,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          window.location.replace("http://localhost:3000/Googlebooks");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <React.Fragment>
      <div className="box">
        <div className="login">
          <p>Sign In here!</p>

          <div className="input email">
            <img
              role="img"
              src={
                "https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-cartoon-unbuttoned-book-image_1321550.jpg"
              }
              alt=""
            />
          </div>

          <div className="input email">
            <label htmlFor="">Email</label>
            <input
              role="input"
              id="email"
              type="email"
              placeholder="exemple@gmail.com.."
              onChange={handleInputChange}
            />
          </div>

          <div className="input password">
            <label htmlFor="">Password</label>
            <input
              role="input"
              id="password"
              type="password"
              placeholder="Your password.."
              onChange={handleInputChange}
            />
            <p>
              <a href="#">Did you forget your password?</a>
            </p>
          </div>

          <div className="buttons">
            <button onClick={handleSignIn} className="in">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default SignIn;
