import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../store/contexts/AuthContext";

function Home() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="container-fluid">
      <div className="row mt-5 text-center text-white">
        <div className="col-12 mt-5">
          <h1>Welcome to Book Store</h1>
          {currentUser ? (
            <h2 style={{ color: "red" }}>{currentUser.displayName}</h2>
          ) : (
            <h2>
              Please <Link to="/login"> Login</Link>
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
