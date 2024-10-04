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
                $ {price}/<span className={`text-slate-900 text-xl font-medium leading-10 ${isHighlighted && 'text-white'}`}>Month</span>
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
                '600$ Set Up charges First Year Only',
                'Frontend Default Templates - Free',
                'Frontend Custom one time (Optional) - 2000 USD',
                'Minimum Engagement 1 Year',
                'Free hosting',
                'Free CDN',
                'Free Database',
                'Free Load balancer',
            ],
            isHighlighted: false,
        },
        {
            plan: 'Elite',
            price: 249,
            features: [
                'Everything of Basic',
                'Analytics Dashboard Access',
                'SEO Module Access',
                'Site Control, Such as Promotional Messages/Banners',
                'Coupons Module',
                'Multiple Role-Based User Management',
                'Patterns Module',
                'Logs Access',
                '700$ Set Up charges First Year Only',
                'Frontend Default Templates - Free',
                'Frontend Custom one time (Optional) - 2000 USD',
                'Minimum Engagement 1 Year',
                'Location Management & Its SEO',
                'Up to 3 users',
                'External Leads Input',
                'External Sales Input',
            ],
            isHighlighted: true,
        },
        {
            plan: 'Pro',
            price: 349,
            features: [
                'Everything of Elite',
                'Bulk Uploads',
                'E-learning Module Access',
                'Social Media Submission',
                'Task Management',
                'Sales Utility',
                'Customer Profile',
                'Payments Tracking & Analytics',
                '800$ Set Up charges First Year Only',
                'Frontend Default Templates - Free',
                'Frontend Custom one time (Optional) - 2000 USD',
                'Minimum Engagement 1 Year',
                'Inbuilt Webchat',
                'From the second year 15 Hours of free customization',
                'Up to 20 users',
                'Customer Engagement + Revenue Stream IOS & Android Apps',
            ],
            isHighlighted: false,
        }
    ];


    return (
        <div className="container mx-auto my-12 lg:mt-24 px-4 space-y-6" id="pricing">
            <div className="text-3xl text-prime-dark font-semibold text-center">
                Our Pricing
            </div>
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