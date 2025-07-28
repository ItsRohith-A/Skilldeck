import Image from 'next/image'
import React, { useState } from 'react'
import preview1 from '../../../public/portfolio/pojectpreview/preview1.png'
import preview2 from '../../../public/portfolio/pojectpreview/preview2.png'
import preview3 from '../../../public/portfolio/pojectpreview/preview3.png'
import { useDispatch } from 'react-redux'
import { openForm, updateFormFields } from '@/Redux/slices/Forms/FormSlice'
import { useRouter } from 'next/router'

const projectData = [
    {
        img: preview1,
        title: 'Training Website',
        subtitle: 'E-Learning Platform',
        previewLink: 'https://kandradigital.com/',
    },
    {
        img: preview2,
        title: 'Marketing Agency Site',
        subtitle: 'Lead Generation',
        previewLink: 'https://kandradigital.com/',
    },
    {
        img: preview3,
        title: 'Portfolio Website',
        subtitle: 'Freelancer Showcase',
        previewLink: 'https://kandradigital.com/',
    },
    {
        img: preview2,
        title: 'Travel Booking App',
        subtitle: 'Mobile UI Design',
        previewLink: 'https://kandradigital.com/',
    },
    {
        img: preview1,
        title: 'Corporate Website',
        subtitle: 'Consulting Firm',
        previewLink: 'https://kandradigital.com/',
    },
    {
        img: preview3,
        title: 'Event Platform',
        subtitle: 'Registration & Ticketing',
        previewLink: 'https://kandradigital.com/',
    },
]

const Projects = () => {
    const [visibleCount, setVisibleCount] = useState(3)
    const dispatch = useDispatch()
    const router = useRouter()

    const triggerForm = (id: string) => {
        dispatch(openForm());
        dispatch(updateFormFields({
            id, // will be like "project-2"
            type: 'enquiry',
            formId: 1,
            curriculum: false,
            slug: '',
        }));
    };

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 3)
    }

    return (
        <div id='portfolio' className="container mx-auto mt-12 xl:mt-24">
            <div className="space-y-6">
                <div className="text-neutral-950 text-4xl font-bold leading-[54px] text-center">
                    My Creative Works & <span className="text-prime-blue">Latest Projects</span> for
                </div>
                <div className="text-center text-zinc-800 text-base font-bold">
                    I have selected and mentioned here some of my latest projects to share with you.
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {projectData.slice(0, visibleCount).map((item, index) => (
                        <div className="group" key={index}>
                            <div className="border border-prime-blue overflow-hidden rounded-2xl relative transition-all duration-300 ease-in-out hover:scale-[1.02]">
                                <div className="absolute inset-0 z-10 hidden group-hover:flex bg-black/30 items-center justify-center transition-opacity duration-300 ease-in-out">
                                    <div className="flex gap-2.5">
                                        <button
                                            onClick={() => router.push(item.previewLink)}
                                            className="px-5 py-2.5 bg-prime-blue rounded-xl shadow-md transition hover:bg-prime-dark"
                                        >
                                            <div className="text-white text-sm font-bold">Preview</div>
                                        </button>
                                        <button
                                            onClick={() => triggerForm(`poertfolio-project-${index + 1}`)}
                                            className="px-5 py-2.5 bg-prime-dark rounded-xl shadow-md transition hover:bg-prime-blue"
                                        >
                                            <div className="text-white text-sm font-bold">Get Now</div>
                                        </button>
                                    </div>
                                </div>
                                <Image
                                    src={item.img}
                                    alt="preview"
                                    className="w-full h-auto transition-transform duration-300 ease-in-out group-hover:scale-105"
                                />
                            </div>
                            <div className="text-prime-dark group-hover:text-prime-blue text-xl font-semibold leading-10 mt-2 transition-colors duration-300">
                                {item.title}
                            </div>
                            <div className="text-zinc-800 text-sm font-bold leading-tight">
                                {item.subtitle}
                            </div>
                        </div>
                    ))}
                </div>

                {visibleCount < projectData.length && (
                    <div className="text-center mt-10">
                        <button
                            onClick={handleLoadMore}
                            className="px-6 py-3 bg-prime-blue text-white font-semibold rounded-lg shadow hover:bg-prime-dark transition duration-300"
                        >
                            Load More
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects
