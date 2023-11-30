import React from 'react'
import {useSelector} from "react-redux"

const Signup = () => {

    const {isAuth} = useSelector((store) => store.authReducer);

    console.log(isAuth);
  return (
    <div>
        
        <h2>Singup Form</h2>
        <form action="">
            <label htmlFor="">Enter Username</label>
            <input type="text" />
        </form>
    </div>
  )
}

export default Signup