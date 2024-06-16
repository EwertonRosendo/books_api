import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Outlet, Link } from "react-router-dom";

const App = (props) => {
  

  const [test, setTest] = useState("TESTE");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/app/json";
    fetch(url)
    .then((res) => {
      if (res.ok){
        return res.json();
      }
      throw new Error("Network response was not ok.")
    })
    .then((res) => setBooks(res))
    //.catch((er)=> Navigate("/"));
  }, []);

  const allBooks = books.map((book, index) => (
    <div key={index} className="box">
  
        <div className="book-box">
            <div className="book-title-img">
                <img
                    src={book["thumbnail"]}
                    alt={`${book.title} image`}
                    className="bookImage"
                />
            </div>
            <div className="book-info">
                <p>{book["title"]}</p>
                <p>{book["subtitle"]}</p>
                <p>{book["publishedDate"]}</p>
                <p>{book["authors"]}</p>
                <p>{book["publisher"]}</p>
                
            </div>
        </div>
    </div>
    ));


  return (
    <React.Fragment>
      <a rel='noopener noreferrer' href="http://localhost:3000/app/Books">meus livros</a>
      <button onClick={()=> useNavigate("/app/Books")}>
        MAOE
      </button>
      Greeting: {props.greeting}
      <div className="body">
        {allBooks}
      </div>
    </React.Fragment>
  )
}

App.propTypes = {
  greeting: PropTypes.string
};

export default App
