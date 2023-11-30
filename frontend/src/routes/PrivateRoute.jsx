import React from 'react'
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const PrivateRoute = ({children}) => {

  const {isAuth} = useSelector((store) => store.authReducer);

  return isAuth ? children : <Navigate to={"/signin"} />
  
}

export default PrivateRoute