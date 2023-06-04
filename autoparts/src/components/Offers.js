import React from 'react';
import './Offer.css';
import repair from '../Images/repair.jpg'
import body from '../Images/body-parts.jpg'
import { Link } from 'react-router-dom';


const Offer = () => {
  return (
    <div className="app">
      <h1 className="heading">OUR OFFERS</h1>
      <div className="section-container-O">
        <div className="section-O">
        <Link to="/product">
          <img src={repair} alt="Car" className="section-image-O" />
          </Link>
          <h2>LIMITED OFFER <br></br> REPAIR PARTS </h2>
          <p>Learn More </p>
        </div>
        <div className="section-O">
        <Link to="/product">
          <img src={body} alt="Tyre" className="section-image-O" />
          </Link>
          <h2>BODY PARTS <br></br> BEST OFFERS</h2>
          <p>Learn More</p>
        </div>
      </div>
    </div>
  );
};

export default Offer;
