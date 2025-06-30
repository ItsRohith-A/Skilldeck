import React from 'react'
import { RootState } from '@/Redux/rootReducer';
import { useSelector } from 'react-redux';
import book from '../../../../../public/Blogs/book.svg'
import eye from '../../../../../public/Blogs/eye.svg'
import heart from '../../../../../public/Blogs/heart.svg'
import write from '../../../../../public/Blogs/write.svg'
import Image from 'next/image';

const Banner = () => {
    const { singleArticle } = useSelector((state: RootState) => state.article);

    return (
        <div className="bg-blue-gradient h-80 md:h-96">
            <div className="container = mx-auto px-4">
                <div className="flex flex-col justify-center items-center h-96 text-white gap-3 md:gap-5">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
                        {singleArticle?.title}
                    </h1>

                    <div className="flex flex-wrap justify-center items-center gap-5 md:gap-8 mt-3 md:mt-4">
                        <div className="flex items-center gap-2 md:gap-5 text-sm md:text-base lg:text-lg">
                            <Image src={write} alt="Author" className="w-8 h-8 md:w-10 md:h-10" />
                            {singleArticle?.author?.name}
                        </div>
                        <div className="flex items-center gap-2 md:gap-5 text-sm md:text-base lg:text-lg">
                            <Image src={heart} alt="Upvotes" className="w-8 h-8 md:w-10 md:h-10" />
                            Upvotes {singleArticle?.interested}+
                        </div>
                        <div className="flex items-center gap-2 md:gap-5 text-sm md:text-base lg:text-lg">
                            <Image src={eye} alt="Views" className="w-20 h-12 md:w-10 md:h-10" />
                            Views {singleArticle?.view}+
                        </div>
                        <div className="flex items-center gap-2 md:gap-5 text-sm md:text-base lg:text-lg">
                            <Image src={book} alt="Read time" className="w-8 h-8 md:w-10 md:h-10" />
                            Read time {singleArticle?.readTime} mins+
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
