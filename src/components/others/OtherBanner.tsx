import React from 'react';

interface OtherBannerProps {
    title: string;
}

const OtherBanner: React.FC<OtherBannerProps> = ({ title }) => {
    return (
        <div className="bg-prime-lightblue text-prime-dark px-6 py-24 font-semibold lg:font-bold text-center text-lg md:text-xl lg:text-2xl">
            {title}
        </div>
    );
};

export default OtherBanner;
