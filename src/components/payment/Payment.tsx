import React from 'react';
import { useRouter } from 'next/router';
import PricingCard from '../home/PricingCard'; // Adjust the import path if necessary

const Payment = () => {
    const router = useRouter();
    const { plan, price, features } = router.query; // Access the plan, price, and features from query params

    // Parse features from JSON string
    const featureList = features ? JSON.parse(features as string) : [];

    return (
        <div className="container mx-auto my-12 px-4">
            <h1 className="text-3xl font-semibold">Payment Page</h1>
            <p className="mt-4">Selected Plan: <span className="font-bold">{plan}</span></p>
            <p className="mt-2">Price: <span className="font-bold">${price}</span></p>

            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Features Included:</h2>
                <ul className="list-disc list-inside mt-4 space-y-2">
                    {featureList && featureList.map((feature: string, index: number) => (
                        <li key={index} className="text-gray-800 text-base font-medium">{feature.trim()}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-8">
                <PricingCard
                    plan="Elite"
                    price={249}
                    features={["Feature 1", "Feature 2", "Feature 3"]} // Ensure this is always an array
                    isHighlighted={true}
                    onStartNow={(selectedPlan) => {
                        console.log('Selected Plan:', selectedPlan);
                        // Add further logic here
                    }}
                />
            </div>
        </div>
    );
};

export default Payment;
