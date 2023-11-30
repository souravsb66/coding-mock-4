import React, { useState } from 'react'
import { Navigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios";
import { authRequest, authRequestFailure, authRequestSuccess } from '../redux/auth/action';
import { baseURL } from '../redux/store';

const Signin = () => {

  const [userData, setUserData] = useState({
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

  const handleSignin = async (e) => {

    e.preventDefault();
    dispatch(authRequest());

    let res = await axios.get(`${baseURL}/users`);
    let users = res.data;

    console.log(users);

    if(users && users.length > 0) {
      let loggedinUser = users.filter((ele) => {
        if(ele.email === userData.email  &&
          ele.password === userData.password) {
            return ele
        }
      })
      
      if(loggedinUser.length != 0) {
        dispatch(authRequestSuccess(loggedinUser[0]));
      }
      else {
        dispatch(authRequestFailure());
      }
    } 
    else {
      dispatch(authRequestFailure());
    }
  }

  
  //If Signed in Navigating to Forum Page
  if(isAuth) {
    return <Navigate to={"/"} />;
  }


  return (
    <div>
      <h2>Singin Form</h2>
      <form onSubmit={handleSignin}>
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
  )
}

export default Signin