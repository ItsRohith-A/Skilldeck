import { RootState } from '@/Redux/rootReducer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const StickyLeft = () => {
    const router = useRouter();
    const { recentBlogs } = useSelector((state: RootState) => state.blogs_and_categories);
    const { singleArticle } = useSelector((state: RootState) => state.article);
    const currentUrl = 'https://skilldeck.net' + router.asPath;

    if (!singleArticle) return null;

    return (
        <div className="sticky top-0 py-4 px-2">
            {/* Share Links */}
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-5 mt-5 md:mt-0">
                <b className="text-sm md:text-base">Share:</b>
                <Link href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank">
                    <div className="facebook-sprite sprite w-6 h-6 md:w-8 md:h-8"></div>
                </Link>
                <Link href={`https://www.instagram.com/?url=${encodeURIComponent(currentUrl)}`} target="_blank">
                    <div className="instagram-sprite sprite w-6 h-6 md:w-8 md:h-8"></div>
                </Link>
                <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(singleArticle?.meta_title || '')}`} target="_blank">
                    <FaTwitter size={20} className="text-prime-light" />
                </Link>
                <Link href={`https://wa.me/?text=${encodeURIComponent(currentUrl)}`} target="_blank">
                    <div className="whatsapp-sprite sprite w-6 h-6 md:w-8 md:h-8"></div>
                </Link>
                <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(singleArticle?.meta_title || '')}`} target="_blank">
                    <div className="linkedin-sprite sprite w-6 h-6 md:w-8 md:h-8"></div>
                </Link>
            </div>

            {/* Recent Posts */}
            <div className="border p-3 my-3 bg-light rounded-lg hidden lg:block">
                <h4 className="text-md md:text-lg border-b font-bold mb-2">Recent Posts:</h4>
                <ul className="list-disc pl-5 font-inter space-y-1">
                    {recentBlogs?.map((ele) => (
                        <li key={ele._id} className="text-sm md:text-base">
                            <Link href={ele.slug} className="hover:text-blue-900 hover:underline">
                                {ele.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StickyLeft;
