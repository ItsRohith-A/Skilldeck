import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logos/mainlogo.svg'
import PricingTable from '../home/PricingTable'
const UserTable = () => {
    return (

        <div className="p-6 bg-white rounded-lg md:shadow-lg ">
            <table className="min-w-full table-auto border-collapse border border-gray-200 overflow-x-scroll md:overflow-x-hidden">
                <thead>
                    <tr className="bg-gray-100 top-0 sticky ">
                        <th className="px-4 py-2 border border-gray-200">Feature</th>
                        <th className="px-4 py-2 border border-gray-200">WordPress</th>
                        <th className="px-4 py-2 border border-gray-200">Custom</th>
                        <th className="px-4 py-2 border border-gray-200">
                            <Image src={logo} alt='-' className='h-10 mx-auto my-2 w-auto' />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Servers</td>
                        <td className="px-4 py-2 border border-gray-200">Usually shared</td>
                        <td className="px-4 py-2 border border-gray-200">Usually Basic/Limited Resources</td>
                        <td className="px-4 py-2 border border-gray-200">Best Performing, High Bandwidth & Resources</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Website Frontend Builder</td>
                        <td className="px-4 py-2 border border-gray-200">Custom</td>
                        <td className="px-4 py-2 border border-gray-200">React Js</td>
                        <td className="px-4 py-2 border border-gray-200">React Js</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Website UI/UX</td>
                        <td className="px-4 py-2 border border-gray-200">Usually bad</td>
                        <td className="px-4 py-2 border border-gray-200">Average - good</td>
                        <td className="px-4 py-2 border border-gray-200">Advanced, high performing, beautiful</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Technology/Backend</td>
                        <td className="px-4 py-2 border border-gray-200">PHP - Community</td>
                        <td className="px-4 py-2 border border-gray-200">Custom</td>
                        <td className="px-4 py-2 border border-gray-200">MERN Stack</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Security</td>
                        <td className="px-4 py-2 border border-gray-200">Not Really Secure</td>
                        <td className="px-4 py-2 border border-gray-200">Depends</td>
                        <td className="px-4 py-2 border border-gray-200">Highly Secure</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Website Performance</td>
                        <td className="px-4 py-2 border border-gray-200">Poor</td>
                        <td className="px-4 py-2 border border-gray-200">Average - poor</td>
                        <td className="px-4 py-2 border border-gray-200">Best</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Load Balancers</td>
                        <td className="px-4 py-2 border border-gray-200">Depends</td>
                        <td className="px-4 py-2 border border-gray-200">NA/Depends</td>
                        <td className="px-4 py-2 border border-gray-200">Implemented</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">CDN</td>
                        <td className="px-4 py-2 border border-gray-200">Depends On Developer</td>
                        <td className="px-4 py-2 border border-gray-200">Depends On Developer</td>
                        <td className="px-4 py-2 border border-gray-200">Implemented</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Responsiveness</td>
                        <td className="px-4 py-2 border border-gray-200">Not Assured</td>
                        <td className="px-4 py-2 border border-gray-200">Depends</td>
                        <td className="px-4 py-2 border border-gray-200">Taken Care</td>
                    </tr>
                    <tr>
                        <td colSpan={4} className="py-6 text-center font-bold text-2xl">Features</td>
                    </tr>
                    {/* Features */}
                    <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Schedules Management</td>
                        <td className="px-4 py-2 border border-gray-200">Plugin & partial</td>
                        <td className="px-4 py-2 border border-gray-200">Depends on Requirements</td>
                        <td className="px-4 py-2 border border-gray-200">Best and automated</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Outdated schedules auto-delete</td>
                        <td className="px-4 py-2 border border-gray-200">Manually eliminated</td>
                        <td className="px-4 py-2 border border-gray-200">Depends on Requirements</td>
                        <td className="px-4 py-2 border border-gray-200">Deletes Automatically</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Publish schedules for multiple cities at one go</td>
                        <td className="px-4 py-2 border border-gray-200">One at a go and manual</td>
                        <td className="px-4 py-2 border border-gray-200">Depends on Requirements</td>
                        <td className="px-4 py-2 border border-gray-200">Automated & published in bulk</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Beautiful trainer management module</td>
                        <td className="px-4 py-2 border border-gray-200">Not available</td>
                        <td className="px-4 py-2 border border-gray-200">Depends on Requirements</td>
                        <td className="px-4 py-2 border border-gray-200">Frontend</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">SEO Implementations</td>
                        <td className="px-4 py-2 border border-gray-200">Limited</td>
                        <td className="px-4 py-2 border border-gray-200">Depends on Requirements</td>
                        <td className="px-4 py-2 border border-gray-200">Advanced & Automated</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Multicurrency</td>
                        <td className="px-4 py-2 border border-gray-200">Purchase Plugins</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Respective Timezones Display</td>
                        <td className="px-4 py-2 border border-gray-200">Not available</td>
                        <td className="px-4 py-2 border border-gray-200">Depends on Requirements</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Pay in any Currency</td>
                        <td className="px-4 py-2 border border-gray-200">Depends/Plugins</td>
                        <td className="px-4 py-2 border border-gray-200">Depends on Requirements</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Pay On the Platform itself</td>
                        <td className="px-4 py-2 border border-gray-200">Ignored/not known</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Auto-track payments and automated emails</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                        <td className="px-4 py-2 border border-gray-200">Depends on Requirements</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Automatic invoice generation & sent</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                        <td className="px-4 py-2 border border-gray-200">Depends on Requirements</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Lead captures and auto-responses</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                        <td className="px-4 py-2 border border-gray-200">Depends on Requirements</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Multiple Global Payment Gateways Integration</td>
                        <td className="px-4 py-2 border border-gray-200">Can Be Integrated</td>
                        <td className="px-4 py-2 border border-gray-200">Can Be Developed</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Schedules Forecast & suggestions</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">City and country management</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Coupons management</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                        <td className="px-4 py-2 border border-gray-200">Can Be Developed</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Role Based on User logs</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">User-based Access to the platform</td>
                        <td className="px-4 py-2 border border-gray-200">Available but not relevant</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>

                    {/* Operations--------------------------------------- */}
                    <tr>
                        <td colSpan={4} className="py-6 text-center font-bold text-2xl">Operations</td>
                    </tr>

                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Operational Cost</td>
                        <td className="px-4 py-2 border border-gray-200">Very High</td>
                        <td className="px-4 py-2 border border-gray-200">High</td>
                        <td className="px-4 py-2 border border-gray-200">Low</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Schedules Analytics</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available on Demand</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Schedules Forecast</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Trainers Management</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available on Demand</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Trainer analytics</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available on Demand</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Schedules Management</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available on Demand</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">E-learning Module</td>
                        <td className="px-4 py-2 border border-gray-200">Plugins</td>
                        <td className="px-4 py-2 border border-gray-200">Available on Demand</td>
                        <td className="px-4 py-2 border border-gray-200">In progress</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Project Management Tool</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">In progress</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Reports & Dashboards</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Lead Capture</td>
                        <td className="px-4 py-2 border border-gray-200">Available & Simple</td>
                        <td className="px-4 py-2 border border-gray-200">Available on Demand</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Lead analytics</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available on Demand</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Payments Tracking</td>
                        <td className="px-4 py-2 border border-gray-200">Available & Simple</td>
                        <td className="px-4 py-2 border border-gray-200">Available on Demand</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Payment analytics</td>
                        <td className="px-4 py-2 border border-gray-200">Available & Simple</td>
                        <td className="px-4 py-2 border border-gray-200">Available on Demand</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Learners Attendance Tracking</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">In progress</td>
                    </tr>

                    {/* Marketing--------------------------------------- */}
                    <tr>
                        <td colSpan={4} className="py-6 text-center font-bold text-2xl">Marketing</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Google Ranking Stability</td>
                        <td className="px-4 py-2 border border-gray-200">Poor</td>
                        <td className="px-4 py-2 border border-gray-200">Average to Poor</td>
                        <td className="px-4 py-2 border border-gray-200">Assured & best</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Marketing ROI</td>
                        <td className="px-4 py-2 border border-gray-200">Poor</td>
                        <td className="px-4 py-2 border border-gray-200">Average to Poor</td>
                        <td className="px-4 py-2 border border-gray-200">Best</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Marketing Automation</td>
                        <td className="px-4 py-2 border border-gray-200">Poor</td>
                        <td className="px-4 py-2 border border-gray-200">Average to Poor</td>
                        <td className="px-4 py-2 border border-gray-200">Matured and inbuilt</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">SEO automation & Bulk Upload</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">High Effort</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">SEO Audit</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available on Demand</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Content analytics</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Schedules Analytics</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Lead Analytics</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available on Demand</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Payment Analytics</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                        <td className="px-4 py-2 border border-gray-200">Available on Demand</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Conversion Rates</td>
                        <td className="px-4 py-2 border border-gray-200">Poor to Average</td>
                        <td className="px-4 py-2 border border-gray-200">Average to Poor</td>
                        <td className="px-4 py-2 border border-gray-200">Usually High</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">User Experience</td>
                        <td className="px-4 py-2 border border-gray-200">Poor to Average</td>
                        <td className="px-4 py-2 border border-gray-200">Average to Poor</td>
                        <td className="px-4 py-2 border border-gray-200">Usually High</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Social Media Publishing</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">In Progress</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Project Management Tool</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">In Progress</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Schemas Implementation</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Site Level SEO</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">SEO Data repository</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Character and word count by URL</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Global Expansion Of Business Easily</td>
                        <td className="px-4 py-2 border border-gray-200">very Difficult & Manual</td>
                        <td className="px-4 py-2 border border-gray-200">very Difficult & Manual</td>
                        <td className="px-4 py-2 border border-gray-200">Advanced, Automated & Inbuilt</td>
                    </tr>


                    {/* Content Management--------------------------------------- */}
                    <tr className=''>
                        <td colSpan={4} className="py-6"> <PricingTable /></td>
                    </tr>
                    {/* Content Management--------------------------------------- */}
                    <tr>
                        <td colSpan={4} className="py-6 text-center font-bold text-2xl">Content Management</td>
                    </tr>


                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Course Content Publishing</td>
                        <td className="px-4 py-2 border border-gray-200">Hectic</td>
                        <td className="px-4 py-2 border border-gray-200">Custom Built</td>
                        <td className="px-4 py-2 border border-gray-200">Advanced with all fields</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Category Page publishing</td>
                        <td className="px-4 py-2 border border-gray-200">Easy</td>
                        <td className="px-4 py-2 border border-gray-200">Depends</td>
                        <td className="px-4 py-2 border border-gray-200">Easy</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Trainer pages publishing</td>
                        <td className="px-4 py-2 border border-gray-200">NA/Publish as pages/Posts</td>
                        <td className="px-4 py-2 border border-gray-200">Depends</td>
                        <td className="px-4 py-2 border border-gray-200">Separate Module Built to manage</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Blog Engine</td>
                        <td className="px-4 py-2 border border-gray-200">Advanced & universal</td>
                        <td className="px-4 py-2 border border-gray-200">Depends</td>
                        <td className="px-4 py-2 border border-gray-200">Advanced & Custom</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">City pages automatically publish</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Automated/Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">City pages SEO bulk upload</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available & Automated</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Testimonials Module and Bulk Upload</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available & Automated</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Bulk Upload Across</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available & Automated</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Media Management</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                        <td className="px-4 py-2 border border-gray-200">Depends</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Ease of use</td>
                        <td className="px-4 py-2 border border-gray-200">Difficult</td>
                        <td className="px-4 py-2 border border-gray-200">Custom Built</td>
                        <td className="px-4 py-2 border border-gray-200">Easy</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Sitelevel Communication/ribbons management</td>
                        <td className="px-4 py-2 border border-gray-200">Plugin Needed/NA</td>
                        <td className="px-4 py-2 border border-gray-200">Depends</td>
                        <td className="px-4 py-2 border border-gray-200">Available & Easy to use</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Sitelevel header control</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                        <td className="px-4 py-2 border border-gray-200">Depends</td>
                        <td className="px-4 py-2 border border-gray-200">Available & Easy to use</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Sitelevel footer control</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                        <td className="px-4 py-2 border border-gray-200">Depends</td>
                        <td className="px-4 py-2 border border-gray-200">Available & Easy to use</td>
                    </tr>

                    {/* Sales Team--------------------------------------- */}
                    <tr>
                        <td colSpan={4} className="py-6 text-center font-bold text-2xl">Sales Team</td>
                    </tr>

                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Realtime Currency Converter</td>
                        <td className="px-4 py-2 border border-gray-200">NA/Plugin Needed</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Brochure Download and Share /Trigger by email From the Backend</td>
                        <td className="px-4 py-2 border border-gray-200">NA/Plugin Needed</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Course price Repository</td>
                        <td className="px-4 py-2 border border-gray-200">NA/Plugin Needed</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Coupon Code Management</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                        <td className="px-4 py-2 border border-gray-200">Depends</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Teams Attendance By shift</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">In Progress</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">B2B Brochure Templates Management</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Lead Management</td>
                        <td className="px-4 py-2 border border-gray-200">Simple Track</td>
                        <td className="px-4 py-2 border border-gray-200">Depends</td>
                        <td className="px-4 py-2 border border-gray-200">Available & Customized</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Sales Analytics</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                        <td className="px-4 py-2 border border-gray-200">Depends</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-4 py-2 border border-gray-200">Create Custom Payment links</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">NA</td>
                        <td className="px-4 py-2 border border-gray-200">Available</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default UserTable


// <div className="p-6 bg-white rounded-lg shadow-lg">
//     <table className="min-w-full table-auto border-collapse border border-gray-200">
//         <thead>
//             <tr className="bg-gray-100">
//                 <th className="px-4 py-2 border border-gray-200">NAME</th>
//                 <th className="px-4 py-2 border border-gray-200">TITLE</th>
//                 <th className="px-4 py-2 border border-gray-200">STATUS</th>
//                 <th className="px-4 py-2 border border-gray-200">ROLE</th>
//                 <th className="px-4 py-2 border border-gray-200">ACTION</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr className="hover:bg-gray-50">
//                 <td className="px-4 py-2 border border-gray-200">Musharof Chowdhury</td>
//                 <td className="px-4 py-2 border border-gray-200">Multidisciplinary Web Entrepreneur Developer</td>
//                 <td className="px-4 py-2 border border-gray-200">
//                     <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
//                 </td>
//                 <td className="px-4 py-2 border border-gray-200">Admin</td>
//                 <td className="px-4 py-2 border border-gray-200 text-blue-600">
//                     <button className="px-4 py-1 border rounded-lg hover:bg-blue-100">Edit</button>
//                 </td>
//             </tr>
//             <tr className="hover:bg-gray-50">
//                 <td className="px-4 py-2 border border-gray-200">Nenifer Lofess</td>
//                 <td className="px-4 py-2 border border-gray-200">Regional Paradigm Technician Optimization</td>
//                 <td className="px-4 py-2 border border-gray-200">
//                     <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
//                 </td>
//                 <td className="px-4 py-2 border border-gray-200">Owner</td>
//                 <td className="px-4 py-2 border border-gray-200 text-blue-600">
//                     <button className="px-4 py-1 border rounded-lg hover:bg-blue-100">Edit</button>
//                 </td>
//             </tr>
//             <tr className="hover:bg-gray-50">
//                 <td className="px-4 py-2 border border-gray-200">Jhon Smith</td>
//                 <td className="px-4 py-2 border border-gray-200">Regional Paradigm Technician Optimization</td>
//                 <td className="px-4 py-2 border border-gray-200">
//                     <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
//                 </td>
//                 <td className="px-4 py-2 border border-gray-200">Member</td>
//                 <td className="px-4 py-2 border border-gray-200 text-blue-600">
//                     <button className="px-4 py-1 border rounded-lg hover:bg-blue-100">Edit</button>
//                 </td>
//             </tr>
//             <tr className="hover:bg-gray-50">
//                 <td className="px-4 py-2 border border-gray-200">Sulum Keliym</td>
//                 <td className="px-4 py-2 border border-gray-200">Lead Implementation Liaison Mobility</td>
//                 <td className="px-4 py-2 border border-gray-200">
//                     <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
//                 </td>
//                 <td className="px-4 py-2 border border-gray-200">Admin</td>
//                 <td className="px-4 py-2 border border-gray-200 text-blue-600">
//                     <button className="px-4 py-1 border rounded-lg hover:bg-blue-100">Edit</button>
//                 </td>
//             </tr>
//             <tr className="hover:bg-gray-50">
//                 <td className="px-4 py-2 border border-gray-200">Alex Semuyel</td>
//                 <td className="px-4 py-2 border border-gray-200">Applications Engineer Security</td>
//                 <td className="px-4 py-2 border border-gray-200">
//                     <span className="text-red-600 bg-red-100 px-2 py-1 rounded-full">Deactivate</span>
//                 </td>
//                 <td className="px-4 py-2 border border-gray-200">Admin</td>
//                 <td className="px-4 py-2 border border-gray-200 text-blue-600">
//                     <button className="px-4 py-1 border rounded-lg hover:bg-blue-100">Edit</button>
//                 </td>
//             </tr>
//             <tr className="hover:bg-gray-50">
//                 <td className="px-4 py-2 border border-gray-200">Humil Limition</td>
//                 <td className="px-4 py-2 border border-gray-200">Regional Paradigm Technician Optimization</td>
//                 <td className="px-4 py-2 border border-gray-200">
//                     <span className="text-green-600 bg-green-100 px-2 py-1 rounded-full">Active</span>
//                 </td>
//                 <td className="px-4 py-2 border border-gray-200">Member</td>
//                 <td className="px-4 py-2 border border-gray-200 text-blue-600">
//                     <button className="px-4 py-1 border rounded-lg hover:bg-blue-100">Edit</button>
//                 </td>
//             </tr>
//         </tbody>
//     </table>
// </div>