import React from 'react'
import { useSelector, useDispatch } from "react-redux"

const Forum = () => {

  const { user } = useSelector((store) => store.authReducer);

  console.log(user);

  return (
    <div>
        <h1>Forum</h1>
        <h3>Name: {user.username}</h3>
    </div>
  )
}

export default Forum