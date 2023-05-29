import React from 'react'
import {Routes,Route} from "react-router-dom"
import Login from '../Compoenents/Login'
export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
    </Routes>
  )
}
