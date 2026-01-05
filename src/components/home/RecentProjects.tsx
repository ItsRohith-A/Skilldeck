import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, PanInfo } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import image1 from '../../../public/RecentProjects/ai.webp';
import image2 from '../../../public/RecentProjects/seo.webp';
import image3 from '../../../public/RecentProjects/lms_crm.webp';
import image4 from '../../../public/RecentProjects/manageclass.webp';
import image5 from '../../../public/RecentProjects/sellcourses.webp';
import image6 from '../../../public/RecentProjects/operations.webp';
import { useDispatch } from 'react-redux';
import { openForm, updateFormFields } from '@/Redux/slices/Forms/FormSlice';

type Project = {
    id: number;
    tags: string[];
    title: string;
    description: string;
    cta: string;
    variant: 'blue' | 'light';
    image: any;
};

const projects: Project[] = [
    {
        id: 1,
        tags: ['SEO-optimized', 'Automation', 'Support'],
        title: 'Launch a beautiful, SEO-optimized website in no time',
        description:
            'Enhance your customer experience with our AI-powered support chatbot. Automating customer service operationswith intelligent chatbots enhance.',
        cta: 'Get In Touch',
        variant: 'blue',
        image: image1,
    },
    {
        id: 2,
        tags: ['SEO', 'Web', 'Automation'],
        title: 'Create Region-Wise SEO Pages Automatically',
        description:
            'Generate location-specific landing pages at scale. Improve search rankings, drive organic traffic, and capture leads from multiple regions effortlessly.',
        cta: 'Get In Touch',
        variant: 'light',
        image: image2,
    },
    {
        id: 3,
        tags: ['LMS', 'CRM', 'Marketing'],
        title: 'Run LMS, CRM & Marketing from One Dashboard',
        description:
            'Manage learners, leads, campaigns, and sales from a single unified dashboard. Eliminate tool switching and gain complete business visibility.',
        cta: 'Get In Touch',
        variant: 'blue',
        image: image3,
    },
    {
        id: 4,
        tags: ['Events', 'Training', 'Global'],
        title: 'Manage Classes, Events & Trainers Globally',
        description:
            'Schedule instructor-led classes, webinars, and events worldwide. Assign trainers, track attendance, and manage sessions with ease.',
        cta: 'Get In Touch',
        variant: 'light',
        image: image4,
    },
    {
        id: 5,
        tags: ['Sales', 'Payments', 'Courses'],
        title: 'Sell Courses, Products & Services Effortlessly',
        description:
            'Launch paid courses, digital products, and services with built-in checkout, subscriptions, coupons, and payment automation.',
        cta: 'Get In Touch',
        variant: 'blue',
        image: image5,
    },
    {
        id: 6,
        tags: ['Automation', 'Operations', 'Workflow'],
        title: 'Automate Operations Across Departments',
        description:
            'Automate workflows across sales, marketing, training, and support. Reduce manual work and scale operations with intelligent automation.',
        cta: 'Get In Touch',
        variant: 'light',
        image: image6,
    },
];

const RecentProjects = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();

    const [width, setWidth] = useState(0);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current && sliderRef.current) {
                const scrollWidth = sliderRef.current.scrollWidth;
                const offsetWidth = containerRef.current.offsetWidth;
                setWidth(scrollWidth - offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    const scrollToIndex = (index: number) => {
        if (!sliderRef.current) return;

        const targetIndex = Math.max(0, Math.min(index, projects.length - 1));
        setActiveIndex(targetIndex);

        const items = sliderRef.current.children;
        const targetCard = items[targetIndex] as HTMLElement;

        if (targetCard) {
            const offset = -targetCard.offsetLeft;

            controls.start({
                x: offset,
                transition: { type: "spring", stiffness: 300, damping: 30 }
            });
        }
    };

    const handleNext = () => {
        scrollToIndex(activeIndex + 1);
    };

    const handlePrev = () => {
        scrollToIndex(activeIndex - 1);
    };

    const onDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (!sliderRef.current) return;

        const cardWidth = sliderRef.current.children[0]?.clientWidth || 0;
        const gap = window.innerWidth < 768 ? 16 : 32; // Responsive gap
        const itemTotalWidth = cardWidth + gap;
        const style = window.getComputedStyle(sliderRef.current);
        const matrix = new WebKitCSSMatrix(style.transform);
        const currentX = matrix.m41;

        const index = Math.round(Math.abs(currentX) / itemTotalWidth);
        scrollToIndex(index);
    };

    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 space-y-4 sm:space-y-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className="space-y-2 md:space-y-3 sm:space-y-4 max-w-3xl">
                        <div className="inline-block px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-prime-background/10 text-[10px] sm:text-xs tracking-wider uppercase">
                            <span className='bg-brand-gradient bg-clip-text text-transparent font-bold'>
                                Our Features
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-900 leading-tight">
                            Launch Faster{' '}
                            <span className="bg-gradient-ai-color bg-clip-text text-transparent">
                                Scale Smarter
                            </span>
                        </h2>

                        <p className="text-gray-600 text-sm sm:text-base">
                            With Skilldeck, you can:
                        </p>
                    </div>

                    {/* Navigation Buttons - Hidden on mobile */}
                    <div className="hidden sm:flex gap-3">
                        <button
                            onClick={handlePrev}
                            disabled={activeIndex === 0}
                            className={`p-2.5 sm:p-3 rounded-full border-2 transition-all duration-200
                                ${activeIndex === 0
                                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                    : 'border-prime-blue text-prime-blue hover:bg-prime-blue hover:text-white'
                                }
                            `}
                        >
                            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={activeIndex === projects.length - 1}
                            className={`p-2.5 sm:p-3 rounded-full border-2 transition-all duration-200
                                ${activeIndex === projects.length - 1
                                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                                    : 'border-prime-blue text-prime-blue hover:bg-prime-blue hover:text-white'
                                }
                            `}
                        >
                            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                    </div>
                </div>

                {/* Slider Container */}
                <div ref={containerRef} className="overflow-hidden">
                    <motion.div
                        ref={sliderRef}
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        animate={controls}
                        onDragEnd={onDragEnd}
                        className="flex gap-4 sm:gap-6 lg:gap-8 w-fit"
                    >
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))}
                    </motion.div>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center mt-6 sm:mt-8 lg:mt-10 gap-2 sm:gap-3">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToIndex(index)}
                            className={`h-2 sm:h-2.5 rounded-full transition-all duration-300
                                ${activeIndex === index
                                    ? 'bg-prime-blue w-6 sm:w-[30px]'
                                    : 'bg-gray-300 hover:bg-gray-400 w-2 sm:w-2.5'
                                }
                            `}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project }: { project: Project }) => {
    const isBlue = project.variant === 'blue';
    const dispatch = useDispatch();

    const triggerForm = () => {
        dispatch(openForm());
        dispatch(updateFormFields({
            id: 'home-recent-projects',
            type: 'enquiry',
            formId: 1,
            curriculum: false,
            slug: '',
        }));
    };

    return (
        <motion.div
            className={`
                min-w-[280px] w-[280px]
                sm:min-w-[500px] sm:w-[500px]
                md:min-w-[700px] md:w-[700px]
                lg:min-w-[900px] lg:w-[900px]
                h-[400px] sm:h-[420px] md:h-[430px]
                rounded-2xl sm:rounded-3xl overflow-hidden
                flex flex-col md:flex-row p-1.5 sm:p-2
                ${isBlue ? 'bg-blue-600 text-white' : 'bg-blue-50 text-gray-900'}
            `}
        >
            {/* Image at top for mobile, right side for desktop */}
            <div className="relative w-full md:hidden h-40 sm:h-48">
                <Image
                    src={project.image}
                    alt="Project Preview"
                    fill
                    priority
                    draggable={false}
                    className="object-cover rounded-xl sm:rounded-2xl pointer-events-none"
                />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-4 sm:p-5 md:p-6 flex flex-col justify-center relative z-10">
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4 md:mb-6">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold
                                ${isBlue
                                    ? 'bg-white/20 text-white'
                                    : 'bg-white border text-gray-600'
                                }
                            `}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 md:mb-4 leading-snug">
                    {project.title}
                </h3>

                <p
                    className={`mb-4 sm:mb-6 md:mb-8 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none
                        ${isBlue ? 'text-blue-100' : 'text-gray-600'}
                    `}
                >
                    {project.description}
                </p>

                <button
                    onClick={triggerForm}
                    className={`w-fit px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all hover:scale-105
                        ${isBlue
                            ? 'bg-white text-blue-600 hover:shadow-lg'
                            : 'bg-white border text-gray-900 shadow-sm hover:shadow-md'
                        }
                    `}
                >
                    {project.cta}
                </button>
            </div>

            {/* Image on right for desktop */}
            <div className="hidden md:block relative w-1/2 h-full">
                <Image
                    src={project.image}
                    alt="Project Preview"
                    fill
                    priority
                    draggable={false}
                    className="object-cover rounded-2xl lg:rounded-3xl pointer-events-none"
                />
            </div>
        </motion.div>
    );
};

export default RecentProjects;