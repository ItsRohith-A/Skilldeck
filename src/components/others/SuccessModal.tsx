import React from 'react';

interface SuccessModalProps {
    isVisible: boolean;
    onClose: () => void;
    onReset: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isVisible, onClose, onReset }) => {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 shadow-lg w-80">
                <h3 className="text-lg font-semibold text-center mb-4">Form Submitted</h3>
                <p className="text-center text-gray-600 mb-4">We will get back to you shortly.</p>
                <div className="flex gap-4">
                    <button
                        onClick={() => {
                            onClose();
                            onReset(); // Reset form data
                        }}
                        className="flex-1 bg-prime-blue text-white py-2 rounded-md"
                    >
                        Fill Another Form
                    </button>
                    <button
                        onClick={() => {
                            window.location.href = '/'; // Redirect to Home
                        }}
                        className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-md"
                    >
                        Go Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;
