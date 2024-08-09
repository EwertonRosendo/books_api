import React, { useState } from "react";
import axios from "axios";
import { FontSizeOutlined } from "@ant-design/icons";
import { TiPencil } from "react-icons/ti";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { LuTextSelect } from "react-icons/lu";
import { MdOutlineFileUpload } from "react-icons/md";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publisher: "",
    published_at: "",
    url_image: "",
    description: "",
    cover: null,
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleFileChange = (event) => {
    setFormData({
      ...formData,
      cover: event.target.files[0],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(`book[${key}]`, formData[key]);
    }

    handleAddBook(data);
  };

  const handleAddBook = (data) => {
    axios
      .post("http://localhost:3000/Books/", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-CSRF-Token": document.querySelector("meta[name='csrf-token']")
            .content,
        },
      })
      .then((response) => {
        if (response.status === 201) {
          toggleModal();
          window.location.reload();
        }
      })
      .catch((e) => console.log(e));
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Create a new book
      </button>

      {modal && (
        <div className="modal modal-create">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Create or Add a Book!</h2>
            <div className="content">
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                <div
                  className="both-inputs"
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "100%",
                  }}
                >
                  <div className="left-inputs">
                    <div>
                      <p>
                        <FontSizeOutlined /> Title
                      </p>
                      <input
                        id="title"
                        type="text"
                        value={formData.title}
                        onChange={handleInputChange}
                        placeholder={"Book title.."}
                      />
                    </div>
                    <div>
                      <p>
                        <TiPencil /> Author
                      </p>
                      <input
                        id="author"
                        type="text"
                        value={formData.author}
                        onChange={handleInputChange}
                        placeholder={"Author.."}
                      />
                    </div>
                    <div>
                      <p>
                        <FaRegBuilding /> Publisher
                      </p>
                      <input
                        id="publisher"
                        type="text"
                        value={formData.publisher}
                        onChange={handleInputChange}
                        placeholder={"Publisher.."}
                      />
                    </div>
                    <div>
                      <p>
                        <FaRegCalendarAlt /> Published at
                      </p>
                      <input
                        id="published_at"
                        type="date"
                        value={formData.published_at}
                        onChange={handleInputChange}
                        placeholder={"Published at.."}
                      />
                    </div>
                    <br />
                    <div className="input-file">
                      <label htmlFor="cover">
                        <MdOutlineFileUpload
                          fontSize={"40px"}
                          color="#A76657"
                        />
                      </label>
                      <label htmlFor="cover">
                        Drop a file or click to upload
                      </label>
                      <input
                        type="file"
                        id="cover"
                        accept="image/png, image/jpeg"
                        onChange={handleFileChange}
                      />
                    </div>
                  </div>
                  <div className="descrip">
                    <p>
                      <LuTextSelect /> Description
                    </p>
                    <textarea
                      id="description"
                      className="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder={"Book description.."}
                    ></textarea>
                  </div>
                </div>
                <div className="add-cancel-button">
                  <button className="cancel-button" onClick={toggleModal}>
                    Cancel
                  </button>
                  <button type="submit" className="add-button">
                    Add Book
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
