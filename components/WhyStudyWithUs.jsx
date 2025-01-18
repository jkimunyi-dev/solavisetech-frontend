import React from 'react';

const WhyStudyWithUs = () => {
	return (
		<section className="py-16 px-4">
			<div className="max-w-[1440px] mx-auto">
				{/* Heading Section */}
				<div className="text-center mb-16">
					<h2 className="text-[32px] md:text-[40px] font-bold text-gray-900 mb-4">
						Why Study With Us?
					</h2>
					<p className="text-gray-600 text-lg">
						Transform your career with expert-led learning and industry-recognized certifications.
					</p>
				</div>

				{/* Features Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* World Class Teachers */}
					<div className="flex flex-col items-center text-center">
						<div className="w-20 h-20 mb-6 relative">
							<div className="absolute inset-0 bg-red-50 rounded-full"></div>
							<svg
								className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
								<circle cx="12" cy="7" r="4" />
								<path d="M22 10v0a2 2 0 0 0-2-2h0" />
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-4 text-gray-900">
							World Class Teachers
						</h3>
						<p className="text-gray-600">
							Learn from industry experts with years of real-world experience in their respective fields. Our instructors are passionate about sharing their knowledge.
						</p>
					</div>

					{/* Global Community */}
					<div className="flex flex-col items-center text-center">
						<div className="w-20 h-20 mb-6 relative">
							<div className="absolute inset-0 bg-blue-50 rounded-full"></div>
							<svg
								className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<circle cx="12" cy="12" r="10" />
								<line x1="2" y1="12" x2="22" y2="12" />
								<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-4 text-gray-900">
							Global Community
						</h3>
						<p className="text-gray-600">
							Join a diverse community of learners from over 150 countries. Collaborate, share insights, and grow together through peer learning and networking.
						</p>
					</div>

					{/* Top Notch Courses */}
					<div className="flex flex-col items-center text-center">
						<div className="w-20 h-20 mb-6 relative">
							<div className="absolute inset-0 bg-green-50 rounded-full"></div>
							<svg
								className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
								<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
								<path d="M12 6l4 4-4 4" />
							</svg>
						</div>
						<h3 className="text-xl font-semibold mb-4 text-gray-900">
							Top Notch Courses
						</h3>
						<p className="text-gray-600">
							Access comprehensive, up-to-date courses designed to industry standards. Get hands-on experience with practical projects and real-world applications.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyStudyWithUs;