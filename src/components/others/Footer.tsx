import Link from 'next/link';
import React from 'react';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import { IoIosArrowDropupCircle } from 'react-icons/io';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="mt-12 lg:mt-24" id='footer'>
            <div className="bg-black text-white py-12 px-4">
                <div className="lg:container lg:mx-auto">
                    <div className="flex  lg:flex-row flex-col items-center lg:items-start justify-between gap-8">
                        {/* Start Journey Section */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
                            <h4 className="text-xl font-bold mb-4">Start your journey now.</h4>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    className="form-input rounded-lg py-2 px-4 w-full"
                                    placeholder="Email"
                                />
                            </div>
                            <button className="w-full bg-prime-blue text-white py-2 px-4 rounded-lg border border-transparent hover:bg-blue-600">
                                Submit
                            </button>
                        </div>
                        {/* Features Section */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mb-8">
                            <p className="font-semibold text-gray-400 text-center md:text-start mb-4">Features</p>
                            <div className="flex flex-col items-center lg:items-start space-y-2">
                                <Link href="/" className="hover:text-prime-blue">
                                    Demo
                                </Link>
                                <Link href="/" className="hover:text-prime-blue">
                                    Release Overload
                                </Link>
                                <Link href="/contact-us" className="hover:text-prime-blue">
                                    Contact Us
                                </Link>
                                <Link href="/about-us" className="hover:text-prime-blue">
                                    About us
                                </Link>
                            </div>
                        </div>
                        {/* Company Section */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 mb-8">
                            <p className="font-semibold text-gray-400 text-center md:text-start mb-4">Company</p>
                            <div className="flex flex-col items-center lg:items-start space-y-2">
                                <Link href="/privacy-policy" className="hover:text-prime-blue">
                                    Privacy Policy
                                </Link>
                                <Link href="/terms-and-condition" className="hover:text-prime-blue">
                                    Terms & Conditions
                                </Link>
                                <Link href="/cancellation-and-refund" className="hover:text-prime-blue">
                                    Cancellation & Refund Policy
                                </Link>
                            </div>
                        </div>
                        {/* Offices Section */}
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 mb-8">
                            <p className="font-semibold text-center md:text-start text-gray-400 mb-4">Offices</p>
                            <div className="space-y-4">
                                {/* <div className="mb-4 text-center md:text-start space-y-3 md:flex md:items-center">
                                    <div className="flex justify-center md:justify-start">
                                        <CiLocationOn size={25} className="mr-3" />
                                    </div>
                                    <p className="text-sm">
                                        2nd floor, Sri Lakshmi, 39, 24th Main Rd, Agara Village, 1st
                                        Sector, HSR Layout, Bengaluru, Karnataka 560102
                                    </p>
                                </div> */}
                                <div className="mb-4 text-center md:text-start md:flex ">
                                    <div className="flex justify-center md:justify-start">
                                        <CiMail size={25} className="mr-3" />
                                    </div>
                                    <Link href="mailto:clients@kandradigital.com" className="hover:text-prime-blue">
                                        growth@kandradigital.com
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Bottom Section */}
            <div className="bg-black border-t border-gray-800 py-4 text-white">
                <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                    <p>© 2023 ✣ All rights reserved.</p>
                    <Link href="https://kandradigital.com/" className="hover:underline hover:text-prime-blue">
                        KandraDigital
                    </Link>
                    <button className="flex items-center gap-1 text-xs lg:hidden" onClick={scrollToTop}>
                        <IoIosArrowDropupCircle className="text-xl text-prime-dark lg:hover:text-prime-dark/70" />
                        Top
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Footer;
