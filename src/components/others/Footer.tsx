import Link from 'next/link'
import React from 'react'
import { CiLocationOn, CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoIosArrowDropupCircle } from 'react-icons/io';

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className="">
            <div className='bg-black text-white py-12'>
                <div className="container mx-auto flex flex-wrap justify-between gap-8">
                    <div className="lg:w-1/4">
                        <h4 className='text-xl font-bold mb-4'>Start your journey now.</h4>
                        <div className="mb-4">
                            <input
                                type="email"
                                className="form-input rounded-lg py-2 px-4 w-full"
                                placeholder="Email"
                            />
                        </div>
                        <button className='w-full bg-blue-500 text-white py-2 px-4 rounded-lg border border-transparent hover:bg-blue-600'>
                            Submit
                        </button>
                    </div>
                    <div className="lg:w-1/5">
                        <p className="font-semibold text-gray-400 mb-4">Features</p>
                        <div className="flex flex-col space-y-2">
                            <Link href="/" className='hover:text-blue-500'>Documentation</Link>
                            <Link href="/" className='hover:text-blue-500'>Stats</Link>
                            <Link href="/" className='hover:text-blue-500'>Demo</Link>
                            <Link href="/" className='hover:text-blue-500'>Release Overload</Link>
                        </div>
                    </div>
                    <div className="lg:w-1/5">
                        <p className="font-semibold text-gray-400 mb-4">Company</p>
                        <div className="flex flex-col space-y-2">
                            <Link href="/" className='hover:text-blue-500'>Documentation</Link>
                            <Link href="/" className='hover:text-blue-500'>Stats</Link>
                            <Link href="/" className='hover:text-blue-500'>Demo</Link>
                            <Link href="/" className='hover:text-blue-500'>Release Overload</Link>
                        </div>
                    </div>
                    <div className="lg:w-1/4">
                        <p className="font-semibold text-gray-400 mb-4">Offices</p>
                        <div className="flex flex-col space-y-4">
                            <div className='flex items-start mb-4'>
                                <CiLocationOn size={25} className="mr-3" />
                                <p className='text-sm'>
                                    2nd floor, Sri Lakshmi, 39, 24th Main Rd, Agara Village, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102
                                </p>
                            </div>
                            <div className='flex items-center mb-4'>
                                <CiMail size={25} className="mr-3" />
                                <Link href="mailto:clients@kandradigital.com" className='hover:text-blue-500'>clients@kandradigital.com</Link>
                            </div>
                            <div className='flex items-center'>
                                <IoCallOutline size={25} className="mr-3" />
                                <a href="tel:+91-88671-64445" className='text-blue-500 hover:underline'>
                                    +91-82964-94941
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-black border-t border-gray-800 py-4 text-white'>
                <div className="container mx-auto flex justify-between items-center">
                    <p>© 2023 ✣ All rights reserved.</p>
                    <Link href='https://kandradigital.com/' className='hover:underline'>
                        KandraDigital
                    </Link>
                    <button className='p-0 bg-transparent border-none' onClick={scrollToTop}>
                        <IoIosArrowDropupCircle fill='gray' size={40} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer
