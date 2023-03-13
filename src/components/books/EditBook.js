import React, { useState } from "react";
import classes from "./EditBook.module.css";

import { useNavigate } from "react-router-dom";
import InputControl from "../inputControl/InputControl";
import Modal from "../../ui/Modal";

const EditBook = ({ book, onClose, updatedData }) => {
  const navigate = useNavigate();
  const [bookData, setBookData] = useState(book);

  const updatebookDataHandler = () => {
    updatedData(bookData);
    console.log("navigate");
    navigate("/books");
    onClose();
  };

  return (
    <Modal>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 g-5  m-3 text-center">
            <div className="row mb-2">
              <div className="col-12">
                <InputControl
                  label="Book-title"
                  type="text"
                  placeholder="Enter book title"
                  value={bookData.title}
                  onChange={(event) =>
                    setBookData({ ...bookData, title: event.target.value })
                  }
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12">
                <InputControl
                  label="image url"
                  type="url"
                  placeholder="Enter book image url"
                  value={bookData.url}
                  onChange={(event) => {
                    setBookData({ ...bookData, url: event.target.value });
                  }}
                />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-12">
                <label htmlFor="discription">Book discription</label>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12 px-2">
                <textarea
                  style={{ width: "100%" }}
                  id="discription"
                  placeholder="Enter book discription"
                  value={bookData.discription}
                  onChange={(event) => {
                    setBookData({
                      ...bookData,
                      discription: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12">
                <div className={classes.action}>
                  <button className={classes.cancel} onClick={() => onClose()}>
                    Cancel
                  </button>
                  <button
                    className={classes.add}
                    onClick={updatebookDataHandler}>
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditBook;
