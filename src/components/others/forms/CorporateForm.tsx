import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { Check, Sparkles, ChevronDown, X, Building2, User, Mail, Phone, Globe, MapPin, Briefcase, MessageSquare, ArrowRight } from 'lucide-react';
import img from '../../../../public/figma-designs/woman_laptop.png';
import logo from '../../../../public/logos/whitelogo.png';
import { formValidation } from './FormValidation';
import { useDispatch } from 'react-redux';
import { setThankyou, submitForm } from '@/Redux/slices/Forms/FormSlice';
import ToastNotification from '../Notification';
import { usePathname } from 'next/navigation';

// ============================================
// Reusable Form Components
// ============================================

interface FormInputProps {
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    icon?: React.ReactNode;
    className?: string;
}

const FormInput: React.FC<FormInputProps> = ({ name, placeholder, value, onChange, type = 'text', icon, className = '' }) => (
    <div className={`relative group ${className}`}>
        {icon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-brand-500 transition-colors">
                {icon}
            </div>
        )}
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`
                w-full py-3.5 rounded-xl border border-gray-200 
                bg-white text-gray-900 placeholder:text-gray-400
                focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500
                hover:border-gray-300 transition-all duration-200
                ${icon ? 'pl-12 pr-4' : 'px-4'}
            `}
        />
    </div>
);

interface FormTextareaProps {
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    rows?: number;
    icon?: React.ReactNode;
    className?: string;
}

const FormTextarea: React.FC<FormTextareaProps> = ({ name, placeholder, value, onChange, rows = 2, icon, className = '' }) => (
    <div className={`relative group ${className}`}>
        {icon && (
            <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-brand-500 transition-colors">
                {icon}
            </div>
        )}
        <textarea
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={rows}
            className={`
                w-full py-3.5 rounded-xl border border-gray-200 
                bg-white text-gray-900 placeholder:text-gray-400
                focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500
                hover:border-gray-300 transition-all duration-200 resize-none
                ${icon ? 'pl-12 pr-4' : 'px-4'}
            `}
        />
    </div>
);

interface FormCheckboxProps {
    checked: boolean;
    onChange: () => void;
    label: string;
}

const FormCheckbox: React.FC<FormCheckboxProps> = ({ checked, onChange, label }) => (
    <label className="flex items-center gap-3 cursor-pointer group" onClick={onChange}>
        <div className={`
            w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-200
            ${checked
                ? 'bg-brand-gradient border-transparent shadow-sm'
                : 'border-gray-300 group-hover:border-brand-400 bg-white'
            }
        `}>
            {checked && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
        </div>
        <span className="text-gray-700 text-sm font-medium select-none">{label}</span>
    </label>
);

interface SectionDividerProps {
    title: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ title }) => (
    <div className="flex items-center gap-3 my-2">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent flex-1" />
        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{title}</span>
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent flex-1" />
    </div>
);

// ============================================
// Main Component
// ============================================

interface CorporateFormProps {
    onClose: () => void;
    formtype?: any;
}

const requirementOptions = [
    { label: 'Website', value: 'website', icon: <Globe className="w-4 h-4" /> },
    { label: 'Global Schedule & Currency', value: 'globalScheduleAndCurrency', icon: <Globe className="w-4 h-4" /> },
    { label: 'Web Chat', value: 'webChat', icon: <MessageSquare className="w-4 h-4" /> },
    { label: 'E-learning Platform', value: 'elearningPlatform', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Digital Marketing', value: 'digitalMarketing', icon: <Sparkles className="w-4 h-4" /> },
    { label: 'Lead Generation', value: 'leadGeneration', icon: <User className="w-4 h-4" /> },
    { label: 'CRM', value: 'crm', icon: <Building2 className="w-4 h-4" /> },
    { label: 'CMS', value: 'cms', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Event Management', value: 'eventManagementForGlobalCurrenciesAndTimezones', icon: <MapPin className="w-4 h-4" /> },
];

const CorporateForm: React.FC<CorporateFormProps> = ({ onClose, formtype = 'corporate' }) => {
    const dispatch = useDispatch();
    const [showThankyou, setShowThankyou] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
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
        const handleClickOutside = (event: { target: any }) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
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
            setFormData(prev => ({
                ...prev,
                requirements: checked
                    ? [...prev.requirements, name]
                    : prev.requirements.filter(req => req !== name),
            }));
        }
    };

    const toggleRequirement = (value: string) => {
        const exists = formData.requirements.includes(value);
        setFormData(prev => ({
            ...prev,
            requirements: exists
                ? prev.requirements.filter(req => req !== value)
                : [...prev.requirements, value],
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errorMessage = formValidation(formData);
        if (errorMessage) {
            setError(errorMessage);
            return;
        }

        setIsSubmitting(true);
        console.log("Submitted Form Data:", formData);
        dispatch(submitForm({
            ...formData, formtype,
            curriculum: false,
            slug: ''
        }) as any);
        dispatch(setThankyou());

        // Small delay for UX
        setTimeout(() => {
            setIsSubmitting(false);
            setShowThankyou(true);
        }, 500);
    };

    return (
        <div className="rounded-2xl overflow-hidden text-sm shadow-2xl">
            {error && <ToastNotification message={error} onClose={() => setError(null)} />}

            <div className="flex flex-col lg:flex-row">
                {/* ========================================
                    Left Panel - Contact Information
                ======================================== */}
                <div className="hidden lg:flex relative w-72 xl:w-80 bg-brand-gradient text-white p-8 pb-0 flex-col justify-between overflow-hidden flex-shrink-0">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-32 -left-10 w-32 h-32 bg-accent-violet/20 rounded-full blur-2xl" />
                    <div className="absolute top-1/2 right-0 w-20 h-20 bg-white/5 rounded-full blur-xl" />

                    <div className="relative z-10 space-y-6">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-xs font-semibold tracking-wide">Get in Touch</span>
                        </div>

                        {/* Heading */}
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
                            <p className="text-sm text-white/75 leading-relaxed">
                                Fill out the form and our team will respond within 24 hours.
                            </p>
                        </div>

                        {/* Contact Items */}
                        <div className="space-y-4 pt-4">
                            <a href="tel:+919036707847" className="flex items-center gap-4 group hover:translate-x-1 transition-transform">
                                <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                    <IoCallOutline className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/60 mb-0.5">Phone</p>
                                    <p className="font-semibold">+91 9036707847</p>
                                </div>
                            </a>
                            <a href="mailto:hello@skilldeck.net" className="flex items-center gap-4 group hover:translate-x-1 transition-transform">
                                <div className="w-11 h-11 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                    <IoMailOutline className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-xs text-white/60 mb-0.5">Email</p>
                                    <p className="font-semibold">hello@skilldeck.net</p>
                                </div>
                            </a>
                        </div>
                    </div>
                    {/* <div className="text-right">
                        <p className="text-[10px] text-white/70 uppercase tracking-widest mb-2">Powered by</p>
                        <Image src={logo} alt="Skilldeck" className="w-20 h-auto ml-auto" />
                    </div> */}
                    {/* Bottom Branding */}
                    <div className="relative z-10 bo flex items-end justify-between mt-8">
                        <Image src={img} alt="Illustration" className="w-96 h-auto opacity-90" />

                    </div>
                </div>

                {/* ========================================
                    Right Panel - Form
                ======================================== */}
                <form onSubmit={handleSubmit} className="flex-1 p-6 sm:p-8 bg-gray-50/80 max-h-[85vh] overflow-y-auto scroll-bar">
                    {/* Form Header */}
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-600 rounded-full px-4 py-1.5 text-xs font-semibold mb-3">
                            <Building2 className="w-3.5 h-3.5" />
                            {formtype === 'corporate' ? 'Corporate Solutions' : 'General Inquiry'}
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            {formtype === 'corporate' ? (
                                <>Scale Your <span className="bg-gradient-ai-color bg-clip-text text-transparent">Training Business</span></>
                            ) : (
                                <>We'd Love to <span className="bg-gradient-ai-color bg-clip-text text-transparent">Hear From You</span></>
                            )}
                        </h2>
                        <p className="text-gray-500 text-sm mt-2">Complete the form below and we'll get back to you shortly.</p>
                    </div>

                    {/* Personal Information Section */}
                    <SectionDivider title="Your Information" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <FormInput
                            name="firstname"
                            placeholder="Full Name"
                            value={formData.firstname}
                            onChange={handleChange}
                            icon={<User className="w-4 h-4" />}
                        />
                        <FormInput
                            name="designation"
                            placeholder="Job Title / Designation"
                            value={formData.designation}
                            onChange={handleChange}
                            icon={<Briefcase className="w-4 h-4" />}
                        />
                        <FormInput
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            icon={<Mail className="w-4 h-4" />}
                        />
                        <FormInput
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            icon={<Phone className="w-4 h-4" />}
                        />

                        {formtype === 'enquiry' && (
                            <FormInput
                                name="country"
                                placeholder="Country"
                                value={formData.country}
                                onChange={handleChange}
                                icon={<MapPin className="w-4 h-4" />}
                            />
                        )}

                        <FormInput
                            name="website"
                            placeholder="Website URL (optional)"
                            value={formData.website}
                            onChange={handleChange}
                            icon={<Globe className="w-4 h-4" />}
                            className={formtype === 'enquiry' ? '' : 'sm:col-span-2'}
                        />
                    </div>

                    {/* Company Information - Corporate Only */}
                    {formtype === 'corporate' && (
                        <>
                            <SectionDivider title="Company Details" />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                <FormInput
                                    name="company"
                                    placeholder="Company Name"
                                    value={formData.company}
                                    onChange={handleChange}
                                    icon={<Building2 className="w-4 h-4" />}
                                />
                                <FormInput
                                    name="mainBranchAddress"
                                    placeholder="Main Branch Location"
                                    value={formData.mainBranchAddress}
                                    onChange={handleChange}
                                    icon={<MapPin className="w-4 h-4" />}
                                />
                                <FormInput
                                    name="otherBranches"
                                    placeholder="Other Branches (if any)"
                                    value={formData.otherBranches}
                                    onChange={handleChange}
                                    icon={<MapPin className="w-4 h-4" />}
                                    className="sm:col-span-2"
                                />
                                <FormTextarea
                                    name="trainingsOffered"
                                    placeholder="What trainings does your company offer?"
                                    value={formData.trainingsOffered}
                                    onChange={handleChange}
                                    rows={2}
                                    className="sm:col-span-2"
                                />
                                <FormTextarea
                                    name="about_company"
                                    placeholder="Tell us about your company and training goals..."
                                    value={formData.about_company}
                                    onChange={handleChange}
                                    rows={3}
                                    className="sm:col-span-2"
                                />
                            </div>

                            {/* Requirements Multi-select */}
                            <SectionDivider title="What Do You Need?" />
                            <div className="mb-6" ref={dropdownRef}>
                                {/* Dropdown Trigger */}
                                <div
                                    className={`
                                        w-full border px-4 py-3.5 rounded-xl bg-white cursor-pointer
                                        flex items-center justify-between gap-3
                                        transition-all duration-200
                                        ${dropdownOpen
                                            ? 'border-brand-500 ring-2 ring-brand-500/20'
                                            : 'border-gray-200 hover:border-gray-300'
                                        }
                                    `}
                                    onClick={() => setDropdownOpen(prev => !prev)}
                                >
                                    <span className={formData.requirements.length > 0 ? 'text-gray-900 font-medium' : 'text-gray-400'}>
                                        {formData.requirements.length > 0
                                            ? `${formData.requirements.length} service${formData.requirements.length > 1 ? 's' : ''} selected`
                                            : 'Select the services you need'}
                                    </span>
                                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
                                </div>

                                {/* Dropdown Menu */}
                                {dropdownOpen && (
                                    <div className="absolute z-50 mt-2 w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] bg-white border border-gray-200 rounded-xl shadow-xl max-h-64 overflow-y-auto scroll-bar animate-fade-in">
                                        {requirementOptions.map(opt => (
                                            <div
                                                key={opt.value}
                                                onClick={() => toggleRequirement(opt.value)}
                                                className={`
                                                    flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors
                                                    ${formData.requirements.includes(opt.value)
                                                        ? 'bg-brand-50'
                                                        : 'hover:bg-gray-50'
                                                    }
                                                `}
                                            >
                                                <div className={`
                                                    w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all flex-shrink-0
                                                    ${formData.requirements.includes(opt.value)
                                                        ? 'bg-brand-gradient border-transparent'
                                                        : 'border-gray-300'
                                                    }
                                                `}>
                                                    {formData.requirements.includes(opt.value) && (
                                                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                                    )}
                                                </div>
                                                <div className="text-gray-400">{opt.icon}</div>
                                                <span className="text-gray-700 text-sm font-medium">{opt.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Selected Tags */}
                                {formData.requirements.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {formData.requirements.map((item) => {
                                            const option = requirementOptions.find(opt => opt.value === item);
                                            return (
                                                <div
                                                    key={item}
                                                    className="group flex items-center gap-2 bg-brand-gradient text-white rounded-full pl-3 pr-2 py-1.5 text-xs font-medium shadow-sm hover:shadow-md transition-shadow"
                                                >
                                                    {option?.label || item}
                                                    <button
                                                        type="button"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            toggleRequirement(item);
                                                        }}
                                                        className="w-4 h-4 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center transition-colors"
                                                    >
                                                        <X className="w-2.5 h-2.5" />
                                                    </button>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </>
                    )}

                    {/* Message - Enquiry Only */}
                    {formtype === 'enquiry' && (
                        <>
                            <SectionDivider title="Your Message" />
                            <div className="mb-6">
                                <FormTextarea
                                    name="message"
                                    placeholder="How can we help you? Share your questions or requirements..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    icon={<MessageSquare className="w-4 h-4" />}
                                />
                            </div>

                            {/* Demo Checkbox */}
                            <div className="mb-6 p-4 bg-brand-50/50 rounded-xl border border-brand-100">
                                <FormCheckbox
                                    checked={formData.demo}
                                    onChange={() => setFormData(prev => ({ ...prev, demo: !prev.demo }))}
                                    label="Yes, I'd like to schedule a product demo"
                                />
                            </div>
                        </>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`
                            w-full py-4 bg-brand-gradient text-white rounded-xl font-semibold
                            flex items-center justify-center gap-2
                            shadow-lg shadow-brand-500/20
                            hover:shadow-xl hover:shadow-brand-500/30
                            transform hover:scale-[1.01] active:scale-[0.99]
                            transition-all duration-200
                            disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100
                        `}
                    >
                        {isSubmitting ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                <span>Sending...</span>
                            </>
                        ) : (
                            <>
                                <span>Send Message</span>
                                <ArrowRight className="w-5 h-5" />
                            </>
                        )}
                    </button>

                    {/* Mobile Contact Info */}
                    <div className="lg:hidden mt-6 pt-6 border-t border-gray-200">
                        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
                            <a href="tel:+919036707847" className="flex items-center gap-2 hover:text-brand-600 transition-colors">
                                <IoCallOutline className="w-4 h-4" />
                                +91 9036707847
                            </a>
                            <span className="text-gray-300">|</span>
                            <a href="mailto:hello@skilldeck.net" className="flex items-center gap-2 hover:text-brand-600 transition-colors">
                                <IoMailOutline className="w-4 h-4" />
                                hello@skilldeck.net
                            </a>
                        </div>
                    </div>
                </form>
            </div>

            {/* ========================================
                Success Modal
            ======================================== */}
            {showThankyou && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
                    <div className="bg-white rounded-3xl shadow-2xl text-center max-w-md w-full relative overflow-hidden animate-fade-in-up">
                        {/* Top Gradient Bar */}
                        <div className="h-2 bg-brand-gradient" />

                        {/* Content */}
                        <div className="p-8 sm:p-10">
                            {/* Success Animation Circle */}
                            <div className="relative w-20 h-20 mx-auto mb-6">
                                <div className="absolute inset-0 bg-brand-gradient rounded-full opacity-20 animate-ping" />
                                <div className="relative w-20 h-20 bg-brand-gradient rounded-full flex items-center justify-center shadow-lg shadow-brand-500/30">
                                    <Check className="w-10 h-10 text-white" strokeWidth={3} />
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-2">
                                Thank You! 🎉
                            </h2>
                            <p className="text-gray-500 mb-8 leading-relaxed">
                                We've received your message and will get back to you within <span className="font-semibold text-gray-700">24 hours</span>.
                            </p>

                            <button
                                onClick={() => {
                                    setShowThankyou(false);
                                    onClose();
                                }}
                                className="
                                    w-full py-3.5 bg-brand-gradient text-white rounded-xl font-semibold
                                    shadow-lg shadow-brand-500/20
                                    hover:shadow-xl hover:shadow-brand-500/30
                                    transform hover:scale-[1.02] active:scale-[0.98]
                                    transition-all duration-200
                                "
                            >
                                Got it, Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CorporateForm;