'use client';

import React, { useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import SuccessModal from './SuccessModal';

interface PopupFormProps {
    isVisible: boolean;
    onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ isVisible, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        designation: '',
        website: '',
        country: '',
        message: '',
        needDemo: true,
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        designation: '',
        website: '',
        country: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const validate = () => {
        const newErrors: any = {};

        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'A valid email is required';
        if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'A valid 10-digit phone number is required';
        if (!formData.designation) newErrors.designation = 'Designation is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.message) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;

        // Reset specific field's error when the user types valid input
        setErrors((prev) => ({ ...prev, [name]: '' }));

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setLoading(true);
            // Show success modal and reset the form
            setShowSuccessModal(true);
            try {
                const response = await fetch('/api/emails/route', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const data = await response.json();
                console.log('Email sent successfully:', data);


                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    designation: '',
                    website: '',
                    country: '',
                    message: '',
                    needDemo: true,
                });
            } catch (error: any) {
                console.error('Error sending email:', error.message);
            } finally {
                setLoading(false);
            }
        }
    };

    const handleClose = () => {
        setFormData({
            name: '',
            email: '',
            phone: '',
            designation: '',
            website: '',
            country: '',
            message: '',
            needDemo: true,
        });
        setErrors({
            name: '',
            email: '',
            phone: '',
            designation: '',
            website: '',
            country: '',
            message: '',
        });
        onClose();
    };

    function CloseAllModels() {
        setShowSuccessModal(false)
        onClose();
    }

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg  md:w-full max-w-lg relative mx-2">
                <h2 className="text-prime-blue text-lg text-center font-semibold mb-4">Contact Us</h2>
                <button
                    type="button"
                    className="ml-4 bg-red-500 text-white p-2 rounded hover:bg-red-600 absolute top-4 right-4"
                    onClick={handleClose}
                >
                    <IoIosCloseCircleOutline />
                </button>
                <form onSubmit={handleSubmit} className=''>
                    <label className="block mb-2">
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
                        />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                    </label>

                    <div className="flex gap-6">
                        <label className="block mb-2">
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
                            />
                            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                        </label>
                        <label className="block mb-2">
                            Phone:
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={`w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
                            />
                            {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                        </label>
                    </div>

                    <label className="block mb-2">
                        Designation:
                        <input
                            type="text"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            className={`w-full p-2 border ${errors.designation ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
                        />
                        {errors.designation && <span className="text-red-500 text-sm">{errors.designation}</span>}
                    </label>

                    <div className="flex gap-6">
                        <label className="block mb-2">
                            Website:
                            <input
                                type="url"
                                name="website"
                                value={formData.website}
                                onChange={handleChange}
                                className={`w-full p-2 border ${errors.website ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
                            />
                            {errors.website && <span className="text-red-500 text-sm">{errors.website}</span>}
                        </label>
                        <label className="block mb-2">
                            Country:
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className={`w-full p-2 border ${errors.country ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
                            />
                            {errors.country && <span className="text-red-500 text-sm">{errors.country}</span>}
                        </label>
                    </div>

                    <label className="block mb-2">
                        Message:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`w-full p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded mt-1`}
                        />
                        {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                    </label>

                    <div className="flex items-center justify-center gap-4 my-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="needDemo"
                                checked={formData.needDemo}
                                onChange={() => setFormData((prev) => ({ ...prev, needDemo: true }))}
                                className="mr-2"
                            />
                            Need A Demo
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="needDemo"
                                checked={!formData.needDemo}
                                onChange={() => setFormData((prev) => ({ ...prev, needDemo: false }))}
                                className="mr-2"
                            />
                            No Demo Needed
                        </label>
                    </div>


                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-prime-dark text-white py-2 px-4 rounded hover:bg-prime-blue "
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>

            {/* Show success modal */}
            {showSuccessModal && (
                <SuccessModal
                    isVisible={showSuccessModal}
                    onClose={() => CloseAllModels()}
                    onReset={() => {
                        setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            designation: '',
                            website: '',
                            country: '',
                            message: '',
                            needDemo: true,
                        });
                    }}
                />
            )}
        </div>
    );
};

export default PopupForm;