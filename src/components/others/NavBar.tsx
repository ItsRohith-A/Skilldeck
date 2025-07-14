import Image from 'next/image';
import logo from '../../../public/logos/mainlogo.svg';
import React, { useState } from 'react';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import { IoMdMenu } from 'react-icons/io';

function MainNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling when the menu is open
        } else {
            document.body.style.overflow = 'auto'; // Re-enable scrolling when the menu is closed
        }
    };

    return (
        <div className="py-4 border-b-2">
            <div className='container mx-auto flex justify-between items-center px-4'>
                {/* Logo */}
                <div className="flex items-center gap-6">
                    <Link href='/'>
                        <Image src={logo} alt='logo' className='w-40 h-auto' />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:items-center space-x-6">
                    {/* <Link href="/features" className="text-prime-dark text-sm font-bold capitalize">
                        Features
                    </Link> */}
                    <Link href="/pricing" className="text-prime-dark text-sm font-bold capitalize">
                        Pricing
                    </Link>
                    <Link href="/blog" className="text-prime-dark text-sm font-bold capitalize">
                        Blogs
                    </Link>
                    <Link href="/about-us" className="text-prime-dark text-sm font-bold capitalize">
                        About Us
                    </Link>

                </div>

                {/* Phone Number and Buy Now */}
                <div className="hidden md:flex">

                    <Link href='/contact-us' className='border-2 border-prime-dark font-medium px-4 ml-12 py-2 rounded '>
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700">
                        <IoMdMenu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-white z-50 transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="flex justify-between p-4">
                    <Image src={logo} alt='logo' className='w-40 h-auto' />
                    <button onClick={toggleMenu} className="text-gray-700">
                        <IoClose className="h-6 w-6" />
                    </button>
                </div>
                <div className="flex flex-col space-y-4 p-4">
                    {/* Mobile Links */}
                    {/* <Link href="/features" className="text-prime-dark text-lg font-bold capitalize" onClick={toggleMenu}>
                        Features
                    </Link> */}
                    <Link href="/pricing" className="text-prime-dark text-lg font-bold capitalize" onClick={toggleMenu}>
                        Pricing
                    </Link>
                    <Link href="/blog" className="text-prime-dark text-lg font-bold capitalize">
                        Blogs
                    </Link>
                    <Link href="/about-us" className="text-prime-dark text-lg font-bold capitalize" onClick={toggleMenu}>
                        About Us
                    </Link>
                    <Link href="/contact-us" className="text-prime-dark text-lg font-bold capitalize" onClick={toggleMenu}>
                        Contact Us
                    </Link>
                    {/* <Link href='/contact-us' className='border-2 border-prime-dark font-medium text-center p-2 rounded' onClick={toggleMenu}>
                        Buy Now!
                    </Link> */}
                </div>
            </div>
        </div>
    );
}

export default MainNav;
