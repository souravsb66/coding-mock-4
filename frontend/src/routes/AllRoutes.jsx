import React from 'react'
import { Routes, Route } from "react-router-dom"
import Forum from '../pages/Forum'
import Answer from '../pages/Answer'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Forum />} />
        <Route path='/answer' element={<Answer />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
    </Routes>
  )
}

export default AllRoutes