import React from "react";

const teamMembers = [
	{
		name: "Samba Otavise",
		role: "AWS Cloud ",
		image: "/images/jimmy.jpg",
		bio: "Expert in full-stack development, AWS, and DevOps.",
	},
	{
		name: "Kevin Tuei",
		role: "Cloud Security",
		image: "/images/jane.jpg",
		bio: "Passionate about creating intuitive and aesthetic designs.",
	},
	{
		name: "Winfreya Eric",
		role: "Frontend Developer",
		image: "/images/john.jpg",
		bio: "Specializes in scalable APIs and database management.",
	},
];

export default function TeamPage() {
	return (
		<section className="py-12 bg-gray-50">
			<div className="container mx-auto px-6">
				<h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Meet the Team</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
					{teamMembers.map((member, index) => (
						<div
							key={index}
							className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
						>
							<img
								src={member.image}
								alt={member.name}
								className="w-full h-56 object-cover"
							/>
							<div className="p-6 text-center">
								<h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
								<p className="text-sm text-gray-500">{member.role}</p>
								<p className="mt-4 text-gray-700">{member.bio}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
