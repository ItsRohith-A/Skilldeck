import { RootState } from '@/Redux/rootReducer';
import React from 'react';
import { useSelector } from 'react-redux';
import InnerBanner from './InnerBanner';
import Image from 'next/image';
import topRight from '../../../../../public/Blogs/blogBannertop.png'
import bottomLeft from '../../../../../public/Blogs/blogBannerbottom.png'
// import logo from '../../../../../public/logo.svg'


const Body = () => {
    const { singleArticle } = useSelector((state: RootState) => state.article);
    return (
        <div className='md:py-4 space-y-4 '>
            {/* <Breadcrumbs /> */}
            <div className=" relative bg-prime/10 py-20 text-center md:py-32 text-prime-dark 2xl:text-3xl font-bold rounded-md ">
                <Image className='absolute right-0 top-0 w-20 md:w-auto ' src={topRight} alt='topBanner' />
                {/* <Image className='absolute hidden md:block left-4 md:left-10 top-3 md:top-5 w-28 lg:w-32 ' src={logo} alt='logo' /> */}
                <Image className='absolute left-0 bottom-0' src={bottomLeft} alt='bottomBanner' />
                {singleArticle?.title}
            </div>
            <InnerBanner />
            <div className='blog-body font-inter text-justify'>
                <div dangerouslySetInnerHTML={{ __html: singleArticle?.body || '' }} />
            </div>

            {/* <div className="pt-10">
                <div className="flex flex-col gap-y-4 col-span-8">
                    <div className="space-y-2   ">
                        <h2 className='text-xl md:text-3xl' >Want to Level Up Your Skills?</h2>
                        <div className="text-xs md:text-sm">Skill is a global training and placement provider helping the graduates to pick the best technology trainings and certification programs.</div>
                        <div className="text-prime-yellow font-bold leading-normal text-sm">Have queries? font Get In touch!</div>
                    </div>
                    <div className="">
                        <BlogForm />
                    </div>

                </div>
            </div> */}
        </div>
    );
};

export default Body;
