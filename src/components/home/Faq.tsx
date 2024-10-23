import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { faqData } from '../Data/faqdata';

interface Faq {
    title: string;
    desc: string;
}

const Faq: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setExpandedIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <div className="lg:container mt-12 lg:mt-24 mx-4 lg:mx-auto">
            <div className="text-center font-bold text-lg lg:text-2xl"> FAQ</div>
            <div className="space-y-4 border-2 border-prime-gray rounded-lg overflow-clip mt-6 lg:mt-12">
                {/* Map over the FAQ data */}
                {faqData.map((faq: Faq, index: number) => (
                    <div key={index} className="bg-white">
                        <button
                            onClick={() => handleToggle(index)}
                            className="flex w-full items-center justify-between p-4 text-left overflow-hidden"
                        >
                            <span className="text-neutral-800 text-sm lg:text-base font-bold pr-2 lg:pr-6">
                                {faq.title}
                            </span>
                            {expandedIndex === index ? (
                                <div className="">
                                    <FaChevronUp className="text-gray-500" />
                                </div>
                            ) : (
                                <div className="">
                                    <FaChevronDown className="text-gray-500" />
                                </div>
                            )}
                        </button>
                        {expandedIndex === index && (
                            <div className="p-4 text-neutral-600 text-sm lg:text-base font-normal pr-2 lg:pr-6">
                                {faq.desc}
                            </div>
                        )}
                        {index < faqData.length - 1 && <hr />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
