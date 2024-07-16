import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import axios from "axios";

const SignIn = (props) => {
<<<<<<< HEAD
<<<<<<< HEAD

  const [formData, setFormData] = useState();
  function handleInputChange(event){
    const {id, value} = event.target;
    setFormData({
      ...formData,
      [id]: value
    })
  };

  const handleSignIn = () => {
    axios.post("http://localhost:3000/sign_in", formData, {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content
      }
    })
    .then((response) => {
      if (response.status === 200) {
        window.location.replace("http://localhost:3000/GoogleBooks");
      }
    })
    .catch((error) => console.error(error)
    );
  }
  
=======
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

>>>>>>> main
=======
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

>>>>>>> authentication_without_devise
  return (
    <React.Fragment>
      <div className="box">
        <div className="login">
          <p>Sign In here!</p>

<<<<<<< HEAD
<<<<<<< HEAD
            <div className="input email">
              <label htmlFor="">Email</label>
              <input id="email" type="email" placeholder="exemple@gmail.com.." onChange={handleInputChange} />
            </div>

            <div className="input password">
              <label htmlFor="">Password</label>
              <input id="password" type="password" placeholder="Your password.." onChange={handleInputChange}/>
              <p><a href="#">Did you forget your password?</a></p>
            </div>

            <div className="buttons">
              <button onClick={handleSignIn} className="in">Sign In</button>
              <button className="up">Sign up</button>
            </div>
          </div>
         </div>
    </React.Fragment>
  )
}
export default SignIn
=======
=======
>>>>>>> authentication_without_devise
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
<<<<<<< HEAD
>>>>>>> main
=======
>>>>>>> authentication_without_devise
