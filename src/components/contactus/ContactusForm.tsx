'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { formValidation } from '../others/forms/FormValidation';
import { submitForm, setThankyou } from '@/Redux/slices/Forms/FormSlice';
import SuccessModal from '../others/SuccessModal';
import { usePathname } from 'next/navigation';
import ToastNotification from '../others/Notification';
import { User, Mail, Phone, Briefcase, Globe, MapPin, MessageSquare, Send, Loader2 } from 'lucide-react';

const ContactusForm: React.FC = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const formtype = 'enquiry';

  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
    demo: false,
    page: '',
    requirements: []
  });

  useEffect(() => {
    const slug = pathname.split('/').filter(Boolean).pop();
    setFormData(prev => ({ ...prev, page: slug || 'homepage' }));
  }, [pathname]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    if (name === 'demo') {
      setFormData(prev => ({ ...prev, demo: checked }));
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errorMessage = formValidation(formData);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    setIsLoading(true);
    dispatch(submitForm({
      ...formData,
      formtype,
      curriculum: false,
      slug: '',
    }) as any);

    setTimeout(() => {
      dispatch(setThankyou());
      setIsSubmitted(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
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
      demo: false,
      page: '',
      requirements: []
    });
  };

  // Reusable Input Component
  const FormInput = ({
    label,
    name,
    type = 'text',
    value,
    icon: Icon,
    placeholder
  }: {
    label: string;
    name: string;
    type?: string;
    value: string;
    icon: React.ElementType;
    placeholder?: string;
  }) => (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <Icon className="w-5 h-5" />
        </div>
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200"
        />
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50/50 py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {error && <ToastNotification message={error} onClose={() => setError(null)} />}

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-10"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="text-2xl lg:text-3xl font-bold mb-2 bg-gradient-ai-color bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-gray-500">
                Fill out the form below and we'll get back to you soon
              </p>
            </div>

            <div className="space-y-6">
              {/* Name */}
              <FormInput
                label="Full Name"
                name="firstname"
                value={formData.firstname}
                icon={User}
                placeholder="John Doe"
              />

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  icon={Mail}
                  placeholder="john@company.com"
                />
                <FormInput
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  icon={Phone}
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Designation */}
              <FormInput
                label="Designation"
                name="designation"
                value={formData.designation}
                icon={Briefcase}
                placeholder="CEO / Manager / Developer"
              />

              {/* Website & Country */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormInput
                  label="Website"
                  name="website"
                  type="url"
                  value={formData.website}
                  icon={Globe}
                  placeholder="https://yourcompany.com"
                />
                <FormInput
                  label="Country"
                  name="country"
                  value={formData.country}
                  icon={MapPin}
                  placeholder="United States"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-4 text-gray-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements..."
                    rows={4}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-200 resize-none"
                  />
                </div>
              </div>

              {/* Demo Checkbox */}
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    name="demo"
                    checked={formData.demo}
                    onChange={handleCheckboxChange}
                    className="peer sr-only"
                  />
                  <div className="w-6 h-6 border-2 border-gray-300 rounded-lg peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all duration-200 flex items-center justify-center">
                    {formData.demo && (
                      <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                  I would like to request a demo
                </span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-brand-gradient text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <SuccessModal
        isVisible={isSubmitted}
        onClose={() => setIsSubmitted(false)}
        onReset={handleReset}
      />
    </div>
  );
};

export default ContactusForm;

