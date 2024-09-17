import React from 'react';
import { RiLightbulbFlashLine } from "react-icons/ri";

export const edtechData = [
    { id: 1, point: `Lack of automation` },
    { id: 2, point: `Global optimization automation` },
    { id: 3, point: `Reports and Dashboards` },
    { id: 4, point: `Little or no knowledge of scaling up marketing implementations` },
    { id: 5, point: `Unable to communicate the requirements effectively across tech teams` },
    { id: 6, point: `Ease of publishing and changes to the website` },
    { id: 7, point: `Social Media publishing & scheduling automation` },
    { id: 8, point: `Solving the tech glitches` },
    { id: 9, point: `Handling multiple currencies and time zones effectively` },
];

function EdtechSpace() {
    return (
        <div className="container mx-auto my-12 px-4">
            <div className="edtech-space">
                <p className="text-2xl font-semibold mb-4">
                    Solving the Biggest Barriers In The <span className="text-blue-500">Ed-tech Space!</span>
                </p>
                <p className="text-gray-600 mb-8">
                    <small>Business owners can only focus on a few things related to the tech and process. At the same time, they are busy with their expertise and regular stuff. This solution can eliminate their burden and let them focus on what matters the most as we build the tech and marketing solutions.</small>
                </p>
                <div className="flex flex-wrap gap-4 justify-between">
                    {edtechData.map(items => (
                        <div key={items.id} className="flex items-center bg-white border border-gray-200 rounded-lg shadow-md p-4 w-full sm:w-80">
                            <div className="bg-blue-500 text-white p-2 rounded-full mr-4">
                                <RiLightbulbFlashLine size={24} />
                            </div>
                            <p className="text-base text-gray-800">{items.point}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default EdtechSpace;
