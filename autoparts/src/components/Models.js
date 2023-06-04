import React from "react";
import "./Models.css";



const Page = () => {
	return (
		<div className="flex flex-col md:flex-row flex-wrap m-2 items-center mb-10 mt-10  justify-center md:justify-between w-screen">
			<div className="flex flex-col h-auto p-5 mb-5 border items-center justify-center">
				<h1 className="bg-yellow-400 text-[3rem]  mb-2">Featured Makes</h1>
				<h1 className="text-[3rem] pl-5 pr-5 mb-2">Featured Models</h1>
			</div>
			<div className="flex flex-col md:flex-row w-[55%] items-start justify-between mr-8">
				<div className="flex flex-col items-center justify-between">
					<select className="mb-2 mr-2 border appearance-none outline-none bg-gray-200 rounded-sm p-2 w-[250px]">
						<option>Kai</option>
						<option>Kia Optima</option>
						<option>Kia Sportage</option>
						<option>Kia Sorento</option>
 						<option>Kia Forte</option>
						<option>Kia Soul</option>
					</select>
					<select className="mb-2 mr-2 border appearance-none outline-none bg-gray-200 rounded-sm p-2 w-[250px]">
						<option>Chevy</option>
						<option>Chevy Camaro</option>
 						<option>Chevy Corvette</option>
						<option>Chevy Malibu</option>
						<option>Chevy Silverado</option>
 						<option>Chevy Equinox</option>
					</select>
					<select className="mb-2 mr-2 border appearance-none outline-none bg-gray-200 rounded-sm p-2 w-[250px]">
						<option>Dodge</option>
						<option>Dodge Charger</option>
// 						<option>Dodge Challenger</option>
// 						<option>Dodge Durango</option>
// 						<option>Dodge Journey</option>
// 						<option>Dodge Grand Caravan</option>
					</select>
					<select className="mb-2 mr-2 border appearance-none outline-none bg-gray-200 rounded-sm p-2 w-[250px]">
						<option>Jeep</option>
						<option>Jeep Wrangler</option>
// 						<option>Jeep Grand Cherokee</option>
// 						<option>Jeep Cherokee</option>
// 						<option>Jeep Compass</option>
// 						<option>Jeep Renegade</option>
					</select>
					<select className="mb-2 mr-2 border appearance-none outline-none bg-gray-200 rounded-sm p-2 w-[250px]">
						<option>Cadilac</option>
						<option>Cadilac Escalade</option>
// 						<option>Cadilac XT5</option>
// 						<option>Cadilac CT6</option>
// 						<option>Cadilac XT4</option>
// 						<option>Cadilac CT5</option>
					</select>
				</div>
				<div className="flex flex-col items-center justify-between">
					<select className="mb-2 mr-2 border appearance-none outline-none bg-gray-200 rounded-sm p-2 w-[250px]">
						<option>Honda</option>
						<option>Honda Civic</option>
// 						<option>Honda Accord</option>
// 						<option>Honda CR-V</option>
// 						<option>Honda Pilot</option>
// 						<option>Honda HR-V</option>
					</select>
					<select className="mb-2 mr-2 border appearance-none outline-none bg-gray-200 rounded-sm p-2 w-[250px]">
						<option>Ford</option>
						<option>Ford Mustang</option>
// 						<option>Ford F-150</option>
// 						<option>Ford Focus</option>
// 						<option>Ford Explorer</option>
// 						<option>Ford Escape</option>
					</select>
					<select className="mb-2 mr-2 border appearance-none outline-none bg-gray-200 rounded-sm p-2 w-[250px]">
						<option>Ram</option>
						<option>Ram 1500</option>
// 						<option>Ram 2500</option>
// 						<option>Ram 3500</option>
// 						<option>Ram ProMaster</option>
// 						<option>Ram ProMaster City</option>
					</select>
					<select className="mb-2 mr-2 border appearance-none outline-none bg-gray-200 rounded-sm p-2 w-[250px]">
						<option>GMC</option>
						<option>GMC Sierra</option>
// 						<option>GMC Acadia</option>
// 						<option>GMC Terrain</option>
// 						<option>GMC Yukon</option>
// 						<option>GMC Canyon</option>
					</select>
					<select className="border mr-2 mb-2 appearance-none outline-none bg-gray-200 rounded-sm p-2 w-[250px]">
						<option>Mercedes</option>
						<option>Mercedes-Benz C-Class</option>
// 						<option>Mercedes-Benz E-Class</option>
// 						<option>Mercedes-Benz S-Class</option>
// 						<option>Mercedes-Benz GLE-Class</option>
// 						<option>Mercedes-Benz AMG GT</option>
					</select>
				</div>
				<div className="flex flex-col items-center ">
					<select className="mb-2 mr-2 border appearance-none outline-none bg-gray-200 rounded-sm p-2 w-[250px]">
						<option>Tata</option>
// 						<option>Tata Harrier</option>
// 						<option>Tata Safari</option>
// 						<option>Tata Nexon</option>
// 						<option>Tata Altroz</option>
// 						<option>Tata Punch</option>
					</select>
					<select className="mb-2 mr-2 border appearance-none outline-none bg-gray-200 rounded-sm p-2 w-[250px]">
						<option>Nissan</option>
						<option>Nissan Altima</option>
// 						<option>Nissan Rogue</option>
// 						<option>Nissan Maxima</option>
// 						<option>Nissan Sunny</option>
// 						<option>Nissan Sentra</option>
					</select>
					<select className="mb-2 mr-2 border appearance-none outline-none bg-gray-200 rounded-sm p-2 w-[250px]">
						<option>Toyota</option>
						<option>Toyota Camry</option>
// 						<option>Toyota Corolla</option>
// 						<option>Toyota Highlander</option>
// 						<option>Toyota Prius</option>
// 						<option>Toyota Raptor</option>
					</select>
					<select className="mb-2 mr-2 border appearance-none outline-none bg-gray-200 rounded-sm p-2 w-[250px]">
						<option>Hyundai</option>
						<option>Hyundai Sonata</option>
// 						<option>Hyundai Elantra</option>
// 						<option>Hyundai Tucson</option>
// 						<option>Hyundai Santa Fe</option>
// 						<option>Hyundai i20</option>
					</select>
					<select className="mb-2 mr-2 border appearance-none outline-none bg-gray-200 rounded-sm p-2 w-[250px]">
						<option>Mahindra</option>
// 						<option>Mahindra XUV 700</option>
// 						<option>Mahindra XUV 500</option>
// 						<option>Mahindra Thar </option>
// 						<option>Mahindra Scorpio</option>
// 						<option>Mahindra Bolero</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default Page;