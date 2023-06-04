import React from "react";
import img1 from "../Images/car8.jpg";
import img2 from "../Images/car5.jpg";
import img3 from "../Images/car3.jpg";
import img4 from "../Images/car4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Autoplay, Navigation } from "swiper";
import "swiper/css/bundle";
import "./Mainbody.css"
import { Link } from "react-router-dom";

const Mainbody = () => {
	SwiperCore.use([Autoplay, Navigation]);
	const listing = [img1, img2, img3, img4];
	listing.map((img, id) => {
		console.log(img);
	});
	return (
		<>
    <div >
			<Swiper
				slidesPerView={1}
				navigation
				effect="fade"
				modules={[EffectFade]}
				autoplay={{ delay: 3000 }}
        
			>
				{listing.map((img, id) => (
					<SwiperSlide key={id} >
						<div
							style={{
								background: `url(${img}) center,no-repeat`,
								backgroundSize:"cover",
								backgroundRepeat: "no-repeat",
                // height:"400px"
							}}
							className="w-auto h-screen flex flex-col  items-center justify-center"
						>
							<div className="flex flex-col text-black flex items-center justify-center">
								<h1 className="text-[35px] md:text-[50px]">
									SELECT YOUR VEHICLE
								</h1>
								<h2 className="text-[20px] md:text-[25px] translate-y-[-20px]">
									Customize, Modify, Upgrade, Repair, Replace
								</h2>
							</div>
							<div className="flex flex-col w-[30%] ">
								<select className="w-full p-2 mb-2 text-white bg-gray-400  rounded-md shadow-sm outline-none appearance-none ">
									<option>
										{" "}
										<span className="">1 </span>Year
									</option>
									<option>Year</option>
								</select>
								<select className="w-full p-2 mb-2 text-white bg-gray-400  rounded-md shadow-sm outline-none appearance-none ">
									<option>
										{" "}
										<span className="">2 </span>Make
									</option>
									<option>Year</option>
								</select>
								<select className="w-full p-2 mb-2 text-white bg-gray-400  rounded-md shadow-sm outline-none appearance-none ">
									<option>
										{" "}
										<span className="">3 </span>Model
									</option>
									<option>Year</option>
								</select>
								<Link to="/product">
								<button className="w-full p-2 text-black bg-yellow-300 rounded-md shadow-sm outline-none appearance-none">
									Shop Now
								</button>
								</Link>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
      </div>
		</>
	);
};

export default Mainbody;