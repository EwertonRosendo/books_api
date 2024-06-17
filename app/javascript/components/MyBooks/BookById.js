import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";


import axios from "axios";



const BookById = (props) => {
  

  const baseURL = `http://localhost:3000/Book/${props.id}` 
  const [book, setBook] = useState([])
  const [author, setAuthor] = useState("")

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [publisher, setPublisher] = useState("")
  const [published_at, setPublished_at] = useState()
  const [url_image, setUrlImage] = useState("")

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setBook(response.data);
      setTitle(response.data.title);
      setDescription(response.data.description);
      setPublisher(response.data.publisher);
      setPublished_at(response.data.published_at);
    });
  }, []);

  useEffect(() => {
    if (book && book.author_id) {
      author_name(book.author_id);
    }
  }, [book]);

  const author_name = (id) => {
    axios.get(`http://localhost:3000/Author/${id}`).then((response) => {
      setAuthor(response.data);
    });
  };

  const update_book = () =>{
    axios.put(`http://localhost:3000/Book/${book.id}`, {
      "title":title,
      "publisher":publisher,
      "published_at":published_at,
      "description":description,
      "author":author.name,
      "url_image":url_image,
    });
    
  }

  const delete_book = () =>{
    axios.delete(`http://localhost:3000/Book/${book.id}`)
    //window.location.replace('http://localhost:3000/app/Books');
  }

  return (
    <React.Fragment>

      <div className="body">
        <div className="box">
            
            <div className="book-img">
                <img
                        //src={book["thumbnail"]}
                        src={book.url_image ? book.url_image : "https://marketplace.canva.com/EAFPHUaBrFc/1/0/1003w/canva-black-and-white-modern-alone-story-book-cover-QHBKwQnsgzs.jpg"}
                        alt={`${book.title} image`}
                        className="bookImage"
                    />
                    <div>
                      <label>image:</label>
                      <input type="text" onChange={(e) => {setUrlImage(e.target.value)}} placeholder={book.url_image}/>
                    </div>  
            
            </div>

            <div className="book-info">
              <div>
                <label>Title:</label>
                <input type="text" onChange={(e) => {setTitle(e.target.value)}} defaultValue={book.title} placeholder={"Book title.."}/>
              </div>

              <div>
                <label>Author:</label>
                <input type="text" onChange={(e) => {setAuthor.name(e.target.value)}} defaultValue={author.name} placeholder={"Author.."}/>
              </div>

              <div>
                <label>Publisher:</label>
                <input type="text" onChange={(e) => {setPublisher(e.target.value)}} defaultValue={book.publisher} placeholder={"Publisher.."}/>
              </div>

              <div>
                <label>Published_at:</label>
                <input type="text" onChange={(e) => {setPublished_at(e.target.value)}} defaultValue={book.published_at} placeholder={"Published at.."}/>
              </div>

              <div className="descrip">
                <label>Description:</label>
                <textarea className="description" type="text" onChange={(e) => {setDescription(e.target.value)}} defaultValue={book.description} placeholder={"Book description.."} name="" id=""></textarea>
              </div>
              
            </div>
        </div>

        <div className="buttons-area">
          <button className="delete" onClick={delete_book}> Delete this book</button>
          <button className="update" onClick={update_book}> Update this book</button>
        </div>
      </div>
      
    </React.Fragment>
  )
}
BookById.propTypes = {
  id: PropTypes.string
};

export default BookById
