import React from 'react'
import Image from 'next/image';
import logo from '../../../public/logos/mainlogo.svg';


const FeatuersHeader = () => {
    return (
        <div>
            <table>

                {/* make this as top sticky  */}
                <thead >
                    <tr className="sticky top-0 bg-gray-100">
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
                    <tr>
                        <td className="py-4 text-center font-bold text-xl md:text-2xl">
                            Features
                        </td>
                        <td className="py-4 text-center font-bold text-xl md:text-2xl">
                            Features
                        </td>
                        <td className="py-4 text-center font-bold text-xl md:text-2xl">
                            Features
                        </td>
                        <td className="py-4 text-center font-bold text-xl md:text-2xl">
                            Features
                        </td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}

export default FeatuersHeader
