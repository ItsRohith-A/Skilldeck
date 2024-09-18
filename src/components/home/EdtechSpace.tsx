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
            <div className="space-y-3 lg:space-y-6">
                <div className="text-black text-center lg:text-start text-2xl lg:text-3xl font-bold">Solving the Biggest Barriers In
                    <span className="text-prime-blue text-center lg:text-start text-2xl lg:text-3xl font-bold"> The Ed-tech Space!</span>
                </div>
                <div className="lg:w-4/6 opacity-80 text-stone-500 text-sm font-normal text-center lg:text-start">Business owners can only focus on a few things related to the tech and process. At the same time, they are busy with their expertise and regular stuff. This solution can eliminate their burden and let them focus on what matters the most as we build the tech and marketing solutions.</div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 justify-between">
                    {edtechData.map(items => (
                        <div key={items.id} className="flex items-center bg-white rounded-lg shadow p-4 ">
                            <div className="bg-prime-blue text-xl lg:text-2xl text-white p-2 rounded-full mr-4">
                                <RiLightbulbFlashLine />
                            </div>
                            <p className="text-slate-900 text-sm lg:text-base font-medium">{items.point}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default EdtechSpace;
