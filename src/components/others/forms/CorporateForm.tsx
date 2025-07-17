import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IoCallOutline, IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import { TfiWorld } from 'react-icons/tfi';
import img from '../../../../public/Blogs/popupimg.png';
import logo from '../../../../public/logos/whitelogo.png';
import { formValidation } from './FormValidation';
import { useDispatch } from 'react-redux';
import { setThankyou, submitForm } from '@/Redux/slices/Forms/FormSlice';
import ToastNotification from '../Notification';
import { usePathname } from 'next/navigation';

interface CorporateFormProps {
    onClose: () => void;
    formtype?: any;
}

const CorporateForm: React.FC<CorporateFormProps> = ({ onClose, formtype = 'corporate' }) => {
    const dispatch = useDispatch();
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        firstname: '',
        designation: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        mainBranchAddress: '',
        otherBranches: '',
        trainingsOffered: '',
        country: '',
        message: '',
        demoRequired: false,
        page: '',
        requirements: {
            website: false,
            globalScheduleAndCurrency: false,
            webChat: false,
            elearningPlatform: false,
            digitalMarketing: false,
            leadGeneration: false,
        },
    });

    const pathname = usePathname();

    useEffect(() => {
        const slug = pathname.split('/').filter(Boolean).pop();
        setFormData(prev => ({ ...prev, page: slug || 'homepage' }));
    }, [pathname]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;

        if (name === 'demoRequired') {
            setFormData(prev => ({ ...prev, demoRequired: checked }));
        } else {
            setFormData(prev => ({
                ...prev,
                requirements: {
                    ...prev.requirements,
                    [name]: checked,
                },
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errorMessage = formValidation(formData);
        if (errorMessage) {
            setError(errorMessage);
            return;
        }

        dispatch(submitForm({
            ...formData, formtype,
            lastname: '',
            curriculum: false,
            slug: ''
        }) as any);
        dispatch(setThankyou());
    };

    return (
        <div className="rounded-xl overflow-hidden text-sm">
            {error && <ToastNotification message={error} onClose={() => setError(null)} />}
            <div className="grid grid-cols-1 md:grid-cols-7 items-center gap-x-5">
               
                <div className="relative h-[440px] bg-prime-blue col-span-2 rounded-lg text-white p-6 pb-10 flex flex-col justify-between space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-1">Contact Information</h3>
                        <p className="text-xs mb-4">Fill up the form and our Team will get back to you within 24 hours.</p>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-4">
                                <div className="bg-white rounded-full p-2"><IoCallOutline className="text-prime-blue" /></div>
                                +91 98765 43210
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="bg-white rounded-full p-2"><IoMailOutline className="text-prime-blue" /></div>
                                info@skilldeck.com
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="bg-white rounded-full p-2"><TfiWorld className="text-prime-blue" /></div>
                                https://skilldeck.com
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="bg-white rounded-full p-2"><IoLocationOutline className="text-prime-blue" /></div>
                                Bangalore - India
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6 text-center">
                        <div className="absolute left-0 bottom-0">
                            <Image src={img} alt="img" />
                        </div>
                    </div>
                    <div className="absolute right-3 bottom-6 z-20 place-items-center space-y-2">
                        <p className="font-semibold text-xs">Unlock<br /> Success <br /> Through</p>
                        <Image src={logo} alt="img" className="rounded-none w-20 h-auto" />
                    </div>
                </div>

                {/* Right Form */}
                <form onSubmit={handleSubmit} className="space-y-5 col-span-5">
                {formtype === 'enquiry' && (
                    <div className="text-2xl text-prime-blue font-semibold text-center">Contact Us</div>
                )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input type="text" name="firstname" placeholder="Name" value={formData.firstname} onChange={handleChange} className="py-2 px-2 rounded-md border focus:outline-prime-blue/80" />
                        <input type="text" name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} className="py-2 px-2 rounded-md border focus:outline-prime-blue/80" />
                        <input type="email" name="email" placeholder="Email Id" value={formData.email} onChange={handleChange} className="py-2 px-2 rounded-md border focus:outline-prime-blue/80" />
                        <input type="text" name="phone" placeholder="Phone No." value={formData.phone} onChange={handleChange} className="py-2 px-2 rounded-md border focus:outline-prime-blue/80" />
                        <input type="text" name="website" placeholder="Website" value={formData.website} onChange={handleChange} className="py-2 px-2 rounded-md border focus:outline-prime-blue/80" />

                        {formtype === 'corporate' && (
                            <>
                                <input type="text" name="mainBranchAddress" placeholder="Main Branch Address" value={formData.mainBranchAddress} onChange={handleChange} className="py-2 px-2 rounded-md border focus:outline-prime-blue/80" />
                                <input type="text" name="otherBranches" placeholder="Other Branches" value={formData.otherBranches} onChange={handleChange} className="py-2 px-2 rounded-md border focus:outline-prime-blue/80" />
                                <input type="text" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} className="py-2 px-2 rounded-md border focus:outline-prime-blue/80" />
                                <textarea name="trainingsOffered" placeholder="Trainings Offered" rows={2} value={formData.trainingsOffered} onChange={handleChange} className="input col-span-2 py-2 px-2 rounded-md border focus:outline-prime-blue/80 " />
                            </>
                        )}

                        {formtype === 'enquiry' && (
                            <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="py-2 px-2 rounded-md border focus:outline-prime-blue/80" />
                        )}
                        {formtype === 'enquiry' && (
                            <textarea name="message" placeholder="Message" rows={2} value={formData.message} onChange={handleChange} className="input col-span-2 py-2 px-2 rounded-md border focus:outline-prime-blue/80 " />
                        )}
                    </div>

                    {formtype === 'corporate' && (
                        <div className="flex gap-4 items-start">
                            <p className="font-medium text-nowrap">I Need :</p>
                            <div className="flex flex-wrap gap-4">
                                {[
                                    ['website', 'Website'],
                                    ['globalScheduleAndCurrency', 'Global Schedule Time Zone & Currency Management'],
                                    ['webChat', 'Web Chat'],
                                    ['elearningPlatform', 'E-learning Platform'],
                                    ['digitalMarketing', 'Digital Marketing Services'],
                                    ['leadGeneration', 'Lead Generation'],
                                ].map(([key, label]) => (
                                    <label key={key} className="inline-flex text-sm items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name={key}
                                            checked={formData.requirements[key as keyof typeof formData.requirements]}
                                            onChange={handleCheckboxChange}
                                        />
                                        {label}
                                    </label>
                                ))}
                            </div>
                        </div>
                    )}

                    {formtype === 'enquiry' && (
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                name="demoRequired"
                                checked={formData.demoRequired}
                                onChange={handleCheckboxChange}
                            />
                            <label>Demo Required?</label>
                        </div>
                    )}

                    <div className="mt-4 flex justify-center gap-4">
                        <button type="submit" className="px-20 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CorporateForm;
