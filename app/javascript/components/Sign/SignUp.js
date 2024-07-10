import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import axios from "axios";

const SignUp = (props) => {
  const [formData, setFormData] = useState();
  function handleInputChange(event) {
    const { id, value } = event.target;

    setFormData({
      ...formData,
      [id]: value,
    });
  }

  const handleSignUpClick = () => {
    axios.post("http://localhost:3000/users/create", formData, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": document.querySelector("meta[name='csrf-token']")
          .content,
      },
    });
  };

  const handleSignInClick = () => {
    axios.get("http://localhost:3000/users/change/page");
  };

  return (
    <React.Fragment>
      <div className="box">
        <div className="login">
          <p>Sign Up here!</p>
          <div className="input name">
            <label htmlFor="">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name.."
              onChange={handleInputChange}
            />
          </div>
          <div className="input email">
            <label htmlFor="">Email</label>
            <input
              id="email"
              type="email"
              placeholder="exemple@gmail.com.."
              onChange={handleInputChange}
            />
          </div>

          <div className="input password">
            <label htmlFor="">Password</label>
            <input
              id="password"
              type="text"
              placeholder="Your password.."
              onChange={handleInputChange}
            />
          </div>

          <div className="input password">
            <label htmlFor="">Password Confirmation</label>
            <input
              id="password_confirmation"
              type="text"
              placeholder="Confirm your password.."
              onChange={handleInputChange}
            />
          </div>

          <div className="buttons">
            <button className="in" onClick={handleSignInClick}>
              Sign In
            </button>
            <button className="up" onClick={handleSignUpClick}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUp;
