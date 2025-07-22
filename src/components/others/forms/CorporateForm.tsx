import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
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
const requirementOptions = [
    { label: 'Website', value: 'website' },
    { label: 'Global Schedule Time Zone & Currency Management', value: 'globalScheduleAndCurrency' },
    { label: 'Web Chat', value: 'webChat' },
    { label: 'E-learning Platform', value: 'elearningPlatform' },
    { label: 'Digital Marketing Services', value: 'digitalMarketing' },
    { label: 'Lead Generation', value: 'leadGeneration' },
    { label: 'CRM', value: 'crm' },
    { label: 'CMS', value: 'cms' },
    { label: 'Event Management for global currencies & timezones', value: 'eventManagementForGlobalCurrenciesAndTimezones' },
];
const CorporateForm: React.FC<CorporateFormProps> = ({ onClose, formtype = 'corporate' }) => {
    const dispatch = useDispatch();
    const [showThankyou, setShowThankyou] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
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
        about_company: '',
        demo: false,
        page: '',
        requirements: [] as string[],
    });

    const pathname = usePathname();

    const dropdownRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const handleClickOutside = (event: { target: any; }) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);



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

        if (name === 'demo') {
            setFormData(prev => ({ ...prev, demo: checked }));
        } else {
            if (checked) {
                setFormData(prev => ({
                    ...prev,
                    requirements: [...prev.requirements, name],
                }));
            } else {
                setFormData(prev => ({
                    ...prev,
                    requirements: prev.requirements.filter(req => req !== name),
                }));
            }
        }

    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const errorMessage = formValidation(formData);
        if (errorMessage) {
            setError(errorMessage);
            return;
        }
        console.log("Submitted Form Data:", formData);
        dispatch(submitForm({
            ...formData, formtype,
            curriculum: false,
            slug: ''
        }) as any);
        dispatch(setThankyou());
        setShowThankyou(true);
    };

    return (
        <div className="rounded-xl overflow-hidden text-sm">
            {error && <ToastNotification message={error} onClose={() => setError(null)} />}
            <div className="lg:grid grid-cols-1 md:grid-cols-7 items-center gap-x-5">

                <div className="hidden lg:block relative h-[480px] bg-prime-blue col-span-2 rounded-lg text-white p-6 pb-10  flex-col justify-between space-y-4">
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
                <form onSubmit={handleSubmit} className="space-y-3 col-span-5">
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
                                <textarea name="trainingsOffered" placeholder="Trainings Offered" rows={1} value={formData.trainingsOffered} onChange={handleChange} className="input col-span-2 py-2 px-2 rounded-md border focus:outline-prime-blue/80 " />
                                <textarea name="about_company" placeholder="About Company" rows={2} value={formData.about_company} onChange={handleChange} className="input col-span-2 py-2 px-2 rounded-md border focus:outline-prime-blue/80 " />
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
                        <div className="w-full space-y-2 relative" ref={dropdownRef}>
                            <label className="font-medium block mb-1">I Need:</label>

                            {/* Trigger */}
                            <div
                                className="w-full border px-3 py-2 rounded-md bg-white cursor-pointer relative"
                                onClick={() => setDropdownOpen(prev => !prev)}
                            >
                                {formData.requirements.length > 0
                                    ? `${formData.requirements.length} selected`
                                    : 'Select options'}
                                <span className="absolute right-3 top-2.5 text-gray-500 text-sm">▾</span>
                            </div>

                            {/* Dropdown */}
                            {dropdownOpen && (
                                <div
                                    className="absolute bottom-12 w-full bg-white border border-gray-300 rounded-md shadow-md z-50 max-h-48 overflow-y-auto"
                                >
                                    {requirementOptions.map(opt => (
                                        <label
                                            key={opt.value}
                                            className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer gap-2"
                                        >
                                            <input
                                                type="checkbox"
                                                checked={formData.requirements.includes(opt.value)}
                                                onChange={(e) => {
                                                    e.stopPropagation();
                                                    const exists = formData.requirements.includes(opt.value);
                                                    setFormData(prev => ({
                                                        ...prev,
                                                        requirements: exists
                                                            ? prev.requirements.filter(req => req !== opt.value)
                                                            : [...prev.requirements, opt.value],
                                                    }));
                                                }}
                                            />
                                            <span>{opt.label}</span>
                                        </label>
                                    ))}
                                </div>
                            )}

                            {/* Selected Tags */}
                            <div className="flex flex-wrap gap-1 mt-2">
                                {formData.requirements.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-1 bg-prime-blue/10 text-prime-blue border border-prime-blue rounded-full px-2 py-0.5 text-xs"
                                    >
                                        {requirementOptions.find(opt => opt.value === item)?.label || item}
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setFormData(prev => ({
                                                    ...prev,
                                                    requirements: prev.requirements.filter(req => req !== item),
                                                }))
                                            }
                                            className="text-prime-blue text-sm hover:text-red-500"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}



                    {formtype === 'enquiry' && (
                        <div className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                name="demo"
                                checked={formData.demo}
                                onChange={handleCheckboxChange}
                            />
                            <label>Demo Required?</label>
                        </div>
                    )}

                    <div className="mt-4 flex justify-center gap-4">
                        <button type="submit" className="px-20 py-2 bg-prime-blue/80 hover:bg-prime-blue duration-300 text-white rounded-md font-semibold">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
            {showThankyou && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm w-full">
                        <h2 className="text-xl font-semibold text-prime-blue mb-3">Thank You!</h2>
                        <p className="text-sm mb-5">We have received your request. Our team will get back to you within 24 hours.</p>
                        <button
                            onClick={() => {
                                setShowThankyou(false);
                                onClose(); // Close the form
                            }}
                            className="bg-prime-blue text-white px-5 py-2 rounded hover:bg-prime-blue/90"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default CorporateForm;
