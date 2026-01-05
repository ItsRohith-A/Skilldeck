import logo from '../../../../public/logos/mainlogo.svg';
import Image from 'next/image';
import laptopImg from '../../../../public/Blogs/img1.png';
import Link from 'next/link';
import avatarImg from '../../../../public/Blogs/profile_manju.png';
import linkedin from '../../../../public/Blogs/LinkedIn-Logo.png';
import companies from '../../../../public/companyImages.png';
import companyImagesMobile from '../../../../public/companyImagesMobile.png';
import { Sparkles, Zap, Users, BarChart3, Mail, Calendar, MessageSquare, ClipboardList } from 'lucide-react';

const features = [
    { title: 'E–Learning System', icon: <Zap className="w-5 h-5" />, gradient: 'from-blue-500 to-cyan-500' },
    { title: 'CRM', subtitle: '(Customer Relationship Management)', icon: <Users className="w-5 h-5" />, gradient: 'from-green-500 to-emerald-500' },
    { title: 'CMS', subtitle: '(Content Management System)', icon: <ClipboardList className="w-5 h-5" />, gradient: 'from-yellow-500 to-orange-500' },
    { title: 'Marketing Automation', icon: <Mail className="w-5 h-5" />, gradient: 'from-red-500 to-pink-500' },
    { title: 'Event Management', subtitle: 'with global currencies & timezones', icon: <Calendar className="w-5 h-5" />, gradient: 'from-purple-500 to-indigo-500' },
    { title: 'Live Web Chat', icon: <MessageSquare className="w-5 h-5" />, gradient: 'from-pink-500 to-rose-500' },
    { title: 'Task & Workflow', icon: <BarChart3 className="w-5 h-5" />, gradient: 'from-indigo-500 to-violet-500' },
];

const SkillDeckIntro = () => {
    return (
        <section className="px-4 py-12 md:py-20 bg-gray-50/50">
            <div className="max-w-6xl mx-auto space-y-10 md:space-y-16">
                {/* Intro */}
                <div className="flex flex-col justify-center items-center gap-y-4">
                    <Image src={logo} alt="logo" className="h-10 md:h-12 w-auto" />
                    <h2 className="text-2xl text-center md:text-4xl font-bold bg-gradient-ai-color bg-clip-text text-transparent">
                        All-in-One Training Management Platform
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto text-center leading-relaxed">
                        Skilldeck is a fully automated, budget-friendly plug-and-play solution designed for training institutes. It offers every essential feature needed to run and scale a training business, helping organizations accelerate growth with minimal effort and cost.
                    </p>
                </div>

                {/* Highlight Box */}
                <div className="bg-brand-gradient p-6 md:p-10 rounded-2xl relative overflow-hidden">
                    {/* Decorative orbs */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                    <div className="relative z-10 space-y-6 text-center">
                        <div className="space-y-2">
                            <h2 className="text-white text-2xl md:text-4xl font-bold">
                                <span className="text-cyan-300">4X</span> More Leads, <span className="text-purple-300">3X</span> Higher Volume
                            </h2>
                            <p className="text-lg md:text-xl text-white/80">at a Fraction of the Cost</p>
                        </div>
                        <p className="text-white/70 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
                            If you're seeking powerful tech and marketing automation that delivers results, Skilldeck is your go-to solution. Specifically built for training companies, it offers everything you need in one place — from lead generation to operations — driving growth efficiently and affordably.
                        </p>

                        {/* Feature Cards */}
                        <div className="pt-6 md:pt-8">
                            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-white/20 transition-all duration-300 group"
                                    >
                                        <div className={`w-8 h-8 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                                            {feature.icon}
                                        </div>
                                        <div className="text-left">
                                            <h3 className="text-white text-sm font-semibold">{feature.title}</h3>
                                            {feature.subtitle && (
                                                <p className="text-white/60 text-xs">{feature.subtitle}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className='text-white/70 text-sm md:text-base pt-4'>...and much more, all designed to scale your business effortlessly.</p>
                    </div>
                </div>

                {/* Two Column Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {/* Left Column */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-5 md:p-8 space-y-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="bg-gray-50 p-4 rounded-xl">
                            <Image src={laptopImg} alt="Skilldeck Dashboard" className="w-full h-auto rounded-lg" />
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl md:text-2xl font-bold bg-gradient-ai-color bg-clip-text text-transparent">
                                Built for Growing Institutes on a Budget
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                A perfect fit for someone who is getting started with a minimal budget, and looking for the premium features, UI/UX and scalability.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-5 md:p-8 space-y-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="space-y-3">
                            <h3 className="text-xl md:text-2xl font-bold bg-gradient-ai-color bg-clip-text text-transparent">
                                Proven Impact Across Teams & Budgets
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Companies are finding <Link href="https://skilldeck.net" target="_blank" className="text-blue-600 hover:underline font-medium">Skilldeck.net</Link> quite useful, and are expediting their process & cutting down on the resources across all departments significantly. By reducing their expenses across all departments by at least 40%.
                            </p>
                        </div>

                        {/* Testimonial card */}
                        <div className="relative bg-brand-gradient p-6 rounded-2xl text-white overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl translate-y-1/2 -translate-x-1/2" />

                            {/* Quote Icon */}
                            {/* <div className="absolute top-4 right-4 text-white/20">
                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div> */}

                            <div className="relative z-10 space-y-4">
                                {/* Testimonial Text */}
                                <p className="text-sm md:text-base text-white/90 leading-relaxed">
                                    <span className="font-bold text-white">Skilldeck</span> platform is developed by <span className="text-cyan-300 font-semibold">Manjunath Chowdary</span> and team, Ex-Marketing head of Knowledgehut Upgrad, founder of KandraDigital Marketing solutions, and has built the tech and marketing strategies for various training companies.
                                </p>

                                {/* Author Card */}
                                <div className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                                    <div className="flex items-center gap-4">
                                        <div className="relative">
                                            <Image
                                                src={avatarImg}
                                                alt="Manjunath Chowdary"
                                                className="rounded-full w-14 h-14 object-cover ring-2 ring-white/30"
                                            />
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-white text-base md:text-lg font-bold">Manjunath Chowdary</p>
                                            <p className="text-white/70 text-sm">Founder & CEO, SkillDeck</p>
                                        </div>
                                    </div>
                                    <Link
                                        href="https://www.linkedin.com/in/manjunath-chowdary/"
                                        target="_blank"
                                        className="flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-blue-50 transition-colors"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        Connect
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Company Logos */}
                <div className="pt-4">
                    <Image src={companies} alt='Companies' className='hidden md:block w-full' />
                    <Image src={companyImagesMobile} alt='Companies' className='block md:hidden w-full' />
                </div>
            </div>
        </section>
    );
};

export default SkillDeckIntro;


