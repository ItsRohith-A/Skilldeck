import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface BottomContentProps {
    title1: string;
    desc1: string;
    title2: string;
    desc2: string;
}

const BottomContent: React.FC<BottomContentProps> = ({ title1, desc1, title2, desc2 }) => {
    const [isExpanded1, setIsExpanded1] = useState<boolean>(false);
    const [isExpanded2, setIsExpanded2] = useState<boolean>(false);

    const handleToggle1 = () => {
        setIsExpanded1(prev => !prev);
    };

    const handleToggle2 = () => {
        setIsExpanded2(prev => !prev);
    };

    return (
        <div className="lg:container mt-12 lg:mt-24 mx-4 lg:mx-auto space-y-12">
            <div className="space-y-4 border-2 border-prime-gray rounded-lg overflow-clip">
                {/* First FAQ Section */}
                <div className="bg-white  ">
                    <button
                        onClick={handleToggle1}
                        className="flex w-full items-center justify-between p-4 text-left overflow-hidden"
                    >
                        <span className='text-neutral-800 text-sm lg:text-base font-bold'>{title1}</span>
                        {isExpanded1 ? (
                            <FaChevronUp className="text-gray-500" />
                        ) : (
                            <FaChevronDown className="text-gray-500" />
                        )}
                    </button>
                    {isExpanded1 && (
                        <div className="p-4 text-neutral-500 text-sm lg:text-base font-normal">
                            {desc1}
                        </div>
                    )}
                </div>
                <hr />
                {/* Second FAQ Section */}
                <div className="bg-white  ">
                    <button
                        onClick={handleToggle2}
                        className="flex w-full items-center  justify-between p-4 text-left overflow-hidden"
                    >
                        <span className='text-neutral-800 text-sm lg:text-base font-bold'>{title2}</span>
                        {isExpanded2 ? (
                            <FaChevronUp className="text-gray-500" />
                        ) : (
                            <FaChevronDown className="text-gray-500" />
                        )}
                    </button>
                    {isExpanded2 && (
                        <div className="p-4 text-neutral-500 text-sm lg:text-base font-normal">
                            {desc2}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BottomContent;
