import React from 'react';
import Body from './Elements/Body';
import CategoryAndCourseListing from '../CategoryAndBlogsListing';
import StickyRight from './Elements/StickyRight';
import SkillDeckIntro from './SkillDeckInfi';

const ArticleBody = () => {

  const companies = ['Knowledgehut', 'Zeolearn', 'Invensislearning', 'StarAgile', 'PremierAgile', 'AgileAsia', 'Simpliaxis', 'Nevolearn', 'VLSIFirst', 'VlsiGuru', 'AgileSpark', 'Edugorilla', 'Scala.com.sg', 'Skilldots.com', 'Skilluped.com']

  return (
    <React.Fragment>
      <div className="relative blog-padding">


        <div className="container mx-auto md:px-5">
          <div className="lg:grid grid-cols-12 justify-center gap-5 h-full">
            <div className=" lg:col-span-9 2xl:col-span-9 p-4 lg:p-0 lg:px-4">
              <Body />
            </div>


            {/* Right Sticky Section */}
            <div className="lg:sticky top-20 block lg:col-span-3 px-4 md:px-0 2xl:col-span-3">
              <StickyRight />
            </div>
          </div>

         <SkillDeckIntro/>

          <div className="md:mt-5">
            <CategoryAndCourseListing title={'EXPLORE BY CATEGORY'} />
          </div>

        </div>
      </div>
    </React.Fragment>
  );
};

export default ArticleBody;
