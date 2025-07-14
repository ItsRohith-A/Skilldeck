import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdOutlineAccessTime, MdOutlineRemoveRedEye } from 'react-icons/md';
import card from '../../../../../public/Blogs/default.svg';
import eye from '../../../../../public/Blogs/Vector.svg';
import profile from '../../../../../public/Blogs/defaultProfile.png';


const Listing = (
    {
        loading,
        currentCourses,
        setActiveIndex,
        activeIndex,
        selectedCategoryData,
        LoadMore
    }: any) => {

    const handleNext = () => {
        if (activeIndex < currentCourses.length) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    return (
        <div>

            <div className="md:hidden flex flex-col justify-center items-center mt-4 ">
                {/* Course or Load More Card */}
                {activeIndex < currentCourses.length ? (
                    <div className="bg-white flex flex-col justify-between shadow-md border rounded-lg p-2 max-w-sm">
                        <div className="space-y-2" >
                            <div className="space-y-2">
                                <Image src={currentCourses.thumbnail || card} width={100} height={100} unoptimized alt="blogimg" className='w-full h-40' />
                                <div className="flex justify-between ">
                                    <div className="text-gray-500 text-xs flex items-center gap-2">
                                        <MdOutlineRemoveRedEye />
                                        {currentCourses[activeIndex]?.view} views
                                    </div>
                                    <div className="text-gray-500 text-xs flex items-center gap-1">
                                        <MdOutlineAccessTime className="text-xl" />
                                        3 Months
                                    </div>
                                </div>
                                <Link href={`/blog/${currentCourses[activeIndex]?.slug}`} className="text-base font-semibold mb-2 line-clamp-2">
                                    {currentCourses[activeIndex]?.title}
                                </Link>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                                    {currentCourses[activeIndex]?.smalldesc}
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Image src={profile} alt="profile" />
                                <div className="text-black text-sm font-inter">{currentCourses[activeIndex]?.author?.name}</div>
                            </div>
                        </div>
                    </div>
                ) : (
                    selectedCategoryData?.hasMore ? (
                        <div onClick={LoadMore} className="flex-none bg-white p-4 rounded-md border border-gray-200 w-[80%] min-h-56 font-normal max-h-60 flex items-center justify-center cursor-pointer ">
                            <p className="text-prime text-lg font-semibold">{loading ? 'Loading...' : 'Load more'}</p>
                        </div>
                    ) : (
                        <div onClick={LoadMore} className="flex-none bg-white p-4 rounded-md border border-gray-200 w-[80%] min-h-56 font-normal max-h-60 flex items-center justify-center cursor-pointer ">
                            <p className="text-prime text-lg font-semibold">End Of List</p>
                        </div>
                    )
                )}

                {/* Next button and Previous */}
                <div className=" flex gap-x-20 mt-4">
                    {/* Prev Button */}
                    <button onClick={handlePrev} disabled={activeIndex == 0} className={` p-2 rounded-full text-prime-blue hover:bg-prime-blue border ${activeIndex===0?'border-none':'border-prime-blue'}   hover:text-white transition disabled:cursor-not-allowed ${activeIndex == 0 ? "bg-gray-500 text-white" : 'bg-prime'}  border rounded-full shadow`}>
                        <MdKeyboardArrowLeft size={24} />
                    </button>
                    {/* Next Button */}
                    <button onClick={handleNext} disabled={activeIndex >= currentCourses.length} className={` p-2 rounded-full text-prime-blue border border-prime-blue hover:bg-prime-blue hover:text-white transition disabled:cursor-not-allowed ${activeIndex >= currentCourses.length ? "bg-gray-500 text-white" : 'bg-prime'}  border rounded-full shadow`}>
                        <MdKeyboardArrowRight size={24} />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Listing
