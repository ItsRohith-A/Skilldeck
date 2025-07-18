import { RootState } from '@/Redux/rootReducer';
import { Blogs } from '@/Redux/slices/Blogs/HomePage/types';
import React from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import defaultImage from '../../../../../public/Blogs/default.svg';
import { getMonthsAgo } from '@/components/others/getDaysAgo';


const BlogSticky = () => {
    const { recentBlogs } = useSelector((state: RootState) => state.blogs_and_categories);


    if (recentBlogs)
        return (
            <div>
                <div className="lg:sticky top-16 z-10 bg-white">
                    <div className="">
                        <h4 className="font-bold text-lg">Recent Blogs</h4>
                        <div className="">
                            {/* Check if there are no articles */}
                            {(!recentBlogs || recentBlogs.length === 0) ? (
                                <p className="text-center font-inter text-xl text-gray-500 mt-4">No articles found.</p>
                            ) : (
                                <div className="space-y-1">
                                    {recentBlogs && recentBlogs.slice(0, 4).map((blog: Blogs) => (
                                        <div
                                            key={blog._id}
                                            className="bg-white flex flex-col justify-between border-b p-1 lg:p-3"
                                        >
                                            <div className="flex gap-x-2">
                                                <Image src={blog.thumbnail || defaultImage} unoptimized width={100} height={100} alt="blogimg" className="w-16 h-16 rounded-md object-cover broder border-gray-500" />
                                                <div>
                                                    <div className="text-xs font-semibold mb-2 hover:text-prime/80 ">
                                                        <Link href={`/blog/${blog.slug}`}>
                                                            <span className="line-clamp-2">{blog.title}</span>
                                                        </Link>
                                                    </div>
                                                    <div className="text-xs">{getMonthsAgo(blog.createdAt)}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        );
};

export default BlogSticky;