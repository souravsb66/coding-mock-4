import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "../redux/store";
import { useSelector, useDispatch } from "react-redux"
import { Navigate } from "react-router-dom"
import { authRequest, authRequestFailure, authRequestSuccess } from "../redux/auth/action";

const Signup = () => {
  const [userData, setUserData] = useState({
    username: "",
    avatar:
      "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    email: "",
    password: "",
  });

  const {isAuth} = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();

  const handleData = (e) => {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  
  
  const handleSignup = (e) => {
    e.preventDefault();
    
    dispatch(authRequest());
    axios.post(`${baseURL}/users`, userData)
    .then((res) => {
      // console.log(res);
      dispatch(authRequestSuccess(res.data));
    })
    .catch((err) => {
      // console.log(err);
      dispatch(authRequestFailure());
    })
  }

  //After Signup Navigating to Forum Page
  if(isAuth) {
    return <Navigate to={"/signin"} />;
  }

  return (
    <div>
      <h2>Singup Form</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="">Enter Username</label>
          <input type="text" name="username" required value={userData.username} onChange={handleData} />
        </div>
        <div>
          <label htmlFor="">Enter Avatar URL</label>
          <input type="text" name="avatar" value={userData.avatar} onChange={handleData} />
        </div>
        <div>
          <label htmlFor="">Enter Email</label>
          <input type="email" name="email" required value={userData.email} onChange={handleData} />
        </div>
        <div>
          <label htmlFor="">Enter Password</label>
          <input type="password" name="password" required value={userData.password} onChange={handleData} />
        </div>
        <input type="submit"/>
      </form>
    </div>
  );
};

export default Signup;
