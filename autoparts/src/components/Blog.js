import React from 'react';
import './Blog.css';
import carImg6 from '../Images/car6.jpg'
import tyreImg from '../Images/nascar-332136_1280.jpg'
import interior from '../Images/interior.jpg'
import { Link } from 'react-router-dom';


const Blog = () => {
	return (
		<div className="app">
			<h1 className="heading">OUR BLOG</h1>
			<div className="section-container">
				<div className="">
				<Link to="/product">
					<img src={carImg6} alt="Car" className="section-image" />
					</Link>
					<div className="flex bg-gray-200 translate-y-[-10px] p-3 items-start flex-col">
						<h2 style={{color:"red"}}>Exterior</h2>
						<p>Date: 02-06-2023</p>
						<p> Exterior that make vehicles stand out on the road.</p>
					</div>
				</div>
				<div className="">
				<Link to="/product">
					<img src={tyreImg} alt="Tyre" className="section-image" />
					</Link>
					<div className="flex bg-gray-200 translate-y-[-10px] p-3 items-start flex-col">
						<h2 style={{color:"red"}}>Wheels and Tires</h2>
						<p>Date: 02-06-2023</p>
						<p>Choosing the right tires impact the performance.</p>
					</div>
				</div>
				<div className="">
				<Link to="/product">
					<img src={interior} alt="Interior" className="section-image" />
					</Link>
					<div className="flex bg-gray-200 translate-y-[-10px] p-3 items-start flex-col">
						<h2 style={{color:"red"}}>Interior</h2>
						<p>Date: 02-06-2023</p>
						<p>Interior Design that elevate the driving experience</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Blog;