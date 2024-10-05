import React from 'react';
import email from '../../../public/images/contactus/email.svg';
import Image from 'next/image';
import Link from 'next/link';

const ContactusBanner = () => {
    return (
        <div className='container mx-auto flex flex-col justify-center items-center my-12 gap-6 px-4'>
            <div className="text-prime-blue text-2xl lg:text-3xl font-semibold">Contact Us</div>
            <div className="text-slate-900 text-lg lg:text-xl font-medium text-center">You can reach us in multiple ways</div>
            <Link href="mailto:demo@skilldeck.net" className="px-6 py-3 lg:px-12 lg:py-4 bg-white rounded-lg border border-prime-blue justify-center items-center gap-4 lg:gap-6 inline-flex">
                <Image src={email} alt='Email icon' className='w-8 h-8 lg:w-16 lg:h-16' />
                <div className="flex-col justify-start items-center inline-flex text-center">
                    <div className="text-slate-900 text-base lg:text-lg font-normal leading-normal">You can reach out to us at</div>
                    <div className="text-center text-green-400 text-base lg:text-lg font-bold leading-normal">demo@skilldeck.net</div>
                </div>
            </Link>
        </div>
    );
};

export default ContactusBanner;
