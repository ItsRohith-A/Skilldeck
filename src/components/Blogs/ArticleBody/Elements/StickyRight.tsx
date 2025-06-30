import React from 'react';
// import BlogSticky from '../../Sticky';
import BlogSubscribe from './Subscribe';
import BlogSticky from '../Sticky';

const StickyRight = () => {
  

    return (
        <div className='sticky top-2'>

            <div className="md:flex flex-col items-center space-y-4 rounded-lg md:p-3 mt-2">
                <BlogSticky />
            </div>
        </div>
    );
};

export default StickyRight;
