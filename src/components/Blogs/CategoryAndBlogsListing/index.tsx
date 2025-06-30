import { getMonthsAgo } from '@/components/others/getDaysAgo';
import { RootState } from '@/Redux/rootReducer';
import { fetch_blogs } from '@/Redux/slices/Blogs/HomePage/blogs_category_listing_slice';
import { BlogCategory, Blogs } from '@/Redux/slices/Blogs/HomePage/types';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { MdKeyboardDoubleArrowRight, MdOutlineAccessTime, MdOutlineArrowDownward, MdOutlineRemoveRedEye, MdRadioButtonChecked } from 'react-icons/md';
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

        setLoadingMore(true); // Set loading more state

        const currentPage = blogsByCategory[selectedCategory]?.page || 1;
        const nextPage = currentPage + 1;

        try {
            // Dispatch action to fetch more blogs
            await dispatch(fetch_blogs({ slug: selectedCategory, page: nextPage }) as any);

            // Increase the number of visible blogs
            setVisibleBlogs((prev) => prev + 4);
        } catch (error) {
            console.error("Error loading more blogs:", error);
        } finally {
            setLoadingMore(false); // Reset loading more state
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
        <div className="container mx-auto px-4">
            <div className="md:py-10">
                <div className="lg:grid lg:grid-cols-12 gap-6">
                    <div className="col-span-4 flex flex-col justify-center gap-y-2">
                        <div className="text-neutral-400 text-sm 2xl:text-base font-semibold">Blogs</div>
                        <h3 className="font-bold text-base xl:text-2xl">{title}</h3>
                    </div>
                    {/* Category Navigation */}
                    <div className="col-span-8 flex items-center justify-items-center gap-3 relative">
                        <div id="category-list" className="flex justify-start items-center lg:gap-2 py-3 px-1 overflow-x-auto scroll-bar cursor-pointer lg:pr-36">
                            {categories?.map((item: BlogCategory) => (
                                <div
                                    key={item.id}
                                    className={`flex text-nowrap items-center gap-x-2 px-3 py-2 text-xs lg:text-base font-['Inter'] capitalize ${selectedCategory === item.name ? 'font-bold rounded shadow-sm border-prime-blue border-2 ' : 'font-medium bg-white'} rounded-md`}
                                    onClick={() => handleCategoryClick(item.name)}
                                >
                                    <MdRadioButtonChecked className={`${selectedCategory === item.name ? '' : 'hidden'} text-prime-blue`} />
                                    <div>{item.name}</div>
                                </div>
                            ))}
                        </div>
                        {!params?.slug && (
                            <div onClick={scrollCategories} className="block lg:hidden border p-1.5 md:mb-2 rounded cursor-pointer">
                                <MdKeyboardDoubleArrowRight size={22} />
                            </div>
                        )}
                        <div className="h-12 w-40 bg-gradient-to-l from-white to-white/0 z-10 absolute right-0 top-0 lg:block hidden" />
                    </div>
                </div>

                <div className="lg:grid lg:grid-cols-12 gap-6 mt-2">
                    <div className="lg:col-span-12 space-y-5 ">
                        <Listing
                            loading={loading}
                            currentCourses={currentCourses}
                            setActiveIndex={setActiveIndex}
                            activeIndex={activeIndex}
                            selectedCategoryData={selectedCategoryData}
                            LoadMore={LoadMore}
                        />
                        <div className="">
                            {loading && currentCourses.length === 0 ? (
                                <div>
                                    {Array.from({ length: 8 }).map((_, index) => (
                                        <SkeletonBlogCards key={index} />
                                    ))}
                                </div>
                            ) : currentCourses.length === 0 ? (
                                <div className="flex justify-center text-center items-center h-60">
                                    <p>
                                        No Blogs available{' '}
                                        <span className="font-bold text-prime">
                                            {categories?.find((cat: BlogCategory) => cat.name === selectedCategory)?.name}
                                        </span>
                                    </p>
                                </div>
                            ) : (
                                <div className="">
                                    <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                                        {/* Display already loaded blogs */}
                                        {currentCourses.slice(0, visibleBlogs).map((blog: Blogs) => (
                                            <Link href={`/blog/${blog.slug}`} key={blog._id} className="bg-white flex flex-col border border-prime-dark/20 rounded-lg p-3">
                                                <div className="flex flex-col gap-4">
                                                    <Image src={blog.thumbnail || defaultImage} width={100} height={100} unoptimized alt="blogimg" className="w-full h-44" />
                                                    <div className="flex justify-between">
                                                        <div className="text-gray-500 text-sm flex items-center gap-2">
                                                            <MdOutlineRemoveRedEye />
                                                            {blog.view} views
                                                        </div>
                                                        <div className="text-gray-500 text-sm flex items-center gap-1">
                                                            <MdOutlineAccessTime className="text-xl text-prime-dark" />
                                                            {blog?.createdAt ? getMonthsAgo(blog.createdAt) : 'Date not available'}
                                                        </div>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <Link href={`/blog/${blog.slug}`} className="text-lg font-semibold mb-2">
                                                            {blog.title}
                                                        </Link>
                                                        <div className="text-gray-500 text-sm font-inter line-clamp-3">
                                                            {blog.smalldesc}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <Image src={blog.author.photo || profile} width={100} height={100} alt="profile" className="w-10" unoptimized />
                                                        <div className="text-black text-sm font-inter">{blog?.author?.name || 'Author'}</div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                        {/* Show skeleton for new cards being loaded */}
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
                                        <div className="flex justify-center items-center">
                                            <button
                                                onClick={LoadMore}
                                                disabled={loadingMore}
                                                className="hidden sm:flex gap-2 items-center mt-6 px-6 py-2 border border-prime-blue text-prime rounded-lg shadow-md group hover:bg-prime-blue hover:text-white disabled:bg-gray-400"
                                            >
                                                {loadingMore ? 'Loading...' : 'Load more'} <MdOutlineArrowDownward size={20} className='text-prime-blue group-hover:text-white' />
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