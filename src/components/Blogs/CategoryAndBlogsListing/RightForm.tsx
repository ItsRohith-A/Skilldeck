import { openForm, updateFormFields } from '@/Redux/slices/Forms/FormSlice';
import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
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
    <>
      <div className="space-y-2 p-4 rounded-2xl border border-gray-200 shadow-md bg-white sticky top-4">
        <div className="text-center">
          <h2 className="text-lg 2xl:text-xl font-semibold text-prime-dark flex items-center justify-center gap-2">
            Get Your Training Institute Listed!
          </h2>
        </div>

        <div className=" text-sm text-gray-700">
          <p className="text-sm 2xl:text-base text-center">
            To get your institute listed, <strong>please do not call</strong> our phone numbers.
            Kindly send us an email with your company details.
          </p>

          <div className="p-3 bg-yellow-50 border border-yellow-300 rounded-md text-xs leading-relaxed text-yellow-900">
            <span className="font-semibold">Note:</span> Listings will be considered only from
            official company emails. Requests from personal or random emails will not be entertained.
            We prefer submissions from C-level executives or key stakeholders.
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-green-700 bg-green-50 p-3 border border-green-200 rounded-md">
            <FaCheckCircle className="text-green-600 text-2xl" />
            Are you a training institute? Get listed today!
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={triggerForm}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2 rounded-md transition duration-200 shadow-md"
          >
            Fill Details
          </button>
        </div>
      </div>
    </>
  );
};

export default RightForm;
