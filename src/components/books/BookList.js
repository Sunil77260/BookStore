import React from "react";
import BookItem from "./BookItem";
function BookList({ Books }) {
  return (
    <div className="container-fluid">
      <div className="row text-center ">
        <div className="col-12">
          <ul>
            {Books?.map((book) => (
              <BookItem key={book.id} book={book} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BookList;
