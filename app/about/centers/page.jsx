import React from "react";

const locations = [
	{
		name: "Nairobi, Kenya",
		description: "Supporting operations across Africa with cutting-edge solutions.",
		image: "/images/nairobi.jpg",
	},
	{
		name: "Lagos, Nigeria",
		description: "A key hub for West African innovation and growth.",
		image: "/images/lagos.jpg",
	},
	{
		name: "Cape Town, South Africa",
		description: "Driving sustainability and development in Southern Africa.",
		image: "/images/cape-town.jpg",
	},
	{
		name: "Cairo, Egypt",
		description: "Empowering businesses in North Africa with advanced solutions.",
		image: "/images/cairo.jpg",
	},
	{
		name: "Accra, Ghana",
		description: "A vibrant center for technology and innovation in West Africa.",
		image: "/images/accra.jpg",
	},
	{
		name: "Kampala, Uganda",
		description: "Enhancing opportunities in East Africa with transformative solutions.",
		image: "/images/kampala.jpg",
	},
	{
		name: "Addis Ababa, Ethiopia",
		description: "Fostering economic growth in the Horn of Africa.",
		image: "/images/addis-ababa.jpg",
	},
	{
		name: "Dar es Salaam, Tanzania",
		description: "Building community-focused initiatives in East Africa.",
		image: "/images/dar-es-salaam.jpg",
	},
	{
		name: "Dakar, Senegal",
		description: "Expanding our footprint in Francophone Africa.",
		image: "/images/dakar.jpg",
	},
	{
		name: "Rabat, Morocco",
		description: "Driving innovation in North Africa's thriving economy.",
		image: "/images/rabat.jpg",
	},
	{
		name: "Harare, Zimbabwe",
		description: "Providing tools for growth in Southern Africa.",
		image: "/images/harare.jpg",
	},
	{
		name: "Lusaka, Zambia",
		description: "Enabling opportunities for development in Central Africa.",
		image: "/images/lusaka.jpg",
	},
	{
		name: "New York, USA",
		description: "Our hub for North American operations, leading innovation and strategy.",
		image: "/images/new-york.jpg",
	},
];

export default function Centers() {
	return (
		<section className="py-12 bg-gray-50">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
					Places Where We Operate
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{locations.map((location, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
						>
							<img
								src={location.image}
								alt={location.name}
								className="w-full h-48 object-cover"
							/>
							<div className="p-4">
								<h3 className="text-lg font-semibold text-gray-900">{location.name}</h3>
								<p className="text-sm text-gray-600 mt-2">{location.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
