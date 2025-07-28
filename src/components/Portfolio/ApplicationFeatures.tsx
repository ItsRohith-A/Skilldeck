import React, { useState } from "react";
import { featuresData, techLogos } from "./featuresData"; // Adjust the path as per your project
import { IconType } from "react-icons";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { openForm, updateFormFields } from "@/Redux/slices/Forms/FormSlice";

const ApplicationFeatures = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeFeature = featuresData[activeIndex];

    const dispatch = useDispatch();

    const triggerForm = () => {
        dispatch(openForm());
        dispatch(updateFormFields({
            id: 'home-banner',
            type: 'enquiry',
            formId: 1,
            curriculum: false,
            slug: '',
        }));
    };

    return (
        <div className="mt-12 xl:mt-24 container mx-auto px-4">
            <h2 className="text-center text-prime-dark text-3xl md:text-4xl font-bold leading-tight">
                The <span className="text-prime-blue">Application</span> & Their{" "}
                <span className="text-prime-blue">Features</span> Brief
            </h2>

            <div className="grid md:grid-cols-6 gap-6 mt-10">
                {/* Mobile: Dropdown */}
                <div className="md:hidden col-span-6">
                    <select
                        className="w-full py-3  border border-gray-300 rounded-lg text-sm"
                        value={activeIndex}
                        onChange={(e) => setActiveIndex(parseInt(e.target.value))}
                    >
                        {featuresData.map((feature, index) => (
                            <option key={feature.id} value={index}>
                                {feature.title}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Desktop: Sidebar buttons */}
                <div className="hidden md:flex md:col-span-2 flex-col gap-4">
                    {featuresData.map((feature, index) => {
                        const Icon: IconType = feature.icon;
                        const isActive = activeIndex === index;

                        return (
                            <button
                                key={feature.id}
                                onClick={() => setActiveIndex(index)}
                                className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-all text-left group
                  ${isActive ? "bg-prime-blue/20 border-prime-blue" : "border-gray-300 hover:bg-gray-100"}
                `}
                            >
                                <Icon className="text-2xl text-prime-blue group-hover:scale-90 transition-all duration-300" />
                                <span className={`text-sm font-semibold ${isActive ? "text-prime-dark" : "text-gray-700"}`}>
                                    {feature.title}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Right Side: Feature Description */}
                <div className="md:col-span-4 col-span-6 border border-prime-dark p-6 rounded-xl bg-white shadow-sm">
                    <h3 className="text-lg md:text-2xl font-bold text-prime-dark mb-4">{activeFeature.title}</h3>
                    <div className="mb-4">
                        {activeFeature.desc}
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-base text-gray-700 mb-4">
                        {activeFeature.points.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>

                    {activeFeature.technologies && (
                        <div>
                            <h4 className="text-sm font-semibold text-prime-dark mb-6">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-3">
                                {activeFeature.technologies.map((techName) => {
                                    const tech = techLogos.find((t) => t.name.toLowerCase() === techName.toLowerCase());
                                    return tech ? (
                                        <div key={tech.name} className="flex items-center gap-2 border border-gray-200 px-3 py-2 rounded-lg bg-gray-50">
                                            <Image src={tech.img} alt={tech.name} width={50} height={50} />
                                            <span className="text-xs md:text-base font-semibold text-gray-700">{tech.name}</span>
                                        </div>
                                    ) : null;
                                })}
                            </div>
                        </div>
                    )}

                    {activeFeature.buttonstatus === "active" ? (
                        <button onClick={triggerForm} className="mt-6 px-5 py-2 rounded-md bg-prime-blue text-white text-sm font-medium hover:bg-prime-blue/90 transition">
                            {activeFeature.buttontxt}
                        </button>
                    ) : (
                        <div className="flex items-center mt-6 gap-6">
                            <div className="">
                                {activeFeature.buttontxt}
                            </div>
                            <button onClick={triggerForm} className="px-5 py-2 rounded-md bg-prime-blue text-white text-sm font-medium hover:bg-prime-blue/90 transition">
                                Get Details
                            </button>
                        </div>
                    )
                    }

                </div>
            </div>
        </div>
    );
};

export default ApplicationFeatures;
