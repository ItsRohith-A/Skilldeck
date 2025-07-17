// components/FormModal.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/Redux/rootReducer';
import CorporateForm from './CorporateForm';
import { closeForm } from '@/Redux/slices/Forms/FormSlice';

const FormModal = () => {
  const dispatch = useDispatch();
  const { isFormOpen, type } = useSelector((state: RootState) => state.form);

  if (!isFormOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white rounded-xl p-4 md:p-6 relative w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-xl animate-fadeIn">
        <button
          className="absolute top-3 right-3 text-xl font-bold text-gray-500 hover:text-gray-700"
          onClick={() => dispatch(closeForm())}
          aria-label="Close form"
        >
          &times;
        </button>
        <CorporateForm onClose={() => dispatch(closeForm())} formtype={type} />
      </div>
    </div>
  );
};

export default FormModal;
