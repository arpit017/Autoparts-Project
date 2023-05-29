import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../Compoenents/Login'
import Signup  from '../Compoenents/Signup'
export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
    </Routes>
  )
}
