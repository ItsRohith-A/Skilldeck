import React from 'react'

const SkeletonCard = () => {
    return (
        <div className="bg-white flex flex-col justify-between shadow-md border rounded-lg p-6 max-w-sm animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
        </div>
    )
}

export default SkeletonCard
