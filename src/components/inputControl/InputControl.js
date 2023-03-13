import React from "react";
import classes from "./InputControl.module.css";

function InputControl(props) {
  return (
    <div className={classes.container}>
      {props.label && <label> {props.label}</label>}
      <input {...props} />
    </div>
  );
}

export default InputControl;
