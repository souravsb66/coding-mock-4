import React, { useState } from "react";
import axios from "axios";
import { baseURL } from "../redux/store";

const Signup = () => {
  const [userData, setUserData] = useState({
    username: "",
    avatar:
      "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png",
    email: "",
    password: "",
  });

  const handleData = (e) => {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post(`${baseURL}/users`, userData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div>
      <h2>Singup Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Enter Username</label>
          <input type="text" name="username" value={userData.username} onChange={handleData} />
        </div>
        <div>
          <label htmlFor="">Enter Avatar URL</label>
          <input type="text" name="avatar" value={userData.avatar} onChange={handleData} />
        </div>
        <div>
          <label htmlFor="">Enter Email</label>
          <input type="email" name="email" value={userData.email} onChange={handleData} />
        </div>
        <div>
          <label htmlFor="">Enter Password</label>
          <input type="password" name="password" value={userData.password} onChange={handleData} />
        </div>
        <input type="submit"/>
      </form>
    </div>
  );
};

export default Signup;
