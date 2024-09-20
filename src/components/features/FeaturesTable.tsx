import React from 'react'

const FeaturesTable = () => {
    return (
        <div className="p-4">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <thead>
                    <tr className="border-b bg-gray-50">
                        <th className="p-2 text-left">Feature</th>
                        <th className="p-2 text-left">Wordpress</th>
                        <th className="p-2 text-left">Custom</th>
                        <th className="p-2 text-left">SkillDeck</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b">
                        <td className="p-2">Schedules Management</td>
                        <td className="p-2">Plugin & partial</td>
                        <td className="p-2">Depends on Requirements</td>
                        <td className="p-2">Best and automated</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2">Outdated schedules auto-delete</td>
                        <td className="p-2">Manually eliminated</td>
                        <td className="p-2">Depends on Requirements</td>
                        <td className="p-2">Deletes Automatically</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2">Publish schedules for multiple cities at one go</td>
                        <td className="p-2">One at a go and manual</td>
                        <td className="p-2">Depends on Requirements</td>
                        <td className="p-2">Automated & published in bulk</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2">Beautiful trainer management module</td>
                        <td className="p-2">Not available</td>
                        <td className="p-2">Depends on Requirements</td>
                        <td className="p-2">Frontend</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2">SEO Implementations</td>
                        <td className="p-2">Limited</td>
                        <td className="p-2">Depends on Requirements</td>
                        <td className="p-2">Advanced & Automated</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2">Multicurrency</td>
                        <td className="p-2">Purchase Plugins</td>
                        <td className="p-2">Available</td>
                        <td className="p-2">Available</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2">Respective Timezones Display</td>
                        <td className="p-2">Not available</td>
                        <td className="p-2">Depends on Requirements</td>
                        <td className="p-2">Available</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2">Pay in any Currency</td>
                        <td className="p-2">Depends/Plugins</td>
                        <td className="p-2">Depends on Requirements</td>
                        <td className="p-2">Available</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2">Pay On the Platform itself</td>
                        <td className="p-2">Ignored/not known</td>
                        <td className="p-2">Available</td>
                        <td className="p-2">Available</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2">Auto-track payments and automated emails</td>
                        <td className="p-2">Available</td>
                        <td className="p-2">Depends on Requirements</td>
                        <td className="p-2">Available</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2">Automatic invoice generation & sent</td>
                        <td className="p-2">Available</td>
                        <td className="p-2">Depends on Requirements</td>
                        <td className="p-2">Available</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2">Lead captures and auto-responses</td>
                        <td className="p-2">Available</td>
                        <td className="p-2">Depends on Requirements</td>
                        <td className="p-2">Available</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2">Multiple Global Payment Gateways Integration</td>
                        <td className="p-2">Can Be Integrated</td>
                        <td className="p-2">Can Be Developed</td>
                        <td className="p-2">Available</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2">Schedules Forecast & suggestions</td>
                        <td className="p-2">NA</td>
                        <td className="p-2">NA</td>
                        <td className="p-2">Available</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2">City and country management</td>
                        <td className="p-2">NA</td>
                        <td className="p-2">NA</td>
                        <td className="p-2">Available</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2">Coupons management</td>
                        <td className="p-2">Available</td>
                        <td className="p-2">Can Be Developed</td>
                        <td className="p-2">Available</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2">Role Based on User logs</td>
                        <td className="p-2">NA</td>
                        <td className="p-2">NA</td>
                        <td className="p-2">Available</td>
                    </tr>
                    <tr className="border-b">
                        <td className="p-2">User-based Access to the platform</td>
                        <td className="p-2">Available but not relevant</td>
                        <td className="p-2">NA</td>
                        <td className="p-2">Available</td>
                    </tr>
                    {/* Continue adding other features as needed */}
                </tbody>
            </table>
        </div>
    );
}

export default FeaturesTable;
