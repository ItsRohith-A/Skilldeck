import Image from 'next/image'
import React, { useState } from 'react'
import preview1 from '../../../public/portfolio/pojectpreview/preview1.png'
import preview2 from '../../../public/portfolio/pojectpreview/preview2.png'
import preview3 from '../../../public/portfolio/pojectpreview/preview3.png'
import preview4 from '../../../public/portfolio/pojectpreview/preview4.png'
import preview5 from '../../../public/portfolio/pojectpreview/preview5.png'
import preview6 from '../../../public/portfolio/pojectpreview/preview6.png'
import { useDispatch } from 'react-redux'
import { openForm, updateFormFields } from '@/Redux/slices/Forms/FormSlice'
import { useRouter } from 'next/router'

const projectData = [
    {
        img: preview1,
        title: 'Skilluped',
        subtitle: 'E-Learning Platform',
        previewLink: 'https://skilluped.com/',
        showPreview: true,
    },
    {
        img: preview2,
        title: 'The Indian Flavour',
        subtitle: 'E-commerce & Wholesale',
        previewLink: 'https://frontend-indian-flavours.vercel.app/',
        showPreview: true,
    },
    {
        img: preview3,
        title: 'NevoLearn',
        subtitle: 'Training & E-Learning Website',
        previewLink: 'https://nevolearn.com/',
        showPreview: true,
    },
    {
        img: preview4,
        title: 'VlSIFirst',
        subtitle: 'VLSI Training Website',
        previewLink: 'https://vlsifirst.com/',
        showPreview: true,
    },
    {
        img: preview5,
        title: 'Mentoring App for IOS & Android',
        subtitle: 'Mobile UI Design',
        previewLink: '',
        showPreview: false, // No preview for mobile app
    },
    {
        img: preview6,
        title: 'Onefolds',
        subtitle: 'Interior Design Websites',
        previewLink: 'https://onefolds.com/',
        showPreview: true,
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
            <div className="space-y-3 lg:space-y-6 p-4 lg-p-0">
                <div className="text-neutral-950 text-2xl lg:text-4xl font-bold leading-[40px] lg:leading-[54px] text-center">
                    My Creative Works & <span className="text-prime-blue">Latest Projects</span> for
                </div>
                <div className="text-center text-zinc-800 text-sm lg:text-base font-bold">
                    I have selected and mentioned here some of my latest projects to share with you.
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {projectData.slice(0, visibleCount).map((item, index) => (
                        <div className="group" key={index}>
                            <div className="border border-prime-blue overflow-hidden rounded-2xl relative transition-all duration-300 ease-in-out hover:scale-[1.02]">
                                <div className="absolute inset-0 z-10 hidden group-hover:flex bg-black/30 items-center justify-center transition-opacity duration-300 ease-in-out">
                                    <div className="flex gap-2.5">
                                        {item.showPreview && (
                                            <a
                                                href={item.previewLink}
                                                target="_blank"
                                                rel="noopener noreferrer noindex nofollow"
                                                className="px-5 py-2.5 bg-prime-blue rounded-xl shadow-md transition hover:bg-prime-dark"
                                            >
                                                <div className="text-white text-sm font-bold">Preview</div>
                                            </a>
                                        )}


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
