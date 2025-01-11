"use client"
import React, { useState } from 'react';
import { Send, Check, AlertCircle, ChevronDown } from 'lucide-react';

const Newsletter = () => {
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phoneNumber: '',
		countryCode: '+1'
	});
	const [status, setStatus] = useState('idle');
	const [errors, setErrors] = useState({});
	const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

	// Country codes array remains the same
	const countryCodes = [
		{ code: '+213', country: 'Algeria', flag: '🇩🇿' },
		// ... rest of your country codes
	];

	const validateForm = () => {
		const newErrors = {};

		if (!formData.fullName.trim()) {
			newErrors.fullName = 'Full name is required';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email';
		}

		if (!formData.phoneNumber.trim()) {
			newErrors.phoneNumber = 'Phone number is required';
		} else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/[^\d]/g, ''))) {
			newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
		if (errors[name]) {
			setErrors(prev => ({
				...prev,
				[name]: ''
			}));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validateForm()) return;

		setStatus('loading');
		setTimeout(() => {
			setStatus('success');
			setFormData({
				fullName: '',
				email: '',
				phoneNumber: '',
				countryCode: '+1'
			});
			setTimeout(() => {
				setStatus('idle');
			}, 3000);
		}, 1000);
	};

	const InputField = ({ name, label, type = "text", placeholder }) => (
		<div className="mb-4 w-full">
			<label htmlFor={name} className="block text-left text-sm font-medium text-gray-700 mb-1">
				{label}
			</label>
			<div className="relative">
				<input
					type={type}
					id={name}
					name={name}
					value={formData[name]}
					onChange={handleChange}
					placeholder={placeholder}
					className={`w-full px-4 py-3 rounded-lg border-2 ${errors[name]
						? 'border-red-300 focus:border-red-500 focus:ring-red-200'
						: 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'
						} outline-none transition-all`}
					disabled={status === 'loading' || status === 'success'}
				/>
				{errors[name] && (
					<p className="mt-1 text-sm text-red-500 text-left">{errors[name]}</p>
				)}
			</div>
		</div>
	);

	const PhoneInputField = () => (
		<div className="mb-4 w-full">
			<label htmlFor="phoneNumber" className="block text-left text-sm font-medium text-gray-700 mb-1">
				Phone Number
			</label>
			<div className="relative flex w-full">
				<div className="relative">
					<button
						type="button"
						className="h-full px-3 py-3 border-2 border-r-0 border-gray-200 rounded-l-lg flex items-center gap-2 hover:bg-gray-50 focus:outline-none focus:border-blue-500"
						onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
						disabled={status === 'loading' || status === 'success'}
					>
						<span>{countryCodes.find(c => c.code === formData.countryCode)?.flag}</span>
						<span className="hidden sm:inline">{formData.countryCode}</span>
						<ChevronDown className="w-4 h-4" />
					</button>

					{isCountryDropdownOpen && (
						<div className="absolute z-10 mt-1 w-52 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
							{countryCodes.map((country) => (
								<button
									key={country.code}
									type="button"
									className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2"
									onClick={() => {
										setFormData(prev => ({ ...prev, countryCode: country.code }));
										setIsCountryDropdownOpen(false);
									}}
								>
									<span>{country.flag}</span>
									<span>{country.country}</span>
									<span className="text-gray-500">{country.code}</span>
								</button>
							))}
						</div>
					)}
				</div>

				<input
					type="tel"
					id="phoneNumber"
					name="phoneNumber"
					value={formData.phoneNumber}
					onChange={handleChange}
					placeholder="Enter your phone number"
					className={`flex-1 px-4 py-3 border-2 rounded-r-lg ${errors.phoneNumber
						? 'border-red-300 focus:border-red-500 focus:ring-red-200'
						: 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'
						} outline-none transition-all`}
					disabled={status === 'loading' || status === 'success'}
				/>
			</div>
			{errors.phoneNumber && (
				<p className="mt-1 text-sm text-red-500 text-left">{errors.phoneNumber}</p>
			)}
		</div>
	);

	return (
		<section className="w-full bg-gradient-to-br from-yellow-50 to-blue-50 py-8 md:py-16">
			<div className="max-w-[1440px] mx-auto px-4 md:px-6">
				<div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
					{/* Image Column */}
					<div className="relative flex justify-center md:justify-start">
						<div className="w-[90%] md:w-2/3 aspect-square md:aspect-auto md:min-h-[400px] rounded-xl overflow-hidden">
							<img
								src="subscribeimage.png"
								alt="Newsletter illustration"
								className="w-full h-full object-cover rounded-xl"
							/>
						</div>
					</div>

					{/* Form Column */}
					<div className="w-full max-w-xl mx-auto md:mx-0">
						<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
							Stay Updated with Our Newsletter
						</h2>
						<p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
							Get the latest updates on course offerings, industry insights, and exclusive learning resources delivered straight to your inbox.
						</p>

						<form onSubmit={handleSubmit} className="w-full">
							<InputField
								name="fullName"
								label="Full Name"
								placeholder="Enter your full name"
							/>

							<InputField
								name="email"
								label="Email Address"
								type="email"
								placeholder="Enter your email address"
							/>

							<PhoneInputField />

							<button
								type="submit"
								disabled={status === 'loading' || status === 'success'}
								className={`mt-6 w-full px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-lg font-bold text-white transition-all
									${status === 'loading' ?
										'bg-blue-400 cursor-wait' :
										status === 'success' ?
											'bg-green-500' :
											'bg-blue-600 hover:bg-blue-700'
									}
								`}
							>
								{status === 'loading' ? 'Subscribing...' :
									status === 'success' ? 'Subscribed!' :
										'Subscribe to Newsletter'}
							</button>

							{status === 'success' && (
								<p className="mt-3 text-sm text-green-500">
									Thank you for subscribing! We'll be in touch soon.
								</p>
							)}

							<div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-start gap-3 md:gap-4 text-sm text-gray-500">
								<div className="flex items-center gap-2">
									<Check className="w-4 h-4" />
									<span>No spam, ever</span>
								</div>
								<div className="flex items-center gap-2">
									<Check className="w-4 h-4" />
									<span>Unsubscribe anytime</span>
								</div>
								<div className="flex items-center gap-2">
									<Check className="w-4 h-4" />
									<span>Weekly updates</span>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Newsletter;