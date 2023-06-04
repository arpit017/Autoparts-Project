import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };


    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>About Us</h3>
                        <p>
                        Inspired by a passion for cars, our car shop is dedicated to providing exceptional quality and service. With a team of knowledgeable experts, we strive to deliver an unforgettable experience for every car enthusiast.
                        </p>
                        {/* Add more lines if necessary */}
                    </div>
                    <div className="col">
                        <h3>Get in Touch</h3>
                        <p>447 Broadway,</p>
                        <p>FI 2, Jabroni Drive</p>
                        <p>New York, NY 100231</p>
                        <p>Email: dreamcars@gmail.com</p>
                        <p>Phone: 123-456-7890</p>
                    </div>
                    <div className="col">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <a href="/customer-service">Customer Service</a>
                            </li>
                            <li>
                                <a href="/return-policy">Return Policy</a>
                            </li>
                            <li>
                                <a href="/shipping-delivery">Shipping & Delivery</a>
                            </li>
                            <li>
                                <a href="/our-story">Our Story</a>
                            </li>
                            <li>
                                <a href="/blog">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Get In Touch</h3>
                        <input type="email" placeholder="Enter your email" />
                        <button className="subscribe-button">Subscribe</button>
                        <br></br>
                        <div className="social-icons">
                            <a href="https://www.instagram.com">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.twitter.com">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://www.facebook.com">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://www.linkedin.com">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                    <div className="col">
                        <button className="scroll-to-top-button" onClick={scrollToTop} >
                            Top
                        </button>
                    </div>
                </div>
                <hr />
                <div className="footer-bottom">
                    <div className="logo">
                        {/* Insert your company logo here */}
                        <img src="https://static3.depositphotos.com/1002881/258/i/600/depositphotos_2586527-stock-photo-wrench-gear-logo.jpg" alt="Company Logo" />
                    </div>
                    <div className="copyright">
                        <p> Copyright &copy;  2023  <br></br>All Rights Reserved</p>
                    </div>
                    <div className="payment-methods">
                    <img src='https://www.pngitem.com/pimgs/m/179-1792550_payment-methods-images-png-transparent-png.png' alt='payment'></img>
                        {/* // <img src="visa.png" alt="Visa" />
                        // <img src="mastercard.png" alt="Mastercard" />
                        // <img src="rupay.png" alt="Rupay" />
                        // <img src="paypal.png" alt="PayPal" />
                        // <img src="upi.png" alt="UPI" /> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;