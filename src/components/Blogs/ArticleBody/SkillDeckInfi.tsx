import logo from '../../../../public/logos/mainlogo.svg';
import Image from 'next/image';
import laptopImg from '../../../../public/Blogs/img1.png'; // replace with actual image path
import Link from 'next/link';
import avatarImg from '../../../../public/Blogs/profile_manju.png'; // replace with actual image path
import linkedin from '../../../../public/Blogs/LinkedIn-Logo.png'; // replace with actual image path
import companies from '../../../../public/companyImages.png'; // replace with actual image path
import companyImagesMobile from '../../../../public/companyImagesMobile.png'; // replace with actual image path


const features = [
    { title: 'E–Learning System', color: 'text-blue-600' },
    { title: 'CRM', subtitle: '(Customer Relationship Management)', color: 'text-green-600' },
    { title: 'CMS', subtitle: '(Content Management System)', color: 'text-yellow-600' },
    { title: 'Marketing Automation', color: 'text-red-700' },
    {
        title: 'Event Management',
        subtitle: 'with support for global currencies and timezones',
        color: 'text-blue-700',
        colspan: 'sm:col-span-2'
    },
    { title: 'Live Web Chat Integration', color: 'text-pink-600' },
    { title: 'Task & Workflow Management', color: 'text-indigo-500' },
];

const SkillDeckIntro = () => {
    return (
        <section className="px-4 py-10 md:py-20 bg-gradient-to-br from-blue-50 to-white text-gray-800">
            <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
                {/* Intro */}
                <div className="flex flex-col justify-center items-center gap-y-4">
                    <Image src={logo} alt="logo" />
                    <h1 className="text-2xl text-center md:text-4xl flex items-center gap-x-2 justify-center font-bold text-prime-dark">
                        All-in-One Training Management Platform
                    </h1>
                    <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto text-center">
                        Skilldeck is a fully automated, budget-friendly plug-and-play solution designed for training institutes. It offers every essential feature needed to run and scale a training business, helping organizations accelerate growth with minimal effort and cost.
                    </p>
                </div>

                {/* Highlight Box */}
                <div className="bg-prime-dark p-6 md:p-8 rounded-xl">
                    <div className="place-items-center space-y-5">
                        <div className="space-y-2 ">
                            <h2 className="text-white text-2xl text-center md:text-4xl">
                                <span className=" text-prime-blue">4X</span> More Leads, <span className="text-[#B3BBFD]">3X</span> Higher Volume
                            </h2>
                            <p className="text-base md:text-lg text-center text-white">at a Fraction of the Cost</p>
                        </div>
                        <p className="text-white text-base md:text-lg text-center">
                            If you're seeking powerful tech and marketing automation that delivers results, Skilldeck is your go-to solution. Specifically built for training companies, it offers everything you need in one place — from lead generation to operations — driving growth efficiently and affordably.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="py-10 md:px-4">
                        <div className="max-w-6xl mx-auto flex flex-wrap gap-5 md:gap-8">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-xl w-full md:w-fit p-4 md:p-6 text-center ${feature.colspan || ''}`}
                                >
                                    <h3 className={`${feature.color} text-lg font-semibold`}>{feature.title}</h3>
                                    {feature.subtitle && (
                                        <p className={`text-sm ${feature.color}`}>{feature.subtitle}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className='text-white text-base md:text-lg text'>...and much more, all designed to scale your business effortlessly. We work on results and assure the satisfaction of the same.</p>
                </div>
                <section className="max-w-6xl mx-auto px-2 md:px-4 py-10 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
                    {/* Left Column */}
                    <div className="flex flex-col items-center justify-center md:items-center text-center md:text-left space-y-6 border border-[#C4C9FD] rounded-xl p-4 md:p-6">
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <Image src={laptopImg} alt="Skilldeck Dashboard" className="w-full h-auto" />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-3xl font-bold text-gray-800">Built for Growing Institutes on a Budget</h3>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-2">
                                A perfect fit for someone who is getting started with a minimal budget, and looking for the premium
                                features, UI/UX and scalability.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-10 border border-[#C4C9FD] rounded-xl  p-4 md:p-6">
                        <div>
                            <h3 className="text-xl text-center md:text-3xl font-bold text-gray-900">Proven Impact Across Teams & Budgets</h3>
                            <p className="text-gray-600 text-base md:text-lg text-justify leading-relaxed mt-2">
                                Companies are finding <Link href="https://skilldeck.net" target="_blank" className="text-blue-500 underline">Skilldeck.net</Link> quite useful, and are
                                expediting their process & cutting down on the resources across all departments significantly. By
                                reducing their expenses across all departments by at least 40%.
                            </p>
                        </div>

                        {/* Testimonial card */}
                        <div className="bg-[#0C1120] p-4 rounded-xl text-white">
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex flex-col md:flex-row w-full justify-between bg-white gap-3 p-3 rounded items-center">
                                    <div className="flex gap-4">
                                        <Image src={avatarImg} alt="Manjunath Chowdary" className="rounded-full w-10 h-10" />
                                        <div>
                                            <p className="text-prime-blue text-sm md:text-base font-semibold">Manjunath Chowdary</p>
                                            <p className="text-xs text-gray-600 font-medium">Founder & CEO</p>
                                        </div>
                                    </div>
                                    <Link href="https://www.linkedin.com/in/manjunath-chowdary/" target="_blank">
                                        <Image
                                            src={linkedin}
                                            alt="LinkedIn"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <p className="text-sm md:text-base font-light leading-relaxed">
                                <span className="font-semibold text-white">Skilldeck</span> platform is developed by <span className="text-prime-blue font-semibold">Manjunath Chowdary</span> and team, Ex-Marketing head of Knowledgehut Upgrad, founder of
                                KandraDigital Marketing solutions, and has built the tech and marketing strategies for various training
                                companies such as,
                            </p>
                        </div>
                    </div>
                </section>
                <Image src={companies} alt='Companies' className='hidden md:block'/>
                <Image src={companyImagesMobile} alt='Companies' className='block md:hidden'/>
            </div>
        </section>
    );
};

export default SkillDeckIntro;

