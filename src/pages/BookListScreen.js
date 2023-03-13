import React, { useEffect, useState } from "react";
import BookList from "../components/books/BookList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function BookListScreen() {
  const booksCollection = collection(db, "books");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const data = await getDocs(booksCollection);
      setBooks(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getBooks();
  }, [booksCollection]);

  return <BookList Books={books} />;
}

export default BookListScreen;
