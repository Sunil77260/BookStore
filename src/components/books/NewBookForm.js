import React, { useState } from "react";
import InputControl from "../inputControl/InputControl";
import classes from "./NewBookForm.module.css";
import Card from "../../ui/Card";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

//bootstrap import
import { Container, Row } from "react-bootstrap";

const NewBookForm = () => {
  const navigate = useNavigate();
  const bookCollection = collection(db, "books");
  const [bookData, setBookData] = useState({
    title: "",
    url: "",
    discription: "",
  });
  const [error, setError] = useState("");
  const bookDataHandler = async (event) => {
    event.preventDefault();

    try {
      if (bookData.title && bookData.url && bookData.discription) {
        await addDoc(bookCollection, bookData);
        navigate("/books");
      } else {
        setError("please enter all the book data");
      }
    } catch {
      //error handling
      setError("something went wrong");
    }

    // setError("");
    // console.log(bookData);
  };

  const cancelHandler = () => {
    navigate("/books");
  };

  return (
    <Container className={classes.card}>
      <Row>
        <Card>
          <form className={classes.form} onSubmit={bookDataHandler}>
            <InputControl
              label="Book-title"
              type="text"
              placeholder="Enter book title"
              onChange={(event) =>
                setBookData({ ...bookData, title: event.target.value })
              }
            />
            <InputControl
              label="image url"
              type="url"
              placeholder="Enter book image url"
              onChange={(event) => {
                setBookData({ ...bookData, url: event.target.value });
              }}
            />
            <label htmlFor="discription">Book discription</label>
            <textarea
              id="discription"
              style={{ padding: "10px" }}
              placeholder="Enter book discription"
              onChange={(event) => {
                setBookData({ ...bookData, discription: event.target.value });
              }}
            />
            <p style={{ color: "red" }}>{error}</p>
            <div className={`${classes.action} gap-3`}>
              <button
                type="button"
                className={classes.cancel}
                onClick={cancelHandler}>
                Cancel
              </button>
              <button className={classes.add}>Add</button>
            </div>
          </form>
        </Card>
      </Row>
    </Container>
  );
};

export default NewBookForm;
