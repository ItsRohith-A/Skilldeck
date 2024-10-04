import React, { useState } from 'react';
import SuccessModal from '../others/SuccessModal';

const ContactusForm: React.FC = () => {
    const initialFormData = {
        name: '',
        email: '',
        phone: '',
        designation: '',
        website: '',
        country: '',
        message: '',
        needDemo: true,
    };

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        designation: '',
        website: '',
        country: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () => {
        const newErrors = { ...errors };

        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'A valid email is required';
        if (!formData.phone || !/^\d{10}$/.test(formData.phone)) newErrors.phone = 'A valid 10-digit phone number is required';
        if (!formData.designation) newErrors.designation = 'Designation is required';
        if (!formData.website || !/^https?:\/\/.+\..+/.test(formData.website)) newErrors.website = 'A valid website URL is required';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.message) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return !Object.values(newErrors).some((error) => error);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type, checked } = e.target as HTMLInputElement;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setIsSubmitted(true);
        }
    };
    console.log(handleSubmit)

    const handleReset = () => {
        setFormData(initialFormData);
    };


    return (
        <div className="container mx-auto px-4">
            <form onSubmit={handleSubmit} className="p-6 rounded-2xl border border-prime-blue flex flex-col gap-4">
                <h2 className="text-prime-blue text-lg text-center font-semibold leading-relaxed">
                    Fill out the following form with all the details
                </h2>

                <label className="text-prime-dark font-medium">
                    Name
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full p-3 mt-1 bg-white rounded-md border ${errors.name ? 'border-red-500' : 'border-zinc-200'
                            }`}
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                </label>

                <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <label className="text-prime-dark font-medium w-full">
                        Email Id
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full p-3 mt-1 bg-white rounded-md border ${errors.email ? 'border-red-500' : 'border-zinc-200'
                                }`}
                        />
                        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                    </label>
                    <label className="text-prime-dark font-medium w-full">
                        Phone No.
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full p-3 mt-1 bg-white rounded-md border ${errors.phone ? 'border-red-500' : 'border-zinc-200'
                                }`}
                        />
                        {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                    </label>
                </div>

                <label className="text-prime-dark font-medium">
                    Designation
                    <input
                        type="text"
                        name="designation"
                        value={formData.designation}
                        onChange={handleChange}
                        className={`w-full p-3 mt-1 bg-white rounded-md border ${errors.designation ? 'border-red-500' : 'border-zinc-200'
                            }`}
                    />
                    {errors.designation && <span className="text-red-500 text-sm">{errors.designation}</span>}
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
                    <label className="text-prime-dark font-medium">
                        Website link
                        <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            className={`w-full p-3 mt-1 bg-white rounded-md border ${errors.website ? 'border-red-500' : 'border-zinc-200'
                                }`}
                        />
                        {errors.website && <span className="text-red-500 text-sm">{errors.website}</span>}
                    </label>
                    <label className="text-prime-dark font-medium">
                        Country
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            className={`w-full p-3 mt-1 bg-white rounded-md border ${errors.country ? 'border-red-500' : 'border-zinc-200'
                                }`}
                        />
                        {errors.country && <span className="text-red-500 text-sm">{errors.country}</span>}
                    </label>
                </div>

                <label className="text-prime-dark font-medium">
                    Message
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full p-3 mt-1 bg-white rounded-md border ${errors.message ? 'border-red-500' : 'border-zinc-200'
                            }`}
                    />
                    {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                </label>

                <div className="flex gap-4 items-center justify-center">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="needDemo"
                            value="true"
                            checked={formData.needDemo === true}
                            onChange={() => setFormData((prev) => ({ ...prev, needDemo: true }))}
                            className="form-radio text-prime-blue"
                        />
                        Need A Demo
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="needDemo"
                            value="false"
                            checked={formData.needDemo === false}
                            onChange={() => setFormData((prev) => ({ ...prev, needDemo: false }))}
                            className="form-radio text-prime-blue"
                        />
                        Demo Not Needed
                    </label>
                </div>
                <div className="flex justify-center">
                    <button type="submit" className="lg:w-2/5 py-3 mt-4 bg-prime-dark hover:text-prime-blue text-white rounded-md ">
                        Send Message
                    </button>
                </div>
            </form>
            <SuccessModal
                isVisible={isSubmitted}
                onClose={() => setIsSubmitted(false)}
                onReset={handleReset}
            />
        </div>
    );
};

export default ContactusForm;
