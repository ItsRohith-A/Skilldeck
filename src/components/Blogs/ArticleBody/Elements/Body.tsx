import { RootState } from '@/Redux/rootReducer';
import React from 'react';
import { useSelector } from 'react-redux';
import InnerBanner from './InnerBanner';
import { Sparkles } from 'lucide-react';

const Body = () => {
    const { singleArticle } = useSelector((state: RootState) => state.article);
    return (
        <div className='md:py-4 space-y-6'>
            {/* Hero Banner */}
            <div className="relative bg-brand-gradient py-16 md:py-24 text-center text-white rounded-2xl overflow-hidden">
                {/* Decorative gradient orbs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-violet/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 px-6">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-xs font-semibold tracking-wide uppercase">Blog Article</span>
                    </div>

                    <h1 className="text-xl md:text-3xl lg:text-4xl font-bold max-w-4xl mx-auto leading-tight">
                        {singleArticle?.title}
                    </h1>
                </div>
            </div>

            <InnerBanner />

            <div className='blog-body font-inter text-justify prose prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:shadow-lg'>
                <div dangerouslySetInnerHTML={{ __html: singleArticle?.body || '' }} />
            </div>
        </div>
    );
};

export default Body;

