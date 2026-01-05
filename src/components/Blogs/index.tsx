
import React from 'react'
import CategoryAndCourseListing from './CategoryAndBlogsListing'
import RightForm from './CategoryAndBlogsListing/RightForm'
import SkillDeckIntro from './ArticleBody/SkillDeckInfi'
import { Sparkles } from 'lucide-react'

const Blogs = () => {
  return (
    <React.Fragment>
      {/* Hero Section with Brand Gradient */}
      <div className='relative bg-brand-gradient overflow-hidden'>
        {/* Decorative gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-violet/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="flex flex-col justify-center items-center text-white gap-5 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-semibold tracking-wide uppercase">Insights & Resources</span>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-4xl text-white">
              Explore Everything About Ed-tech & Training
            </h1>
            <p className='text-white/80 text-sm md:text-lg max-w-3xl'>
              Skilldeck is a leading marketing automation and plug-and-play platform for training companies, offering zero tech headache and a global presence.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto">
        <div className="md:grid md:grid-cols-12 gap-x-5">
          <div className="col-span-9">
            <CategoryAndCourseListing title={'EXPLORE BY CATEGORY'} />
          </div>
          <div className="col-span-3 px-4 md:px-0 py-10">
            <RightForm />
          </div>
        </div>
        <SkillDeckIntro />
      </div>

    </React.Fragment>
  )
}

export default Blogs
