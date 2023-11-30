import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutRequest } from "../redux/auth/action";

const Navbar = () => {
  const { isAuth } = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutRequest());
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: "0.5rem 1rem",
      }}
    >
      <Link to={"/"}>Forum</Link>
      <Link to={"/signup"}>Signup</Link>
      <Link to={"/signin"}>Signin</Link>

      {isAuth && <button onClick={handleLogout}>Logout</button>}
    </div>
  );
};

export default Navbar;
