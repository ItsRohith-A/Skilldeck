import Link from 'next/link';
import React from 'react';
import {
    FaChevronRight,
    FaStar,
    FaUsers,
    FaEye,
} from 'react-icons/fa';
import { FiCheckCircle, FiEdit3, FiFileText, FiXCircle } from 'react-icons/fi';
import { IoMdTrendingUp } from 'react-icons/io';

const GuestAuthor = () => {
    const benefits = [
        {
            icon: <IoMdTrendingUp className="w-8 h-8 text-blue-500" />,
            title: "Amplify Your Voice",
            description: "Reach a growing community of professionals, educators, and businesses worldwide."
        },
        {
            icon: <FaStar className="w-8 h-8 text-yellow-500" />,
            title: "Build Authority",
            description: "Position yourself as a thought leader in your niche."
        },
        {
            icon: <FaEye className="w-8 h-8 text-purple-500" />,
            title: "Get Visibility",
            description: "We promote your articles across our social channels, newsletter, and partner platforms."
        },
        {
            icon: <FaUsers className="w-8 h-8 text-green-500" />,
            title: "Grow Your Network",
            description: "Connect with our vibrant contributor and mentor ecosystem."
        }
    ];

    const topics = [
        {
            emoji: "🚀",
            title: "Career Development & Transitions",
            description: "Help professionals navigate career changes and growth opportunities."
        },
        {
            emoji: "🤖",
            title: "Digital Marketing, Tech, and AI in Learning",
            description: "Explore the intersection of technology and education."
        },
        {
            emoji: "🎯",
            title: "Corporate Training & L&D Strategies",
            description: "Share insights on workplace learning and development."
        },
        {
            emoji: "💼",
            title: "Freelancing, Remote Work, and Solopreneurship",
            description: "Guide the future of work and independent careers."
        },
        {
            emoji: "🛠️",
            title: "Skill-building, Certifications & Tools",
            description: "Review and recommend learning resources and platforms."
        },
        {
            emoji: "📊",
            title: "Case Studies on EdTech, Coaching, or Online Courses",
            description: "Share real-world success stories and lessons learned."
        },
        {
            emoji: "⏱️",
            title: "Productivity, Time Management, and Work Culture",
            description: "Discover actionable tips and strategies to boost personal productivity, manage time effectively, and build a healthy work culture."
        }
    ];

    const guidelines = [
        {
            title: "Content Quality",
            icon: <FiFileText className="w-5 h-5 mr-2" />,
            items: [
                "Minimum 1000–1500 words (well-researched and insightful)",
                "100% original content (not published elsewhere, including your own blog)",
                "Fact-checked, well-structured, and written in clear English",
                "Include examples, stats, or case studies where relevant",
                "Use H2/H3 formatting, bullet points, and proper sub-sections"
            ]
        },
        {
            title: "Voice & Style",
            icon: <FiEdit3 className="w-5 h-5 mr-2" />,
            items: [
                "Professional yet conversational tone",
                "Actionable advice, not theory-heavy",
                "Avoid promotional language or affiliate links"
            ]
        },
        {
            title: "Formatting",
            icon: <FiCheckCircle className="w-5 h-5 mr-2" />,
            items: [
                "Submit as a Google Doc or Word file",
                "Include a short author bio (50–80 words) with headshot (optional)",
                "You may include 1 backlink to your website or social profile (DoFollow if editorially relevant)"
            ]
        },
        {
            title: "What We Don't Accept",
            icon: <FiXCircle className="w-5 h-5 mr-2" />,
            items: [
                "Plagiarized or AI-generated content without editing",
                "Purely promotional or SEO link-building content",
                "Topics unrelated to skills, careers, or learning",
                "Previously published material"
            ]
        }
    ];

    return (
        <div className="min-h-screen ">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-prime-blue opacity-90"></div>
                <div className="relative max-w-7xl mx-auto px-2 md:px-4 py-10 md:py-20 text-center text-white">
                    <h1 className="text-3xl md:text-6xl font-bold mb-6 animate-pulse">
                        Become a Guest Author
                    </h1>
                    <p className="text-lg md:text-2xl mb-4 opacity-90">
                        Showcase Your Expertise | Grow Your Reach | Contribute to the Future of Skills
                    </p>
                    <p className='mb-6 text-sm'>At SkillDeck, we're passionate about helping professionals, trainers, and businesses stay ahead in a rapidly evolving world of work. If you have unique insights, practical experiences, or research-backed content around career development, training, digital transformation, or skill-building, we'd love to feature your voice.</p>
                    <a
                        href="#submit"
                        className="inline-flex items-center px-4 md:px-8 py-2 md:py-4 bg-prime-dark text-white font-semibold rounded-full transform hover:scale-105 text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Start Writing Today
                        <FaChevronRight className="ml-2 md:w-5 md:h-5" />
                    </a>
                </div>
            </div>

            {/* Benefits Section */}
            <div id="benefits" className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-5 md:mb-16">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Why Write for SkillDeck.net?</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-prime-blue"
                            >
                                <div className="mb-6 flex justify-center">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-lg lg:text-xl font-semibold text-gray-800 mb-4 text-center">{benefit.title}</h3>
                                <p className="text-gray-600 text-sm md:text-base text-center">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Topics Section */}
            <div id="topics" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">What We're Looking For</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                        <p className="text-base md:text-xl text-gray-600 mt-6">We welcome original, high-quality articles on these exciting topics:</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {topics.map((topic, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-blue-50 to-purple-50 p-4 md:p-6 rounded-2xl border-l-4 border-prime-blue hover:border-prime-dark transition-all duration-300 transform hover:scale-105 cursor-pointer"
                            >
                                <div className="text-2xl md:text-3xl mb-4">{topic.emoji}</div>
                                <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-3">{topic.title}</h3>
                                <p className="text-gray-600 text-sm md:text-base">{topic.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Guidelines Section */}
            <div id="guidelines" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">Submission Guidelines</h2>
                        <div className="w-20 h-1 bg-white mx-auto rounded-full mb-4"></div>
                        <p className="text-base md:text-lg opacity-90">Before submitting your article, please read and follow these carefully:</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {guidelines.map((guideline, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                                <h3 className="text-xl font-semibold mb-4 flex items-center">
                                    {guideline.icon}
                                    {guideline.title}
                                </h3>
                                <ul className="space-y-3">
                                    {guideline.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start">
                                            <div className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></div>
                                            <span className="text-sm leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* How to Submit Section */}

                </div>
            </div>

            <section id="submit" className="py-16 px-4 bg-gradient-to-tr from-[#f0f4ff] via-[#f7fbff] to-[#ffffff]">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* How to Submit */}
                        <div className="bg-white rounded-2xl p-4 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <h3 className="text-lg lg:text-2xl font-bold mb-6 flex items-center text-blue-700">
                                <FiFileText className="w-6 h-6 mr-3 text-blue-500" />
                                How to Submit
                            </h3>
                            <p className="text-base mb-4 text-gray-700">Send your pitch or draft to:</p>
                            <div className="bg-blue-50 border border-blue-200 text-blue-700 p-4 rounded-lg font-semibold text-base md:text-lg mb-6 shadow-inner">
                                <a href="mailto:editor@skilldeck.net" className="">
                                    editor@skilldeck.net
                                </a>

                            </div>

                            <ul className="space-y-5">
                                {[
                                    {
                                        label: "Subject line:",
                                        detail: "Guest Post Submission – [Your Topic Title]",
                                    },
                                    { label: "A brief intro about you" },
                                    { label: "Proposed topic(s) or full draft" },
                                    { label: "Links to previous writing samples (if any)" },
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs md:text-sm font-bold mr-3">
                                            {index + 1}
                                        </span>
                                        <div>
                                            <p className="text-sm md:text-base font-semibold text-gray-800">{item.label}</p>
                                            {item.detail && (
                                                <p className="text-xs md:text-sm text-gray-500">{item.detail}</p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* What Happens Next */}
                        <div className="bg-white rounded-2xl p-4 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 ease-in-out">
                            <h3 className="text-lg md:text-2xl font-bold mb-6 flex items-center text-green-700">
                                <FiCheckCircle className="w-6 h-6 mr-3 text-green-500" />
                                What Happens Next?
                            </h3>

                            <ul className="space-y-6">
                                {[
                                    {
                                        step: "Review Process",
                                        desc: "Our editorial team will review your submission within 7–10 working days.",
                                        color: "from-green-400 to-blue-500",
                                    },
                                    {
                                        step: "Feedback & Revisions",
                                        desc: "We may suggest edits or request revisions to enhance your content.",
                                        color: "from-blue-500 to-purple-500",
                                    },
                                    {
                                        step: "Approval & Scheduling",
                                        desc: "Once approved, we'll schedule it and inform you of the publishing date.",
                                        color: "from-purple-500 to-pink-500",
                                    },
                                    {
                                        step: "Publishing & Promotion",
                                        desc: "Upon publishing, we'll promote it and tag you (if handles are provided).",
                                        color: "from-pink-500 to-red-500",
                                    },
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start ">
                                        <div
                                            className={`bg-gradient-to-r ${item.color} rounded-full w-8 h-8 flex items-center justify-center text-white text-xs md:text-sm font-bold mr-2 md:mr-4 shadow-lg`}
                                        >
                                            {index + 1}
                                        </div>
                                        <div>
                                            <p className="text-sm md:text-base font-semibold text-gray-800 mb-1">
                                                {item.step}
                                            </p>
                                            <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="mt-16 text-center">
                        <div className="bg-white rounded-2xl p-5 md:p-10 border border-gray-200 shadow-xl inline-block max-w-xl w-full hover:shadow-2xl transition-all">
                            <h3 className="text-lg md:text-2xl font-bold mb-4 text-blue-700">
                                Let&apos;s Build the Future of Learning, Together
                            </h3>
                            <p className="text-sm md:text-base text-gray-700 mb-6">
                                Join a growing list of guest authors, trainers, thought leaders, and professionals who are shaping how India and the world approach learning, careers, and upskilling.
                            </p>
                            <div className="flex flex-col md:flex-row gap-5 justify-center items-center space-x-6">
                                <span className="text-sm text-gray-600">Ready to write?</span>
                                <a href="mailto:editor@skilldeck.net" className="bg-prime-blue text-white px-4 md:px-8 py-2 md:py-3 text-sm md:text-base rounded-full font-semibold hover:bg-prime-dark transition duration-300 transform hover:scale-105 shadow-lg">
                                    editor@skilldeck.net
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default GuestAuthor;