import { useContext } from "react";
import { AuthContext } from "../store/contexts/AuthContext";
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { currentUser } = useContext(AuthContext);
  return <div></div>;
};

export default PrivateRoute;
