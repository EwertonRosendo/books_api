import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import axios from 'axios';

const SignUp = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  
  const handleSignUpClick = () => {
    axios.post("http://localhost:3000/users/new", {
        "name":name,
        "email":email,
        "password":password,
        "password_confirmation":passwordConfirm,
    },
{
    headers:{
        "Content-Type": "application/json",
        "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content
}})
}

const handleSignInClick = () => {
  axios.get("http://localhost:3000/users/change/page")
}

  return (
    <React.Fragment>
         <div className="box">
          <div className="login">
            <p>Sign Up here!</p>
            <div className="input name">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Your name.." onChange={(e) => {setName(e.target.value)}} />
            </div>
            <div className="input email">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="exemple@gmail.com.." onChange={(e) => {setEmail(e.target.value)}} />
            </div>

            <div className="input password">
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Your password.." onChange={(e) => {setPassword(e.target.value)}}/>
            </div>

            <div className="input password">
              <label htmlFor="">Password Confirmation</label>
              <input type="password" placeholder="Confirm your password.." onChange={(e) => {setPasswordConfirm(e.target.value)}} />
            </div>

            <div className="buttons">
              <button className="in" onClick={handleSignInClick}>Sign In</button>
              <button className="up" onClick={handleSignUpClick} >Sign up</button>
            </div>
          </div>
         </div>
    </React.Fragment>
  )
}

export default SignUp
