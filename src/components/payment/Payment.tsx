import React, { useState } from 'react';
import { useRouter } from 'next/router';
import PricingCard from '../home/PricingCard'; // Adjust the import path if necessary
import razor from '../../../public/payment/razorpay.svg';
import stripe from '../../../public/payment/stripe.svg';
import Image from 'next/image';
import SuccessModal from '../others/SuccessModal';

const Payment = () => {
    const router = useRouter();
    const { plan, price, features } = router.query; // Access the plan, price, and features from query params
    const featureList = features ? JSON.parse(features as string) : [];

    const initialFormData = {
        name: '',
        email: '',
        phone: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const validate = () => {
        const newErrors = { ...errors };

        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'A valid email is required';
        if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'A valid 10-digit phone number is required';
        if (!formData.cardNumber || !/^\d{16}$/.test(formData.cardNumber)) newErrors.cardNumber = 'A valid 16-digit card number is required';
        if (!formData.expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) newErrors.expiryDate = 'A valid expiry date is required (MM/YY)';
        if (!formData.cvv || !/^\d{3}$/.test(formData.cvv)) newErrors.cvv = 'A valid 3-digit CVV is required';

        setErrors(newErrors);
        return !Object.values(newErrors).some((error) => error);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setLoading(true);
            try {
                // Simulate API call to process payment
                await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
                setIsSubmitted(true); // Show success modal
            } catch (error) {
                console.error("Error processing payment:", error);
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="container mx-auto my-12 px-4">
            {plan && price && features ? (
                <div className='grid grid-cols-2 gap-12'>
                    <div className="border p-4">
                        <p className="mt-4">Selected Plan: <span className="font-bold">{plan}</span></p>
                        <p className="mt-2">Price: <span className="font-bold">${price}</span></p>
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold">Features Included:</h2>
                            <ul className="list-disc list-inside mt-4 space-y-2">
                                {featureList.map((feature: string, index: number) => (
                                    <li key={index} className="text-gray-800 text-base font-medium">{feature.trim()}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 border flex flex-col justify-center items-center">
                        <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
                        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
                            <label className="text-prime-dark font-medium">
                                Name
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`w-full p-3 mt-1 bg-white rounded-md border ${errors.name ? 'border-red-500' : 'border-zinc-200'}`}
                                />
                                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                            </label>

                            <label className="text-prime-dark font-medium">
                                Email
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full p-3 mt-1 bg-white rounded-md border ${errors.email ? 'border-red-500' : 'border-zinc-200'}`}
                                />
                                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                            </label>

                            <label className="text-prime-dark font-medium">
                                Phone Number
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className={`w-full p-3 mt-1 bg-white rounded-md border ${errors.phone ? 'border-red-500' : 'border-zinc-200'}`}
                                />
                                {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                            </label>

                            <label className="text-prime-dark font-medium">
                                Card Number
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleChange}
                                    className={`w-full p-3 mt-1 bg-white rounded-md border ${errors.cardNumber ? 'border-red-500' : 'border-zinc-200'}`}
                                />
                                {errors.cardNumber && <span className="text-red-500 text-sm">{errors.cardNumber}</span>}
                            </label>

                            <div className="flex gap-4">
                                <label className="text-prime-dark font-medium flex-1">
                                    Expiry Date (MM/YY)
                                    <input
                                        type="text"
                                        name="expiryDate"
                                        value={formData.expiryDate}
                                        onChange={handleChange}
                                        placeholder="MM/YY"
                                        className={`w-full p-3 mt-1 bg-white rounded-md border ${errors.expiryDate ? 'border-red-500' : 'border-zinc-200'}`}
                                    />
                                    {errors.expiryDate && <span className="text-red-500 text-sm">{errors.expiryDate}</span>}
                                </label>
                                <label className="text-prime-dark font-medium flex-1">
                                    CVV
                                    <input
                                        type="text"
                                        name="cvv"
                                        value={formData.cvv}
                                        onChange={handleChange}
                                        className={`w-full p-3 mt-1 bg-white rounded-md border ${errors.cvv ? 'border-red-500' : 'border-zinc-200'}`}
                                    />
                                    {errors.cvv && <span className="text-red-500 text-sm">{errors.cvv}</span>}
                                </label>
                            </div>

                            <div className="flex justify-center">
                                <button type="submit" className="py-3 px-4 mt-4 bg-prime-blue text-white rounded-md">
                                    {loading ? 'Processing...' : 'Proceed to Payment'}
                                </button>
                            </div>
                        </form>
                        <div className="mt-4">
                            <Image src={razor} alt='Razorpay' className="w-24 mx-4" />
                            <Image src={stripe} alt='Stripe' className="w-24 mx-4" />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mt-8 p-4 border border-red-500 bg-red-100 text-red-700 rounded">
                    <h2 className="text-xl font-semibold">No Package Selected</h2>
                    <p className="mt-2">Please select a plan to proceed.</p>
                    <button
                        className="mt-4 bg-prime-blue text-white py-2 px-4 rounded"
                        onClick={() => router.push('/#pricing')} // Replace with the route to select a plan
                    >
                        Select a Plan
                    </button>
                </div>
            )}

        </div>
    );
};

export default Payment;
