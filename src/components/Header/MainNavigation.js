import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/contexts/AuthContext";

function MainNavigation() {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("clicked");
        navigate("login");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand mx-2 mx-lg-5" to="/">
          <h4>Book Store</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-lg-5 me-auto gap-5">
            <li className="nav-item mx-2 mx-lg-5">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            {currentUser && (
              <li className="nav-item mx-2 mx-lg-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="books">
                  Books
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item mx-2 mx-lg-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="new-book">
                  NewBook
                </Link>
              </li>
            )}
            {!currentUser && (
              <li className="nav-item mx-2 mx-lg-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="login">
                  Login
                </Link>
              </li>
            )}
            {!currentUser && (
              <li className="nav-item mx-2 mx-lg-5">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="singup">
                  SingUp
                </Link>
              </li>
            )}
            {currentUser && (
              <li className="nav-item dropdown mx-2 mx-lg-5">
                <Link
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false">
                  {currentUser.displayName}
                </Link>
                <ul
                  className="dropdown-menu col-4"
                  aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" onClick={logoutHandler}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            )}

            {/* {currentUser && (
              <NavDropdown
                title={currentUser.displayName}
                id="basic-nav-dropdown"
                bg="dark">
                <NavDropdown.Item className={classes.item}>
                  <Link onClick={logoutHandler} className={classes.linkdrop}>
                    Logout
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            )} */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavigation;
