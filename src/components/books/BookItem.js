import React, { useState } from "react";
import Card from "../../ui/Card";
import classes from "./BookItem.module.css";
import { useNavigate } from "react-router-dom";

import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import EditBook from "./EditBook";

function BookItem({ book }) {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const dataUpdater = async (data) => {
    const id = data.id;
    const userDoc = doc(db, "books", id);

    await updateDoc(userDoc, data);
    navigate("/books");
  };

  const showModalHander = () => {
    setShowModal(true);

    console.log("update function called");
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const deleteHandler = async (id) => {
    alert("Do you want to delete");

    const userDoc = doc(db, "books", id);
    await deleteDoc(userDoc);
  };

  return (
    <>
      {showModal && (
        <EditBook book={book} onClose={closeModal} updatedData={dataUpdater} />
      )}
      <li>
        <Card>
          <div className="container-fluid">
            <div className="row text-center mb-3 mb-md-5 mt-1 mt-md-3">
              <div className="col-12">
                <h1 className={classes.title}>{book.title}</h1>

                <div className="row">
                  <div className="col-12">
                    <div className={classes.image}>
                      <img className="img-fluid" src={book.url} alt="book" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <p className={classes.description}>{book.discription}</p>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-12">
                    <div className="row justify-content-evenly">
                      <div className="col-4 col-md-6">
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteHandler(book.id)}>
                          Delete
                        </button>
                      </div>
                      <div className="col-4 col-md-6">
                        <button
                          type="button"
                          class="btn btn-primary"
                          onClick={showModalHander}>
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </li>
    </>
  );
}

export default BookItem;
