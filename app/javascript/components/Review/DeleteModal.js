import React, { useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
export default function DeleteModal() {
  const [modal, setModal] = useState(false);

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
      <DeleteOutlined
        className="btn-modal"
        onClick={toggleModal}
        style={{ fontSize: "24px" }}
      />

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Delete this books!</h2>
            <p>
              You are about to delete the book "book". this will remove the book
              permanently.
            </p>
            <p>Are you sure you want to do this?</p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
