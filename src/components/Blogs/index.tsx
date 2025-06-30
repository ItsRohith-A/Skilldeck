
import React from 'react'
import CategoryAndCourseListing from './CategoryAndBlogsListing'

const Blogs = () => {
  return (
    <React.Fragment>
      <div className='bg-prime-blue md:h-96'>
        <div className="container mx-auto  px-4 py-10 md:py-0 ">
          <div className="flex flex-col justify-center items-center md:h-96 text-white md:gap-5 ">
            <h1 className="text-xl md:text-3xl font-bold text-center mt-6">Expert-driven Insights for Enhanced Growth</h1>
            <p className='text-center font-inter text-sm md:text-base line-clamp-5 md:line-clamp-none'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda corrupti nesciunt, nisi nam ex itaque facere iure atque tempore praesentium?</p>
          </div>
        </div>
      </div>
      <CategoryAndCourseListing title={'EXPLORE BY CATEGORY'} />

    </React.Fragment>
  )
}

export default Blogs