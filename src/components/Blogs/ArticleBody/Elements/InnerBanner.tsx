import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/rootReducer';
import { FaThumbsUp, FaUser } from 'react-icons/fa';
import { FaUsersViewfinder } from 'react-icons/fa6';
import { MdMenuBook } from 'react-icons/md';

const InnerBanner = () => {
  const { singleArticle } = useSelector((state: RootState) => state.article);
  return (
    <div className="space-y-5">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 border rounded-md">
        <div className="flex items-center gap-4">
          <FaUser className='text-prime-blue text-3xl' />
          <div>
            <div className="text-xs text-gray-600">Author</div>
            <div className="text-sm font-semibold">{singleArticle?.author?.name || 'Unknown'}</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FaThumbsUp className='text-prime-blue text-3xl' />
          <div>
            <div className="text-xs text-gray-600">Upvotes</div>
            <div className="text-sm font-semibold">{singleArticle?.interested || '0'}+</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <FaUsersViewfinder className='text-prime-blue text-3xl'/>
          <div>
            <div className="text-xs text-gray-600">Views</div>
            <div className="text-sm font-semibold">{singleArticle?.view || '0'}+</div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <MdMenuBook className='text-prime-blue text-3xl' />
          <div>
            <div className="text-xs text-gray-600">ReadTime</div>
            <div className="text-sm font-semibold">{singleArticle?.readTime || '0'} mins +</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerBanner;