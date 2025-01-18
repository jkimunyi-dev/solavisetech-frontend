import React from "react";

const galleryItems = [
	{
		image: "/images/gallery1.jpg",
		title: "Serene Landscape",
		description: "A beautiful view of mountains during sunrise.",
	},
	{
		image: "/images/gallery2.jpg",
		title: "Modern Architecture",
		description: "A stunning example of futuristic design.",
	},
	{
		image: "/images/gallery3.jpg",
		title: "Calm Beach",
		description: "Relaxing waves and a golden sunset.",
	},
	{
		image: "/images/gallery4.jpg",
		title: "Night Cityscape",
		description: "A bustling city illuminated at night.",
	},
];

export default function Gallery() {
	return (
		<section className="py-12 bg-gray-50">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Gallery</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{galleryItems.map((item, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
						>
							<img
								src={item.image}
								alt={item.title}
								className="w-full h-56 object-cover"
							/>
							<div className="p-4">
								<h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
								<p className="text-sm text-gray-600 mt-2">{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
