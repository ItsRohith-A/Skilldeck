import Image from 'next/image';
import logo from '../../../public/logos/mainlogo.svg';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { openForm, updateFormFields } from '@/Redux/slices/Forms/FormSlice';
import { IoClose } from 'react-icons/io5';
import { IoMdMenu } from 'react-icons/io';
import { HiArrowRight } from 'react-icons/hi2';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about-us' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Platform', href: '/platform' },
    { name: 'Insights', href: '/blog' },
    { name: 'Contact', href: '/contact-us' },
];

function MainNav() {
    const dispatch = useDispatch();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const triggerForm = (id: string) => {
        dispatch(openForm());
        dispatch(updateFormFields({
            id,
            type: 'enquiry',
            formId: 1,
            curriculum: false,
            slug: '',
        }));
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        if (!isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    return (
        <header className="fixed -top-4 md:top-0 left-0 right-0 z-50 px-4 py-4">
            <nav className={`container mx-auto transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>
                {/* Desktop Navbar - Floating Pill Design */}
                <div className={`bg-white/95 backdrop-blur-md rounded-full px-4 md:px-6 py-3 shadow-lg border border-gray-100 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'shadow-xl' : ''}`}>
                    {/* Logo */}
                    <Link href='/' className="flex items-center gap-2 flex-shrink-0">
                        <Image src={logo} alt="Logo" width={150} height={150} />
                    </Link>

                    {/* Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-gray-700 text-sm font-medium hover:text-blue-600 transition-colors rounded-full hover:bg-blue-50"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center">
                        <button
                            onClick={() => triggerForm('navbar-try-free')}
                            className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 cursor-pointer"
                        >
                            Try for free
                            <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <HiArrowRight className="w-3 h-3" />
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <IoMdMenu className="h-6 w-6" />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleMenu}
            />

            {/* Mobile Menu Drawer */}
            <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 ease-out lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>


                {/* Mobile Menu Links */}
                <div className="flex flex-col p-5 space-y-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-3 text-gray-700 text-base font-medium hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                            onClick={toggleMenu}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile CTA Button */}
                <div className="p-5 mt-auto">
                    <button
                        onClick={() => { triggerForm('navbar-mobile-try-free'); toggleMenu(); }}
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-3 rounded-full text-base font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                        Try for free
                        <HiArrowRight className="w-4 h-4" />
                    </button>
                </div>
                {/* Mobile Menu Header */}
                <div className="flex justify-between items-center p-5 border-b border-gray-100">
                    <Link href='/' className="flex items-center gap-2" onClick={toggleMenu}>
                        <Image src={logo} alt="Logo" width={150} height={150} />
                    </Link>
                    <button
                        onClick={toggleMenu}
                        className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <IoClose className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default MainNav;
