import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputControl from "../inputControl/InputControl";
import classes from "./SignUp.module.css";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import Card from "../../ui/Card";

function SignUp() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [disableSumbit, setDisableSubmit] = useState(false);

  const singupHandler = () => {
    if (!values.name || !values.email || !values.password) {
      setError("Please enter all the fields");
      return;
    }
    setError("");

    //firebase code

    setDisableSubmit(true);
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (userCredential) => {
        // Signed in
        setDisableSubmit(true);
        const user = userCredential.user;
        await updateProfile(user, {
          displayName: values.name,
        });

        await setDoc(doc(db, "users", user.uid), {
          displayName: values.name,
          uid: user.uid,
        });

        setDisableSubmit(false);

        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setDisableSubmit(false);
        // ..
      });
    console.log(values);
  };

  return (
    <Card>
      <div className="p-3">
        <h2 className={classes.heading}>SingUp</h2>
        <InputControl
          type="text"
          label="Name"
          placeholder="Enter Your Name"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <InputControl
          type="email"
          label="Email"
          placeholder="Enter Email ID"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <InputControl
          type="password"
          label="Password"
          placeholder="Enter Password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, password: event.target.value }))
          }
        />

        <div className={classes.footer}>
          <b className={classes.error}>{error}</b>
          <button disabled={disableSumbit} onClick={singupHandler}>
            Singup
          </button>
          <p>
            Already have account ?
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </Card>
  );
}

export default SignUp;
