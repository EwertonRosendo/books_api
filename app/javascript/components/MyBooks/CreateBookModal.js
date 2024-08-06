import React, { useState } from "react";
import axios from "axios";
import {
  FontSizeOutlined,
} from "@ant-design/icons";
import { TiPencil } from "react-icons/ti";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { LuTextSelect } from "react-icons/lu";
import { MdOutlineFileUpload } from "react-icons/md";

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState();

  function handleInputChange(event) {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  }
  const handleAddBook = () => {
    axios
      .post(
        "http://localhost:3000/Books/",
        {
          book: formData,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "X-CSRF-Token": document.querySelector("meta[name='csrf-token']")
              .content,
          },
        },
      )
      .then((response) => {
        if (response.status == 201) {
          toggleModal()
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
              <div className="left-inputs">
                <div>
                  <p>
                    <FontSizeOutlined /> Title
                  </p>
                  <input
                    id="title"
                    type="text"
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
                    onChange={handleInputChange}
                    placeholder={"Published at.."}
                  />
                </div>
                <div>
                  <p>
                    <MdOutlineAddPhotoAlternate /> Cover
                  </p>
                  <input
                    id="url_image"
                    type="text"
                    onChange={handleInputChange}
                    placeholder={"Book's image.."}
                  />
                </div>
                <div className="input-file">
                  <label for="cover">
                    <MdOutlineFileUpload fontSize={"40px"} color="#A76657" />
                  </label>
                  <label for="cover">Drop a file or click to upload</label>
                  <input
                    onChange={handleInputChange}
                    type="file"
                    name="cover"
                    id="cover"
                    accept="image/png, image/jpeg"
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
                  type="text"
                  onChange={handleInputChange}
                  placeholder={"Book description.."}
                  name=""
                ></textarea>
              </div>
            </div>
            <div className="add-cancel-button">
              <button className="cancel-button" onClick={toggleModal}>
                Cancel
              </button>
              <button className="add-button" onClick={handleAddBook}>
                Add Book
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
