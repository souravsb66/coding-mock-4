import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { logoutRequest } from '../redux/auth/action';

const Navbar = () => {

  const { isAuth } = useSelector((store) => store.authReducer);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutRequest());
  }

  return (
    <div>
        <Link to={"/"}>Forum</Link>
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/signin"}>Signin</Link>
        
        {isAuth && <button onClick={handleLogout}>Logout</button> }
    </div>
  )
}

export default Navbar