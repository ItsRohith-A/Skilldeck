// components/FormModal.tsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/Redux/rootReducer';
import CorporateForm from './CorporateForm';
import { closeForm } from '@/Redux/slices/Forms/FormSlice';

const FormModal = () => {
  const dispatch = useDispatch();
  const { isFormOpen, type } = useSelector((state: RootState) => state.form);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFormOpen]);

  if (!isFormOpen) return null;


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={() => dispatch(closeForm())}
    >
      <div
        className="bg-white rounded-2xl p-4 md:p-6 relative w-full md:max-w-4xl 2xl:max-w-5xl md:max-h-[90vh] 2xl:max-h-[95vh] overflow-y-auto shadow-2xl animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-colors z-10"
          onClick={() => dispatch(closeForm())}
          aria-label="Close form"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <CorporateForm onClose={() => dispatch(closeForm())} formtype={type} />
      </div>
    </div>
  );

};

export default FormModal;
