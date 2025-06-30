import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';

const SocialIcons = () => {
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";

    const socialPlatforms = [
        { label: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, icon: <FaFacebookF className="text-blue-600 hover:text-blue-800" /> },
        { label: 'X', url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`, icon: <FaXTwitter className="text-black hover:text-gray-700" /> },
        { label: 'Linkedin', url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`, icon: <FaLinkedinIn className="text-blue-700 hover:text-blue-900" /> },
        { label: 'WhatsApp', url: `https://wa.me/?text=${encodeURIComponent(currentUrl)}`, icon: <FaWhatsapp className="text-green-500 hover:text-green-700" /> },

    ];

    return (
        <div className="sticky top-20 flex flex-col gap-4 rounded-r-3xl w-fit pl-3">
            {socialPlatforms.map((platform, index) => (
                <Link
                    href={platform.url}
                    target="_blank"
                    rel="nofollow"
                    aria-label={platform.label}
                    key={index}
                    className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300"
                >
                    <div className="text-xl">{platform.icon}</div>
                </Link>
            ))}
        </div>
    );
};

export default SocialIcons;
