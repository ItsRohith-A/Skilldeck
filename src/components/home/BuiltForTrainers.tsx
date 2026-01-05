import React from 'react';
import { User, Building2, Globe } from 'lucide-react';

const audiences = [
    {
        icon: User,
        title: "Solo Trainer",
        subtitle: "Individual experts & consultants",
        description: "Launch your training business without a tech team. Get a professional website, LMS, and marketing tools—all in one place.",
        gradient: "from-orange-400 to-amber-500",
        bgGradient: "from-orange-50 to-amber-50"
    },
    {
        icon: Building2,
        title: "Growing Training Institute",
        subtitle: "Small to mid-size training firms",
        description: "Scale your operations without scaling your costs. Manage trainers, students, and revenue from a single dashboard.",
        gradient: "from-blue-400 to-cyan-500",
        bgGradient: "from-blue-50 to-cyan-50"
    },
    {
        icon: Globe,
        title: "Global Training Company",
        subtitle: "Enterprise training organizations",
        description: "Expand globally with multi-currency, multi-timezone, and multi-language support. Enterprise-grade security included.",
        gradient: "from-rose-400 to-orange-500",
        bgGradient: "from-rose-50 to-orange-50"
    }
];

const BuiltForTrainers = () => {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header Section */}
                <div className="text-center mb-12 md:mb-6">
                    {/* Badge */}
                    <div className="inline-block px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-prime-background/10 text-[10px] sm:text-xs tracking-wider uppercase mb-6">
                        <span className='bg-brand-gradient bg-clip-text text-transparent font-bold'>
                            Skilldeck is not a generic SaaS.

                        </span>
                    </div>
                    {/* Main Title */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Built Specifically for{' '}
                        <span className="bg-gradient-ai-color bg-clip-text text-transparent">
                            Trainers &<br className="sm:hidden" /> Training Companies
                        </span>
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mb-6">
                        It is designed only for the training industry, unlike platforms such as Shopify or WooCommerce that are built for e-commerce—not education.
                    </p>

                    {/* Subheading */}
                    <p className="text-gray-500 text-sm md:text-base font-medium">
                        Whether you are:
                    </p>
                </div>

                {/* Audience Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {audiences.map((audience, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-6 md:p-4 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-6">
                                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${audience.bgGradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${audience.gradient} flex items-center justify-center shadow-lg`}>
                                        <audience.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-2">
                                {audience.title}
                            </h3>

                            {/* Subtitle */}
                            <p className="text-gray-400 text-sm mb-4">
                                {audience.subtitle}
                            </p>

                            {/* Description */}
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                {audience.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BuiltForTrainers;
