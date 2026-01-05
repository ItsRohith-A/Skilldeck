import { getMonthsAgo } from '@/components/others/getDaysAgo';
import { RootState } from '@/Redux/rootReducer';
import { fetch_blogs } from '@/Redux/slices/Blogs/HomePage/blogs_category_listing_slice';
import { BlogCategory, Blogs } from '@/Redux/slices/Blogs/HomePage/types';
import { useParams, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Eye, Clock, User, ChevronDown, ChevronRight } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import LoadMoreSkeleton from './Elements/LoadMoreSkeleton';
import Image from 'next/image';
import Link from 'next/link';
import SkeletonBlogCards from './Elements/SkeletonBlog';
import Listing from './Mobile/Listing';
import profile from '../../../../public/Blogs/defaultProfile.png';
import defaultImage from '../../../../public/Blogs/default.svg';

export const getValidMonthsAgo = (date?: string) => {
    if (!date) return `${Math.floor(Math.random() * 12) + 1} months ago`;

    const monthsAgo = getMonthsAgo(date);
    return isNaN(Number(monthsAgo)) ? `${Math.floor(Math.random() * 12) + 1} months ago` : `${monthsAgo} months ago`;
};

const CategoryAndCourseListing = ({ title }: { title: string }) => {
    const { categories, blogsByCategory, loading } = useSelector((state: RootState) => state.blogs_and_categories);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [visibleBlogs, setVisibleBlogs] = useState(8);
    const [loadingMore, setLoadingMore] = useState(false);
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const pathname = usePathname();
    const isBlogDetailPage = /^\/blog\/[^\/]+$/.test(pathname);
    // When categories load, auto-select the first one
    useEffect(() => {
        if (!selectedCategory && categories && categories.length > 0) {
            setSelectedCategory(categories[0].name);
        }
    }, [categories, selectedCategory]);
    const params = useParams();

    const handleCategoryClick = (name: string) => {
        setSelectedCategory(name);
        setActiveIndex(0);
        setVisibleBlogs(8);
    };

    useEffect(() => {
        if (selectedCategory) {
            const categoryPage = blogsByCategory[selectedCategory]?.page || 1;
            dispatch(fetch_blogs({ slug: selectedCategory, page: categoryPage as any }) as any);
        }
    }, [dispatch, selectedCategory]);

    const LoadMore = async () => {
        if (!selectedCategory) return;

        setLoadingMore(true);

        const currentPage = blogsByCategory[selectedCategory]?.page || 1;
        const nextPage = currentPage + 1;

        try {
            await dispatch(fetch_blogs({ slug: selectedCategory, page: nextPage }) as any);
            setVisibleBlogs((prev) => prev + 4);
        } catch (error) {
            console.error("Error loading more blogs:", error);
        } finally {
            setLoadingMore(false);
        }
    };

    const scrollCategories = () => {
        const categoryList = document.getElementById('category-list');
        if (categoryList) {
            categoryList.scrollLeft += 150;
        }
    };

    const currentCourses = blogsByCategory?.[selectedCategory || '']?.blogs || [];
    const selectedCategoryData = blogsByCategory[selectedCategory || 'agile'];

    return (
        <div className="container mx-auto px-4 lg:px-0">
            <div className="md:py-10">
                <div className="lg:grid lg:grid-cols-12 gap-6 items-center">
                    <div className="col-span-4 flex flex-col justify-center gap-y-1">
                        <div className="text-gray-400 text-xs font-semibold uppercase tracking-wider">Blogs</div>
                        <h3 className="font-bold text-lg xl:text-2xl bg-gradient-ai-color bg-clip-text text-transparent">{title}</h3>
                    </div>
                    {/* Category Navigation */}
                    <div className="col-span-8 flex items-center justify-items-center gap-3 relative">
                        <div id="category-list" className="flex justify-start items-center lg:gap-2 py-3 px-1 overflow-x-auto scroll-bar cursor-pointer lg:pr-36">
                            {categories?.map((item: BlogCategory) => (
                                <button
                                    key={item.id}
                                    className={`flex text-nowrap items-center gap-x-2 px-4 py-2 text-xs lg:text-sm capitalize rounded-full transition-all duration-300 ${selectedCategory === item.name
                                        ? 'bg-brand-gradient text-white font-semibold shadow-lg shadow-blue-500/25'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium'
                                        }`}
                                    onClick={() => handleCategoryClick(item.name)}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                        {!params?.slug && (
                            <button onClick={scrollCategories} className="block lg:hidden border border-gray-200 p-1.5 rounded-lg hover:bg-gray-50 transition-colors">
                                <ChevronRight size={20} />
                            </button>
                        )}
                        <div className="h-12 w-40 bg-gradient-to-l from-white to-white/0 z-10 absolute right-0 top-0 lg:block hidden pointer-events-none" />
                    </div>
                </div>

                <div className="lg:grid lg:grid-cols-12 gap-6 mt-4">
                    <div className="lg:col-span-12 space-y-5">
                        <Listing
                            loading={loading}
                            currentCourses={currentCourses}
                            setActiveIndex={setActiveIndex}
                            activeIndex={activeIndex}
                            selectedCategoryData={selectedCategoryData}
                            LoadMore={LoadMore}
                        />
                        <div>
                            {loading && currentCourses.length === 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {Array.from({ length: 8 }).map((_, index) => (
                                        <SkeletonBlogCards key={index} />
                                    ))}
                                </div>
                            ) : currentCourses.length === 0 ? (
                                <div className="flex justify-center text-center items-center h-60 bg-gray-50 rounded-2xl">
                                    <p className="text-gray-500">
                                        No Blogs available for{' '}
                                        <span className="font-bold text-gray-900">
                                            {categories?.find((cat: BlogCategory) => cat.name === selectedCategory)?.name}
                                        </span>
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <div className={`hidden md:grid grid-cols-1 sm:grid-cols-2 ${isBlogDetailPage ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} 2xl:grid-cols-3 gap-6`}>
                                        {currentCourses.slice(0, visibleBlogs).map((blog: Blogs) => (
                                            <Link
                                                href={`/blog/${blog.slug}`}
                                                key={blog._id}
                                                className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
                                            >
                                                {/* Image Container with Overlay */}
                                                <div className="relative overflow-hidden">
                                                    <Image
                                                        src={blog.thumbnail || defaultImage}
                                                        width={400}
                                                        height={250}
                                                        unoptimized
                                                        alt={blog.title}
                                                        className="w-full h-44 group-hover:scale-105 transition-transform duration-700 ease-out"
                                                    />
                                                    {/* Gradient Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                                    {/* Category Badge */}
                                                    <div className="absolute top-3 left-3">
                                                        <span className="px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur-sm text-gray-800 rounded-full shadow-sm capitalize">
                                                            {selectedCategory || 'Blog'}
                                                        </span>
                                                    </div>

                                                    {/* Read More Arrow */}
                                                    <div className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                                        <ChevronRight className="w-5 h-5 text-blue-600" />
                                                    </div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-5 space-y-4">
                                                    {/* Stats Row */}
                                                    <div className="flex items-center gap-4">
                                                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium">
                                                            <Eye className="w-3.5 h-3.5" />
                                                            {blog.view}
                                                        </div>
                                                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                                                            <Clock className="w-3.5 h-3.5" />
                                                            {blog?.createdAt ? getMonthsAgo(blog.createdAt) : 'Recently'}
                                                        </div>
                                                    </div>

                                                    {/* Title & Description */}
                                                    <div className="space-y-2">
                                                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2 leading-tight">
                                                            {blog.title}
                                                        </h4>
                                                        <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                                                            {blog.smalldesc}
                                                        </p>
                                                    </div>

                                                    {/* Author */}
                                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                        <div className="flex items-center gap-3">
                                                            <div className="relative">
                                                                <Image
                                                                    src={blog.author.photo || profile}
                                                                    width={40}
                                                                    height={40}
                                                                    alt={blog.author?.name || 'Author'}
                                                                    className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
                                                                    unoptimized
                                                                />
                                                                <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white" />
                                                            </div>
                                                            <div>
                                                                <p className="text-sm font-semibold text-gray-900">{blog?.author?.name || 'Author'}</p>
                                                                <p className="text-xs text-gray-400">Writer</p>
                                                            </div>
                                                        </div>
                                                        <span className="text-xs font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                                                            Read more →
                                                        </span>
                                                    </div>
                                                </div>

                                                {/* Gradient Border Accent on Hover */}
                                                <div className="absolute inset-x-0 bottom-0 h-1 bg-brand-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </Link>
                                        ))}
                                        {loadingMore && (
                                            <>
                                                {Array.from({ length: 4 }).map((_, index) => (
                                                    <div key={`skeleton-${index}`}>
                                                        <LoadMoreSkeleton />
                                                    </div>
                                                ))}
                                            </>
                                        )}
                                    </div>

                                    {/* Load More button */}
                                    {selectedCategoryData?.hasMore && (
                                        <div className="flex justify-center items-center mt-8">
                                            <button
                                                onClick={LoadMore}
                                                disabled={loadingMore}
                                                className="hidden sm:flex gap-2 items-center px-8 py-3 bg-brand-gradient text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                {loadingMore ? 'Loading...' : 'Load More'}
                                                <ChevronDown size={18} className={loadingMore ? 'animate-bounce' : ''} />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryAndCourseListing
