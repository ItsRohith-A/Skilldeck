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
import { Sparkles, Send, Mail } from 'lucide-react';

const GuestAuthor = () => {
    const benefits = [
        {
            icon: <IoMdTrendingUp className="w-8 h-8" />,
            title: "Amplify Your Voice",
            description: "Reach a growing community of professionals, educators, and businesses worldwide.",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: <FaStar className="w-8 h-8" />,
            title: "Build Authority",
            description: "Position yourself as a thought leader in your niche.",
            gradient: "from-yellow-500 to-orange-500"
        },
        {
            icon: <FaEye className="w-8 h-8" />,
            title: "Get Visibility",
            description: "We promote your articles across our social channels, newsletter, and partner platforms.",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: <FaUsers className="w-8 h-8" />,
            title: "Grow Your Network",
            description: "Connect with our vibrant contributor and mentor ecosystem.",
            gradient: "from-green-500 to-emerald-500"
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
            icon: <FiFileText className="w-5 h-5" />,
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
            icon: <FiEdit3 className="w-5 h-5" />,
            items: [
                "Professional yet conversational tone",
                "Actionable advice, not theory-heavy",
                "Avoid promotional language or affiliate links"
            ]
        },
        {
            title: "Formatting",
            icon: <FiCheckCircle className="w-5 h-5" />,
            items: [
                "Submit as a Google Doc or Word file",
                "Include a short author bio (50–80 words) with headshot (optional)",
                "You may include 1 backlink to your website or social profile (DoFollow if editorially relevant)"
            ]
        },
        {
            title: "What We Don't Accept",
            icon: <FiXCircle className="w-5 h-5" />,
            items: [
                "Plagiarized or AI-generated content without editing",
                "Purely promotional or SEO link-building content",
                "Topics unrelated to skills, careers, or learning",
                "Previously published material"
            ]
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-brand-gradient overflow-hidden">
                {/* Decorative gradient orbs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-violet/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl" />

                <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-center text-white z-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-xs font-semibold tracking-wide uppercase">Join Our Community</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Become a Guest Author
                    </h1>
                    <p className="text-lg md:text-xl mb-4 text-white/90 max-w-3xl mx-auto">
                        Showcase Your Expertise | Grow Your Reach | Contribute to the Future of Skills
                    </p>
                    <p className="mb-8 text-sm md:text-base text-white/70 max-w-4xl mx-auto">
                        At SkillDeck, we're passionate about helping professionals, trainers, and businesses stay ahead in a rapidly evolving world of work. If you have unique insights, practical experiences, or research-backed content around career development, training, digital transformation, or skill-building, we'd love to feature your voice.
                    </p>
                    <a
                        href="#submit"
                        className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 font-semibold rounded-full transform hover:scale-105 text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl gap-2"
                    >
                        Start Writing Today
                        <FaChevronRight className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Benefits Section */}
            <div id="benefits" className="py-16 md:py-24 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-ai-color bg-clip-text text-transparent">
                            Why Write for SkillDeck.net?
                        </h2>
                        <div className="w-20 h-1 bg-brand-gradient mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group"
                            >
                                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto text-white group-hover:scale-110 transition-transform duration-300`}>
                                    {benefit.icon}
                                </div>
                                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3 text-center">{benefit.title}</h3>
                                <p className="text-gray-600 text-sm md:text-base text-center">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Topics Section */}
            <div id="topics" className="py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-ai-color bg-clip-text text-transparent">
                            What We're Looking For
                        </h2>
                        <div className="w-20 h-1 bg-brand-gradient mx-auto rounded-full mb-6"></div>
                        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                            We welcome original, high-quality articles on these exciting topics:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {topics.map((topic, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-br from-gray-50 to-blue-50/50 p-5 md:p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group"
                            >
                                <div className="text-3xl md:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{topic.emoji}</div>
                                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
                                <p className="text-gray-600 text-sm">{topic.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Guidelines Section */}
            <div id="guidelines" className="py-16 md:py-24 bg-brand-gradient text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">Submission Guidelines</h2>
                        <div className="w-20 h-1 bg-white/50 mx-auto rounded-full mb-4"></div>
                        <p className="text-base md:text-lg text-white/80">Before submitting your article, please read and follow these carefully:</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {guidelines.map((guideline, index) => (
                            <div key={index} className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                                <h3 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                                        {guideline.icon}
                                    </div>
                                    {guideline.title}
                                </h3>
                                <ul className="space-y-3">
                                    {guideline.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3">
                                            <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                                            <span className="text-sm text-white/90 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <section id="submit" className="py-16 md:py-24 bg-gray-50/50">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                        {/* How to Submit */}
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-xl lg:text-2xl font-bold mb-6 flex items-center gap-3 bg-gradient-ai-color bg-clip-text text-transparent">
                                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                                    <FiFileText className="w-5 h-5 text-blue-600" />
                                </div>
                                How to Submit
                            </h3>
                            <p className="text-base mb-4 text-gray-700">Send your pitch or draft to:</p>
                            <a
                                href="mailto:editor@skilldeck.net"
                                className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 p-4 rounded-xl font-semibold text-base md:text-lg mb-6 hover:bg-blue-100 transition-colors"
                            >
                                <Mail className="w-5 h-5" />
                                editor@skilldeck.net
                            </a>

                            <ul className="space-y-4">
                                {[
                                    {
                                        label: "Subject line:",
                                        detail: "Guest Post Submission – [Your Topic Title]",
                                    },
                                    { label: "A brief intro about you" },
                                    { label: "Proposed topic(s) or full draft" },
                                    { label: "Links to previous writing samples (if any)" },
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <span className="bg-brand-gradient text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold flex-shrink-0">
                                            {index + 1}
                                        </span>
                                        <div>
                                            <p className="text-sm md:text-base font-semibold text-gray-900">{item.label}</p>
                                            {item.detail && (
                                                <p className="text-xs md:text-sm text-gray-500">{item.detail}</p>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* What Happens Next */}
                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-3 bg-gradient-ai-color bg-clip-text text-transparent">
                                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                    <FiCheckCircle className="w-5 h-5 text-green-600" />
                                </div>
                                What Happens Next?
                            </h3>

                            <ul className="space-y-5">
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
                                    <li key={index} className="flex items-start gap-4">
                                        <div
                                            className={`bg-gradient-to-r ${item.color} rounded-xl w-10 h-10 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-lg`}
                                        >
                                            {index + 1}
                                        </div>
                                        <div>
                                            <p className="text-sm md:text-base font-semibold text-gray-900 mb-1">
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
                    <div className="mt-12 md:mt-16 text-center">
                        <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-xl max-w-2xl mx-auto">
                            <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-ai-color bg-clip-text text-transparent">
                                Let&apos;s Build the Future of Learning, Together
                            </h3>
                            <p className="text-sm md:text-base text-gray-600 mb-8 max-w-lg mx-auto">
                                Join a growing list of guest authors, trainers, thought leaders, and professionals who are shaping how India and the world approach learning, careers, and upskilling.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <span className="text-sm text-gray-500">Ready to write?</span>
                                <a
                                    href="mailto:editor@skilldeck.net"
                                    className="inline-flex items-center gap-2 bg-brand-gradient text-white px-6 md:px-8 py-3 text-sm md:text-base rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                                >
                                    <Send className="w-4 h-4" />
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
