import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
interface PricingCardProps {
    plan: string;
    price: number;
    features: string[];
    isHighlighted: boolean;
}

function PricingCard({ plan, price, features, isHighlighted }: PricingCardProps) {
    return (
        <div className={`rounded-lg p-4 shadow-md transition ${isHighlighted ? 'bg-prime-blue text-white' : 'bg-white border border-gray-200'
            } hover:shadow-lg ${isHighlighted ? 'hover:bg-prime-blue' : 'hover:border-prime-blue'}`}>
            <h6 className="text-lg font-semibold">{plan}</h6>
            <p className={`text-slate-900 text-3xl font-medium leading-10 ${isHighlighted && 'text-white'} `}>
                ₹{price}/<span className={`text-slate-900 text-xl font-medium leading-10 ${isHighlighted && 'text-white'}`}>Month</span>
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2">
                {features.map((feature, index) => (
                    <li key={index} className={`text-slate-900 text-base font-medium leading-9 ${isHighlighted && 'text-white'} `}>{feature}</li>
                ))}
            </ul>

            <button className={`mt-4 p-4 rounded-lg border border-slate-900 text-base font-medium flex text-slate-900 items-center justify-center gap-4 w-full ${isHighlighted
                && 'bg-white hover:text-prime-blue border-none'}`}>
                Start Now
                <div className="">
                    <FiChevronRight />
                </div>
            </button>
        </div>
    );
}

// Main Pricing component in TSX
function Pricing() {
    const plans = [
        {
            plan: 'Basic',
            price: 149,
            features: [
                'Automation Of Schedules',
                'Payment Gateways',
                'Trainer Module',
                'Testimonials Management',
                'Location Management',
                'Course and Course Category management',
                'Single User',
                'Blog Engine',
                '600 $ Set Up charges First Year Only',
                'Minimum Engagement 1 Year',

            ],
            isHighlighted: false,
        },
        {
            plan: 'Elite',
            price: 249,
            features: [
                'Everything about Plan1 Plus',
                'Analytics Dashboard Access',
                'SEO Module Access',
                'Site Control, Such as Promotional Messages/Banners',
                'Coupons Module',
                'Multiple Role-Based User Management',
                'Patterns Module',
                'Logs Access',
                '800 $ Set Up charges First Year Only',
                'Minimum Engagement 1 Year',
            ],
            isHighlighted: true,
        },
        {
            plan: 'Pro',
            price: 349,
            features: [
                'Everything Of Plan2',
                'Bulk Uploads',
                'E-learning Module Access',
                'Social Media Submission',
                'Task Management',
                'Sales Utility',
                'Customer Profile',
                'Payments Tracking & Analytics',
                '900 $ Set Up charges First Year Only',
                'Minimum Engagement 1 Year',
            ],
            isHighlighted: false,
        }
    ];

    return (
        <div className="container mx-auto my-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {plans.map((plan, index) => (
                    <PricingCard
                        key={index}
                        plan={plan.plan}
                        price={plan.price}
                        features={plan.features}
                        isHighlighted={plan.isHighlighted}
                    />
                ))}
            </div>
        </div>
    );
}

export default Pricing;