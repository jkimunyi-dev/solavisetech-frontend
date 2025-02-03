"use client"
import React, { useState } from 'react';
import { Send, Check, ChevronDown } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Newsletter = () => {
	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phoneNumber: '',
		countryCode: '+1'
	});
	const [status, setStatus] = useState('idle');
	const [errors, setErrors] = useState({});

	// Country codes
	const countryCodes = [
		{ code: '+213', country: 'Algeria', flag: '🇩🇿' },
		{ code: '+61', country: 'Australia', flag: '🇦🇺' },
		{ code: '+229', country: 'Benin', flag: '🇧🇯' },
		{ code: '+267', country: 'Botswana', flag: '🇧🇼' },
		{ code: '+55', country: 'Brazil', flag: '🇧🇷' },
		{ code: '+237', country: 'Cameroon', flag: '🇨🇲' },
		{ code: '+86', country: 'China', flag: '🇨🇳' },
		{ code: '+243', country: 'DR Congo', flag: '🇨🇩' },
		{ code: '+240', country: 'Equatorial Guinea', flag: '🇬🇶' },
		{ code: '+251', country: 'Ethiopia', flag: '🇪🇹' },
		{ code: '+233', country: 'Ghana', flag: '🇬🇭' },
		{ code: '+49', country: 'Germany', flag: '🇩🇪' },
		{ code: '+220', country: 'Gambia', flag: '🇬🇲' },
		{ code: '+91', country: 'India', flag: '🇮🇳' },
		{ code: '+225', country: 'Ivory Coast', flag: '🇨🇮' },
		{ code: '+81', country: 'Japan', flag: '🇯🇵' },
		{ code: '+254', country: 'Kenya', flag: '🇰🇪' },
		{ code: '+231', country: 'Liberia', flag: '🇱🇷' },
		{ code: '+218', country: 'Libya', flag: '🇱🇾' },
		{ code: '+265', country: 'Malawi', flag: '🇲🇼' },
		{ code: '+223', country: 'Mali', flag: '🇲🇱' },
		{ code: '+222', country: 'Mauritania', flag: '🇲🇷' },
		{ code: '+230', country: 'Mauritius', flag: '🇲🇺' },
		{ code: '+212', country: 'Morocco', flag: '🇲🇦' },
		{ code: '+258', country: 'Mozambique', flag: '🇲🇿' },
		{ code: '+234', country: 'Nigeria', flag: '🇳🇬' },
		{ code: '+262', country: 'Reunion', flag: '🇷🇪' },
		{ code: '+7', country: 'Russia', flag: '🇷🇺' },
		{ code: '+250', country: 'Rwanda', flag: '🇷🇼' },
		{ code: '+239', country: 'Sao Tome and Principe', flag: '🇸🇹' },
		{ code: '+221', country: 'Senegal', flag: '🇸🇳' },
		{ code: '+232', country: 'Sierra Leone', flag: '🇸🇱' },
		{ code: '+27', country: 'South Africa', flag: '🇿🇦' },
		{ code: '+44', country: 'UK', flag: '🇬🇧' },
		{ code: '+1', country: 'USA', flag: '🇺🇸' },
		{ code: '+256', country: 'Uganda', flag: '🇺🇬' },
		{ code: '+228', country: 'Togo', flag: '🇹🇬' },
		{ code: '+255', country: 'Tanzania', flag: '🇹🇿' },
		{ code: '+216', country: 'Tunisia', flag: '🇹🇳' },
		{ code: '+260', country: 'Zambia', flag: '🇿🇲' }
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
		<div className="mb-4 w-full space-y-2">
			<Label htmlFor={name}>{label}</Label>
			<Input
				type={type}
				id={name}
				name={name}
				value={formData[name]}
				onChange={handleChange}
				placeholder={placeholder}
				className={errors[name] ? 'border-red-500' : ''}
				disabled={status === 'loading' || status === 'success'}
			/>
			{errors[name] && (
				<p className="text-sm text-red-500">{errors[name]}</p>
			)}
		</div>
	);

	return (
		<section className="w-full bg-gradient-to-br from-yellow-50 to-blue-50 py-8 md:py-16">
			<div className="max-w-[1440px] mx-auto px-4 md:px-6">
				<Card className="border-0 shadow-none bg-transparent">
					<CardContent className="p-0">
						<div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
							{/* Image Column */}
							<div className="relative flex justify-center md:justify-start">
								<div className="w-[90%] md:w-2/3 aspect-square md:aspect-auto md:min-h-[400px] rounded-xl overflow-hidden">
									<img
										src="/api/placeholder/400/400"
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

								<form onSubmit={handleSubmit} className="w-full space-y-4">
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

									<div className="space-y-2">
										<Label htmlFor="phoneNumber">Phone Number</Label>
										<div className="flex gap-2">
											<Select
												value={formData.countryCode}
												onValueChange={(value) => setFormData(prev => ({ ...prev, countryCode: value }))}
											>
												<SelectTrigger className="w-[180px]">
													<SelectValue>
														{countryCodes.find(c => c.code === formData.countryCode)?.flag} {formData.countryCode}
													</SelectValue>
												</SelectTrigger>
												<SelectContent>
													{countryCodes.map((country) => (
														<SelectItem key={country.code} value={country.code}>
															<span className="flex items-center gap-2">
																<span>{country.flag}</span>
																<span>{country.country}</span>
																<span className="text-gray-500">{country.code}</span>
															</span>
														</SelectItem>
													))}
												</SelectContent>
											</Select>
											<Input
												type="tel"
												id="phoneNumber"
												name="phoneNumber"
												value={formData.phoneNumber}
												onChange={handleChange}
												placeholder="Enter your phone number"
												className={errors.phoneNumber ? 'border-red-500' : ''}
												disabled={status === 'loading' || status === 'success'}
											/>
										</div>
										{errors.phoneNumber && (
											<p className="text-sm text-red-500">{errors.phoneNumber}</p>
										)}
									</div>

									<Button
										type="submit"
										className="w-full"
										disabled={status === 'loading' || status === 'success'}
										variant={status === 'success' ? 'success' : 'default'}
									>
										{status === 'loading' ? (
											<span className="flex items-center gap-2">
												<span className="animate-spin">⌛</span> Subscribing...
											</span>
										) : status === 'success' ? (
											<span className="flex items-center gap-2">
												<Check className="w-4 h-4" /> Subscribed!
											</span>
										) : (
											<span className="flex items-center gap-2">
												<Send className="w-4 h-4" /> Subscribe to Newsletter
											</span>
										)}
									</Button>

									{status === 'success' && (
										<Alert className="bg-green-50 text-green-800 border-green-200">
											<AlertDescription>
												Thank you for subscribing! We'll be in touch soon.
											</AlertDescription>
										</Alert>
									)}

									<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-500 pt-4">
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
					</CardContent>
				</Card>
			</div>
		</section>
	);
};

export default Newsletter;