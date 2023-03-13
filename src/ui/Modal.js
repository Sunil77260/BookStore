import React from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";
const BackDrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={() => onClose()}></div>;
};

const ModalLayout = ({ children }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 col-md-12">
          <div className={`${classes.modal} p-5`}>
            <div className={`${classes.content} m-2`}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const layoverElement = document.getElementById("layover");

const Modal = (props) => {
  return (
    <>
      {createPortal(<BackDrop onClose={props.onClose} />, layoverElement)}
      {createPortal(
        <ModalLayout>{props.children}</ModalLayout>,
        layoverElement
      )}
    </>
  );
};

export default Modal;
