import React from "react";
function Card(props) {
  return (
    <div className="container-fluid">
      <div className="row text-center justify-content-evenly mt-2">
        <div className="col-10 col-md-6 bg-white rounded mt-5 mt-md-2 mb-4">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Card;
