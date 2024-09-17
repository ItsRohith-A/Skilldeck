import React from 'react'

function Pricing() {
    return (
        <div className="container mx-auto my-12">
            <div className='flex justify-center gap-4'>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:border-blue-500 hover:shadow-lg transition">
                    <div className='mt-2'>
                        <h6 className="text-lg font-semibold">Basic</h6>
                        <p className='text-3xl font-bold'>
                            ₹10000/<span className='text-base font-normal'>Month</span>
                        </p>
                    </div>
                    <ul className='list-disc list-inside mt-4 space-y-2'>
                        <li>Automation Of Schedules</li>
                        <li>Payment Gateways</li>
                        <li>Trainer Module</li>
                        <li>Testimonials Management</li>
                        <li>Location Management</li>
                        <li>Course and Course Category management</li>
                        <li>Single User</li>
                        <li>Blog Engine</li>
                        <li>49999 Set Up charges First Year Only</li>
                        <li>One time Buy Out- 399000</li>
                        <li>Minimum Engagement 1 Year</li>
                        <li>Frontend, servers, domain & others to be provided by the client</li>
                    </ul>
                    <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg border border-transparent hover:bg-blue-600'>
                        Start Now
                    </button>
                </div>
                <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
                    <h6 className="text-lg font-semibold">Elite</h6>
                    <p className='text-3xl font-bold'>
                        ₹15000/<span className='text-base font-normal'>Month</span>
                    </p>
                    <ul className='list-disc list-inside mt-4 space-y-2'>
                        <li>Everything about Plan1 Plus</li>
                        <li>Analytics Dashboard Access</li>
                        <li>SEO Module Access</li>
                        <li>Site Control, Such as Promotional Messages/Banners</li>
                        <li>Coupons Module</li>
                        <li>Multiple Role-Based User Management</li>
                        <li>Patterns Module</li>
                        <li>Logs Access</li>
                        <li>59999 Set Up charges First Year Only</li>
                        <li>499000</li>
                        <li>Minimum Engagement 1 Year</li>
                        <li>Frontend, servers, domain & others to be provided by the client</li>
                    </ul>
                    <button className='mt-4 bg-white text-blue-500 py-2 px-4 rounded-lg border border-blue-500 hover:bg-blue-50'>
                        Start Now
                    </button>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:border-blue-500 hover:shadow-lg transition">
                    <div className='mt-2'>
                        <h6 className="text-lg font-semibold">Pro</h6>
                        <p className='text-3xl font-bold'>
                            ₹20000/<span className='text-base font-normal'>Month</span>
                        </p>
                    </div>
                    <ul className='list-disc list-inside mt-4 space-y-2'>
                        <li>Everything Of Plan2</li>
                        <li>Bulk Uploads</li>
                        <li>E-learning Module Access</li>
                        <li>Social Media Submission</li>
                        <li>Task Management</li>
                        <li>Sales Utility</li>
                        <li>Customer Profile</li>
                        <li>Payments Tracking & Analytics</li>
                        <li>69999 Set Up charges First Year Only</li>
                        <li>599000</li>
                        <li>Minimum Engagement 1 Year</li>
                        <li>Frontend, servers, domain & others to be provided by the client</li>
                    </ul>
                    <button className='mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg border border-transparent hover:bg-blue-600'>
                        Start Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pricing
