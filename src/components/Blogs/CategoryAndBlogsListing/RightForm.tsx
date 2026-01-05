import { openForm, updateFormFields } from '@/Redux/slices/Forms/FormSlice';
import React, { useState } from 'react';
import { CheckCircle, Send, AlertCircle } from 'lucide-react';
import { useDispatch } from 'react-redux';

const RightForm = () => {
  const dispatch = useDispatch();
  const triggerForm = () => {
    dispatch(openForm());
    dispatch(updateFormFields({
      id: 'home-banner',
      type: 'corporate',
      formId: 1,
      curriculum: false,
      slug: '',
    }));
  };
  return (
    <div className="space-y-4 p-5 rounded-2xl border border-gray-100 shadow-xl bg-white lg:sticky top-4">
      <div className="text-center">
        <h2 className="text-lg 2xl:text-xl font-bold bg-gradient-ai-color bg-clip-text text-transparent">
          Get Your Training Institute Listed!
        </h2>
      </div>

      <div className="space-y-3 text-sm text-gray-700">
        <p className="text-sm 2xl:text-base text-center">
          To get your institute listed, <strong>please do not call</strong> our phone numbers.
          Kindly send us an email with your company details.
        </p>

        <div className="flex items-start gap-3 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs leading-relaxed text-amber-800">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-amber-600 mt-0.5" />
          <div>
            <span className="font-semibold">Note:</span> Listings will be considered only from
            official company emails. Requests from personal or random emails will not be entertained.
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm font-medium text-green-700 bg-green-50 p-3 border border-green-200 rounded-xl">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <CheckCircle className="w-5 h-5 text-green-600" />
          </div>
          Are you a training institute? Get listed today!
        </div>
      </div>

      <div className="flex justify-center pt-2">
        <button
          onClick={triggerForm}
          className="inline-flex items-center gap-2 bg-brand-gradient hover:shadow-lg hover:shadow-blue-500/25 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
        >
          <Send className="w-4 h-4" />
          Fill Details
        </button>
      </div>
    </div>
  );
};

export default RightForm;

