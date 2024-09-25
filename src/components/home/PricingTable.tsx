import React from 'react';
import { pricingData } from '../Data/userTableData';

const PricingTable = () => {
    return (
        <div className="p-4">
            <h2 className="text-center font-bold text-xl md:text-2xl mb-6 md:mb-8">Cost Incurred</h2>
            <div className="w-full overflow-x-auto">
                <table className="min-w-full border-collapse bg-white shadow-md rounded-lg">
                    <thead>
                        <tr className="bg-gradient-to-r from-prime-dark to-prime-blue text-white">
                            <th className="px-4 py-2 md:px-6 md:py-4 font-bold text-sm md:text-lg"> </th>
                            <th className="px-4 py-2 md:px-6 md:py-4 font-bold text-sm md:text-lg">Wordpress (USD)</th>
                            <th className="px-4 py-2 md:px-6 md:py-4 font-bold text-sm md:text-lg">Custom (USD)</th>
                            <th className="px-4 py-2 md:px-6 md:py-4 font-bold text-sm md:text-lg">Skilldeck Gold ($)</th>
                            <th className="px-4 py-2 md:px-6 md:py-4 font-bold text-sm md:text-lg">SkillDeck Silver ($)</th>
                            <th className="px-4 py-2 md:px-6 md:py-4 font-bold text-sm md:text-lg">SkillDeck Platinum ($)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pricingData.map((item, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200 transition-colors duration-200`}
                            >
                                <td className="px-4 py-2 md:px-6 md:py-4 font-semibold text-sm md:text-base">{item.label}</td>
                                <td className="px-4 py-2 md:px-6 md:py-4 text-sm md:text-base">{item.wordpress}</td>
                                <td className="px-4 py-2 md:px-6 md:py-4 text-sm md:text-base border-r border-prime-blue">
                                    {item.custom}
                                </td>
                                <td className="px-4 py-2 md:px-6 md:py-4 text-sm md:text-base border border-prime-blue">
                                    {item.skilldeckGold}
                                </td>
                                <td className="px-4 py-2 md:px-6 md:py-4 text-sm md:text-base border border-prime-blue">
                                    {item.skilldeckSilver}
                                </td>
                                <td className="px-4 py-2 md:px-6 md:py-4 text-sm md:text-base border border-prime-blue">
                                    {item.skilldeckPlatinum}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PricingTable;
