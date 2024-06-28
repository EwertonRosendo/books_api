import React, { useState, useEffect } from "react";
import SearchBook from "./SearchBook";
import ListBook from "./ListBooks";

const GoogleBooks = (props) => {
  
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/GoogleBooks.json";
    fetch(url)
    .then((res) => {
      if (res.ok){
        return res.json();
      }
      throw new Error("Network response was not ok.")
    })
    .then((res) => setBooks(res))
  }, []);

  return (
    <React.Fragment>
      <SearchBook booksList={setBooks} />
      <ListBook books={books} />
    </React.Fragment>
  )
}
export default GoogleBooks
