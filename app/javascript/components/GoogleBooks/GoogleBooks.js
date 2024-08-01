import React, { useState, useEffect } from "react";
import SearchBook from "./SearchBook";
import ListBook from "./ListBooks";
import PreLoader from "./PreLoader";

const GoogleBooks = (props) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    //const url = "http://34.195.216.47:3000/google-books/ruby";
    const url = "http://localhost:3000/Googlebooks.json";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((res) => setBooks(res));
  }, []);

  return (
    <React.Fragment>
      {/*<PreLoader />*/}
      <SearchBook booksList={setBooks} />
      <ListBook books={books} />
    </React.Fragment>
  );
};
export default GoogleBooks;
