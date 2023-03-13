import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputControl from "../inputControl/InputControl";
import classes from "./Login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

import Card from "../../ui/Card";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [disableSumbit, setDisableSubmit] = useState(false);

  const loginHandler = () => {
    if (!values.email || !values.password) {
      setError("Please enter all the fields");
      return;
    }

    setDisableSubmit(true);
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        setDisableSubmit(false);

        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });

    setError("");
  };
  return (
    <Card>
      <div className="p-3">
        <h2 className="bold my-4">Login</h2>
        <InputControl
          type="email"
          label="Email"
          placeholder="Enter Email ID"
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              email: event.target.value,
            }))
          }
        />
        <InputControl
          type="password"
          label="Password"
          placeholder="Enter Password"
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              password: event.target.value,
            }))
          }
        />

        <div className={classes.footer}>
          <b className={classes.error}>{error}</b>
          <button onClick={loginHandler} disabled={disableSumbit}>
            Login
          </button>
          <p>
            Don't have account ?
            <span>
              <Link to="/singup">SignUp</Link>
            </span>
          </p>
        </div>
      </div>
    </Card>
  );
}

export default Login;
