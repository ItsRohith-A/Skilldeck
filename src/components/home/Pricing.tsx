import React from 'react';
import { useRouter } from 'next/router';
import PricingCard from './PricingCard'; // Make sure to adjust the import path if necessary

// Main Pricing component in TSX
function Pricing() {
    const router = useRouter(); // Initialize useRouter

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


    const handleStartNow = (selectedPlan: { plan: string; price: number, features: string[] }) => {
        // Navigate to the /payment page with the selected plan data
        router.push({
            pathname: '/payment',
            query: { plan: selectedPlan.plan, price: selectedPlan.price, features: JSON.stringify(selectedPlan.features), },
        });
    };

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
                        onStartNow={handleStartNow} // Pass the handler
                    />
                ))}
            </div>
        </div>
    );
}

export default Pricing;
