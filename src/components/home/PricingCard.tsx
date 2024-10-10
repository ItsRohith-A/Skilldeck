import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

interface PricingCardProps {
    plan: string;
    price: number;
    features: string[]; // Features should always be an array
    isHighlighted?: boolean;
    onStartNow?: (selectedPlan: { plan: string; price: number; features: string[] }) => void;
}

function PricingCard({ plan, price, features = [], isHighlighted = false, onStartNow }: PricingCardProps) {
    return (
        <div className={`rounded-lg p-4 shadow-md transition flex flex-col justify-between ${isHighlighted ? 'bg-prime-blue text-white' : 'bg-white border border-gray-200'
            } hover:shadow-lg ${isHighlighted ? 'hover:bg-prime-blue' : 'hover:border-prime-blue'}`}>
            <h6 className="text-lg font-semibold">{plan}</h6>
            <p className={`text-slate-900 text-3xl font-medium leading-10 ${isHighlighted && 'text-white'}`}>
                ${price}/<span className={`text-slate-900 text-xl font-medium leading-10 ${isHighlighted && 'text-white'}`}>Month</span>
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
                {Array.isArray(features) && features.length > 0 ? (
                    features.map((feature, index) => (
                        <li key={index} className={`text-slate-900 text-base font-medium leading-9 ${isHighlighted && 'text-white'}`}>{feature}</li>
                    ))
                ) : (
                    <li className={`text-slate-900 text-base font-medium leading-9 ${isHighlighted && 'text-white'}`}>No features available</li>
                )}
            </ul>

            <button
                className={`mt-4 p-4 rounded-lg border border-slate-900 text-base font-medium flex text-slate-900 items-center justify-center gap-4 w-full ${isHighlighted
                    && 'bg-white hover:text-prime-blue border-none'}`}
                onClick={() => onStartNow && onStartNow({ plan, price, features })}
            >
                Start Now
                <div className="">
                    <FiChevronRight />
                </div>
            </button>
        </div>
    );
}

export default PricingCard;
