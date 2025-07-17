
import React from 'react'
import CategoryAndCourseListing from './CategoryAndBlogsListing'
import RightForm from './CategoryAndBlogsListing/RightForm'

const Blogs = () => {
  return (
    <React.Fragment>
      <div className='bg-prime-blue md:h-96 mb-4 lg:mb-0'>
        <div className="container mx-auto  px-4 py-10 md:py-0 ">
          <div className="flex flex-col justify-center items-center md:h-96 text-white gap-4 md:gap-5 ">
            <h1 className="text-xl md:text-3xl font-bold text-center mt-6">Explore everything about Ed-tech, including top training institutes for your chosen courses, and more.</h1>
            <p className='text-center font-inter text-sm md:text-base line-clamp-5 md:line-clamp-none'>Skilldeck is a leading marketing automation and plug-and-play platform for training companies, offering zero tech headache and a global presence. The only platform that puts you on the growth trajectory in no time.</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="md:grid md:grid-cols-12 gap-x-5">
          <div className="col-span-9">
            <CategoryAndCourseListing title={'EXPLORE BY CATEGORY'} />
          </div>
          <div className="col-span-3 px-4 md:px-0 py-10">
            <RightForm/>
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Blogs