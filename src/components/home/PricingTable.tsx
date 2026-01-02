import React from 'react';
import { pricingData } from '../Data/userTableData';

const PricingTable = () => {
    return (
        // <div className="p-4">
        //     <h2 className="text-center font-bold text-xl md:text-2xl mb-6 md:mb-8">Cost Incurred</h2>
        //     <div className="w-full overflow-x-auto">
        //         <table className="min-w-full border-collapse bg-white shadow-md rounded-lg">
        //             {/* <thead>
        //                 <tr className="bg-prime-blue md:bg-gradient-to-r from-prime-dark to-prime-blue text-white">
        //                     <th className="px-4 py-2 md:px-6 md:py-4 font-bold text-sm md:text-base text-center"></th>
        //                     <th className="px-4 py-2 md:px-6 md:py-4 font-bold text-sm md:text-base text-center">WordPress ($)</th>
        //                     <th className="px-4 py-2 md:px-6 md:py-4 font-bold text-sm md:text-base text-center">Custom ($)</th>
        //                     <th colSpan={3} className=" py-2  md:py-4 font-bold text-sm md:text-base text-center border-l border-white">
        //                         <div className='border-b pb-2'>SkillDeck</div>
        //                         <tr className=" text-white flex justify-around">
        //                             <th className="pr-14  font-bold text-sm md:text-base text-center pl-4">Economical ($)</th>
        //                             <th className="pr-14  font-bold text-sm md:text-base text-center pl-4">Elite ($)</th>
        //                             <th className="pr-12  font-bold text-sm md:text-base text-center pl-4">Pro ($)</th>
        //                         </tr>
        //                     </th>
        //                 </tr>
        //             </thead> */}
        //             <thead>
        //                 <tr className="bg-prime-blue md:bg-gradient-to-r from-prime-dark to-prime-blue text-white  ">
        //                     <th className="px-4 py-2 md:px-6 md:py-4 font-semibold text-sm md:text-lg"> </th>
        //                     <th className="px-4 py-2 md:px-6 md:py-4 font-semibold text-sm md:text-lg">Wordpress ($)</th>
        //                     <th className="px-4 py-2 md:px-6 md:py-4 font-semibold text-sm md:text-lg">Custom ($)</th>
        //                     <th className="px-4 py-2 md:px-6 md:py-4 font-semibold text-sm md:text-lg">SkillDeck Economical ($)</th>
        //                     <th className="px-4 py-2 md:px-6 md:py-4 font-semibold text-sm md:text-lg">Skilldeck Elite ($)</th>
        //                     <th className="px-4 py-2 md:px-6 md:py-4 font-semibold text-sm md:text-lg">SkillDeck Pro ($)</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {pricingData.map((item, index) => (
        //                     <tr
        //                         key={index}
        //                         className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200 transition-colors duration-200`}
        //                     >
        //                         <td className="px-4 py-2 md:px-6 md:py-4 font-semibold text-sm md:text-base">{item.label}</td>
        //                         <td className="px-4 py-2 md:px-6 md:py-4 text-sm md:text-base text-center">{item.wordpress}</td>
        //                         <td className="px-4 py-2 md:px-6 md:py-4 text-sm md:text-base border-r border-prime-blue text-center">
        //                             {item.custom}
        //                         </td>
        //                         <td className="px-4 py-2 md:px-6 md:py-4 text-sm md:text-base font-semibold text-prime-dark border border-prime-blue text-center">
        //                             {item.skilldeckSilver}

        //                         </td>
        //                         <td className="px-4 py-2 md:px-6 md:py-4 text-sm md:text-base font-semibold text-prime-dark border border-prime-blue text-center">
        //                             {item.skilldeckGold}

        //                         </td>
        //                         <td className="px-4 py-2 md:px-6 md:py-4 text-sm md:text-base font-semibold text-prime-dark border border-prime-blue text-center">
        //                             {item.skilldeckPlatinum}
        //                         </td>
        //                     </tr>
        //                 ))}
        //             </tbody>
        //         </table>
        //     </div>
        // </div>
        <div className=""></div>
    );
};

export default PricingTable;
