import React from 'react';
import Body from './Elements/Body';
// import StickyRight from './Elements/StickyRight';
import SocialIcons from './Elements/SocialIcons';
import { RootState } from '@/Redux/rootReducer';
import { useSelector } from 'react-redux';
import CategoryAndCourseListing from '../CategoryAndBlogsListing';
import StickyRight from './Elements/StickyRight';

const ArticleBody = () => {
  const { singleArticle } = useSelector((state: RootState) => state.article);

  return (
    <React.Fragment>
      <div className="relative blog-padding">
        {/* <div className="hidden lg:block absolute top-0 left-0 z-10 h-full">
          <div className="sticky top-48">
            <SocialIcons />
          </div>
        </div> */}

        <div className="container mx-auto md:px-5 lg:pl-16 2xl:px-0">
          <div className="lg:grid grid-cols-12 justify-center gap-5 h-full">
            {/* Main Article Body */}
            <div className=" lg:col-span-9 2xl:col-span-9 p-4 lg:p-0 lg:px-4">
              <Body />
            </div>


            {/* Right Sticky Section */}
            <div className="sticky top-20 hidden md:block lg:col-span-3 px-4 lg:px-0 2xl:col-span-3">
              <StickyRight />
              {/* Sticky */}
            </div>
          </div>

          <div className="md:mt-5">
            <CategoryAndCourseListing title={'EXPLORE BY CATEGORY'} />
          </div>

          {/* FAQs Section */}
          {/* {singleArticle && singleArticle.faqs && singleArticle.faqs.length > 0 && (
            <div className="my-5 pb-10">
              <Faqs data={singleArticle.faqs as any} title="Frequently Asked Questions" />
            </div>
          )} */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ArticleBody;
