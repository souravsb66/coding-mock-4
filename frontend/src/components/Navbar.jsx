import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to={"/"}>Forum</Link>
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/signin"}>Signin</Link>
    </div>
  )
}

export default Navbar