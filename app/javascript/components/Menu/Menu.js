import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Menu = (props) => {
  //const [current_url, setCurrentPage] = useState(window.location.href)
  const logged_in = () => {
    if (props.user_id) {
      return <button onClick={handleLogOut}>Logout</button>;
    } else {
      return (
        <>
          <p>
            <a href={"http://localhost:3000/sign_in"}>Login</a>
          </p>
          <p>
            <a href={"http://localhost:3000/sign_up"}>Register</a>
          </p>
        </>
      );
    }
  };

  const handleLogOut = () => {
    axios.delete("http://localhost:3000/sign_out", {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": document.querySelector("meta[name='csrf-token']")
          .content,
      },
    });
  };

  return (
    <React.Fragment>
      <div className="menu">
        <div style={{ display: "flex" }}>
          <div>
            <p>
              {window.location.href.includes("Googlebooks") ? (
                <a
                  className="current-screen"
                  href={"http://localhost:3000/Googlebooks"}
                >
                  Google API
                </a>
              ) : (
                <a href={"http://localhost:3000/Googlebooks"}>Google API</a>
              )}
            </p>
          </div>
          <div>
            <p>
              {window.location.href.includes("reviews") ? (
                <a
                  className="current-screen"
                  href={"http://localhost:3000/reviews"}
                >
                  Reviews
                </a>
              ) : (
                <a href={"http://localhost:3000/reviews"}>Reviews</a>
              )}
            </p>
          </div>
          <div>
            <p>
              {window.location.href.includes("Books") ? (
                <a
                  className="current-screen"
                  href={"http://localhost:3000/Books"}
                >
                  Our Books
                </a>
              ) : (
                <a href={"http://localhost:3000/Books"}>Our Books</a>
              )}
            </p>
          </div>
        </div>
        <div style={{ display: "flex" }}>{logged_in()}</div>
      </div>
    </React.Fragment>
  );
};

export default Menu;
