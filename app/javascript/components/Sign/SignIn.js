import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

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
      </div>
    </React.Fragment>
  );
};
export default SignIn;
