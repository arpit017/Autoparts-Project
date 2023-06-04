import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  const[theme,settheme]=useState("light")
  return (
    <nav className="navbar">
      {/* <div className={theme=="dark"?"dark":"light"}> */}
      <div className="top-row">
        <div className="top-row-left">
          <span>Help | Order Status</span>          
        </div>
        <div className='top-row-middle'>
          <span>Free Shipping: On All US Orders Above $100</span>
        </div>
        <div className="top-row-right">
          <FontAwesomeIcon icon={faPhone} style={{ color: '#ffd700' }} />
          <span>123 456 7890</span>
        </div>
      </div>
      <div className="middle-row">
        <div className="middle-row-left" >
<Link to='/'>
          <img style={{width:"80px",height:"60px"}}src="https://static3.depositphotos.com/1002881/258/i/600/depositphotos_2586527-stock-photo-wrench-gear-logo.jpg" alt="Car Logo" />
          </Link>
        </div>
        &nbsp;&nbsp;
        <h2 style={{fontSize:"20px"}}>AutoParts.Com</h2>
        <div className="middle-row-middle">
          <input style={{width:"300px"}}type="text" placeholder="Search by Model, Year, Product" />

          <button className='middle-row-middle button '>
          <Link to="/product">
            <FontAwesomeIcon icon={faSearch} style={{ color: "black" }} />
            </Link>
          </button>
        </div>
        <div className="middle-row-right">
          <Link to='/login'>
          <span>My Account</span>
          </Link>
          <span>Garage</span>
          <div className="font-icon">
            <FontAwesomeIcon icon={faHeart} style={{ color: '#ffd700' }} /> &nbsp;
            <Link to='/cart'>
            <FontAwesomeIcon icon={faShoppingCart} style={{ color: '#ffd700' }} />
            </Link>
          </div>

          {/* <span>Wishlist</span>
          <span>Cart</span> */}
        </div>
      </div>
      <div className="bottom-row">
      <Link to='/product'>
        <span className="link">Exterior</span>
        </Link>
        <Link to='/product'>
        <span className="link">Interior</span>
        </Link>
        <Link to='/product'>
        <span className="link">Performance</span>
        </Link>
        <Link to='/product'>
        <span className="link">Wheels & Tires</span>
        </Link>
        <Link to='/product'>
        <span className="link">Body Parts</span>
        </Link>
        <Link to='/product'>
        <span className="link">Repair Parts</span>
        </Link>
        <Link to='/product'>
        <span className="link">Electronics</span>
        </Link>
        <Link to='/product'>
        <span className="link">Tools & Garage</span>
        </Link>
      </div>
    
    </nav>
  );
}

export default Navbar;
