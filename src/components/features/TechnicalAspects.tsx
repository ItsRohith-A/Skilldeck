import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../../public/logos/mainlogo.svg';

import {
    tableData,
    featureData,
    operationalData,
    marketingData,
    contentManagementData,
    salesTeamData,
} from '../Data/userTableData';
import PricingTable from '../home/PricingTable';

const UserTable = () => {
    const [screenWidth, setScreenWidth] = useState("");

    useEffect(() => {
        const updateImagesPerPage = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setScreenWidth('large');
            } else if (width >= 768) {
                setScreenWidth("medium");
            } else if (width >= 140) {
                setScreenWidth("small");
            } else {
                setScreenWidth("large");
            }
        };

        updateImagesPerPage();
        window.addEventListener('resize', updateImagesPerPage);

        return () => {
            window.removeEventListener('resize', updateImagesPerPage);
        };
    }, []);

    console.log(screenWidth)

    const renderRows = (data: Array<any>) => {
        return data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-50">
                <td className="px-2 py-1 md:px-4 md:py-2 border border-gray-200 text-sm md:text-base">
                    {row.feature}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2 border border-gray-200 text-sm md:text-base">
                    {row.wordpress}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2 border border-gray-200 text-sm md:text-base">
                    {row.custom}
                </td>
                <td className="px-2 py-1 md:px-4 md:py-2 border border-gray-200 text-sm md:text-base">
                    {row.skillDeck}
                </td>
            </tr>
        ));
    };

    return (
        <div className="p-4 md:p-6 bg-white rounded-lg shadow-lg lg:container lg:mx-auto">
            <div className="w-full overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100 sticky top-0">
                            <th className="px-2 py-1 md:px-4 md:py-2 border border-gray-200 text-sm md:text-base">
                                Feature
                            </th>
                            <th className="px-2 py-1 md:px-4 md:py-2 border border-gray-200 text-sm md:text-base">
                                WordPress
                            </th>
                            <th className="px-2 py-1 md:px-4 md:py-2 border border-gray-200 text-sm md:text-base">
                                Custom
                            </th>
                            <th className="px-2 py-1 md:px-4 md:py-2 border border-gray-200 text-sm md:text-base">
                                <Image
                                    src={logo}
                                    alt="SkillDeck Logo"
                                    className="h-8 mx-auto w-auto md:h-10"
                                />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderRows(tableData)}

                        <tr>
                            <td colSpan={4} className="py-4 text-center font-bold text-xl md:text-2xl">
                                Features
                            </td>
                        </tr>
                        {renderRows(featureData)}

                        <tr>
                            <td colSpan={(screenWidth === 'large' || screenWidth === 'medium') ? 4 : 1} className="py-4 text-center font-bold text-xl md:text-2xl">
                                Operations
                            </td>
                        </tr>
                        {renderRows(operationalData)}

                        <tr>
                            <td colSpan={4} className="py-4 text-center font-bold text-xl md:text-2xl">
                                Marketing
                            </td>
                        </tr>
                        {renderRows(marketingData)}

                        <tr>
                            <td colSpan={4} className="py-4">
                                <PricingTable />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={4} className="py-4 text-center font-bold text-xl md:text-2xl">
                                Content Management
                            </td>
                        </tr>
                        {renderRows(contentManagementData)}

                        <tr>
                            <td colSpan={4} className="py-4 text-center font-bold text-xl md:text-2xl">
                                Sales Team
                            </td>
                        </tr>
                        {renderRows(salesTeamData)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserTable;
