import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/Redux/rootReducer';
import { User, ThumbsUp, Eye, BookOpen } from 'lucide-react';

const InnerBanner = () => {
  const { singleArticle } = useSelector((state: RootState) => state.article);

  const stats = [
    {
      icon: <User className="w-5 h-5" />,
      label: "Author",
      value: singleArticle?.author?.name || 'Unknown',
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: <ThumbsUp className="w-5 h-5" />,
      label: "Upvotes",
      value: `${singleArticle?.interested || '0'}+`,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: <Eye className="w-5 h-5" />,
      label: "Views",
      value: `${singleArticle?.view || '0'}+`,
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      label: "Read Time",
      value: `${singleArticle?.readTime || '0'} mins`,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-4 md:p-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center gap-3 group">
            <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
              {stat.icon}
            </div>
            <div>
              <div className="text-xs text-gray-500">{stat.label}</div>
              <div className="text-sm md:text-base font-semibold text-gray-900">{stat.value}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InnerBanner;
