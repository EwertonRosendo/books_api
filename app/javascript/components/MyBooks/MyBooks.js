import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateBook from "./CreateBook"

const MyBooks = (props) => {
  
  const baseURL = "http://localhost:3000/Books.json" 
  const [myBooks, setMyBooks] = useState([])

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = myBooks.slice(firstPostIndex, lastPostIndex);

  const nextPage = () => {
    if(myBooks[(postsPerPage*currentPage) +1] != undefined){
      setCurrentPage(currentPage+1)
      return true
    }
    return false
  };

  const prevPage = () => {
    if(myBooks[(postsPerPage*currentPage) -10] != undefined){
      setCurrentPage(currentPage-1)
      return true
    }
    return false
  };

   useEffect(() => {
    axios.get(baseURL)
    .then((response) => {
      setMyBooks(response.data);
    })
    .catch((e) => console.log(e));
    }, []);
  
    const allMyBooks = currentPosts.map((book, index) => (
      <div key={index} className="box">
        <div className="book-box">
            <div className="book-title-img">
                <img
                    src={book.url_image ? book.url_image : "https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg"}
                    alt={`${book.title} image`}
                    className="bookImage"
                />
            </div>
            <div className="book-info">
                <p className="title">{ book["title"]}</p>
                <p>{book["description"]}</p>
                <p><a href={`http://localhost:3000/Book/${book["id"]}`}>Show details</a></p>
                <p>Published at {book["published_at"]}</p>
                <p>Published by {book["publisher"]}</p>
            </div>
        </div>
      </div>
    ));
  return (
    <React.Fragment>
      <CreateBook/>
      <div className="pagination-box">
        <div className="pagination">
          { prevPage ? <button onClick={prevPage}>anterior</button> : <></> }
          <p>{currentPage}</p>
          { nextPage ? <button onClick={nextPage}>proximo</button> : <></> }
        </div>
      </div>
      <div className="body">
        {allMyBooks}
      </div>
    </React.Fragment>
  )
};
export default MyBooks
