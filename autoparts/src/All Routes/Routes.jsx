import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Productdetails from '../productdetails'
import Product from '../product'
import Home from '../components/home'
import Login from '../components/login'
import Signup from '../components/signup'
import Cart from '../components/Cart'
import CheckoutPage from '../components/payment'
import Success from '../components/success'


export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/productdetails" element={<Productdetails/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<CheckoutPage/>}/>
            <Route path='/success' element={<Success/>}/>
        </Routes>
    </div>
  )
}
