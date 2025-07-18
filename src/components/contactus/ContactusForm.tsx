'use client';

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { formValidation } from '../others/forms/FormValidation';
import { submitForm, setThankyou } from '@/Redux/slices/Forms/FormSlice';
import SuccessModal from '../others/SuccessModal';
import { usePathname } from 'next/navigation';
import ToastNotification from '../others/Notification';

const ContactusForm: React.FC = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const formtype = 'enquiry';

  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errorMessage = formValidation(formData);
    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    dispatch(submitForm({
      ...formData,
      formtype,
      curriculum: false,
      slug: '',
    }) as any);
    dispatch(setThankyou());
    setIsSubmitted(true);
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

  return (
    <div className="container mx-auto px-4">
      {error && <ToastNotification message={error} onClose={() => setError(null)} />}
      <form onSubmit={handleSubmit} className="p-6 rounded-2xl border border-prime-blue flex flex-col gap-4">
        <h2 className="text-prime-blue text-lg text-center font-semibold">
          Fill out the following form with all the details
        </h2>

        <label className="text-prime-dark font-medium">
          First Name
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            className="w-full p-3 mt-1 bg-white rounded-md border border-zinc-200"
          />
        </label>

        <div className="flex flex-col sm:flex-row gap-6">
          <label className="text-prime-dark font-medium w-full">
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-1 bg-white rounded-md border border-zinc-200"
            />
          </label>

          <label className="text-prime-dark font-medium w-full">
            Phone
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 mt-1 bg-white rounded-md border border-zinc-200"
            />
          </label>
        </div>

        <label className="text-prime-dark font-medium">
          Designation
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full p-3 mt-1 bg-white rounded-md border border-zinc-200"
          />
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="text-prime-dark font-medium">
            Website
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full p-3 mt-1 bg-white rounded-md border border-zinc-200"
            />
          </label>

          <label className="text-prime-dark font-medium">
            Country
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-3 mt-1 bg-white rounded-md border border-zinc-200"
            />
          </label>
        </div>

        <label className="text-prime-dark font-medium">
          Message
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 mt-1 bg-white rounded-md border border-zinc-200"
          />
        </label>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            name="demo"
            checked={formData.demo}
            onChange={handleCheckboxChange}
          />
          <label className="text-prime-dark font-medium">Demo Required?</label>
        </div>

        <div className="mt-4 flex justify-center gap-4">
          <button
            type="submit"
            className="lg:w-2/5 py-3 px-4 bg-prime-dark hover:text-prime-blue text-white rounded-md"
          >
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
