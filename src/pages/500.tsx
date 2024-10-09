import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import NavBar from '@/components/others/NavBar';
import Footer from '@/components/others/Footer';
import serverErrorImage from '../../public/notfound/500img.svg'; // Make sure to add your server error image

const ServerError: React.FC = () => {
    return (
        <>
            <NavBar />
            <div className="container mx-auto h-4/6 flex flex-col items-center justify-center">
                <div className="text-center">
                    <div className="flex justify-center mb-6">
                        <Image src={serverErrorImage} alt="Server Error" className="w-64 h-64 md:w-80 md:h-80" />
                    </div>
                    <h1 className="text-gray-800 font-bold text-3xl md:text-4xl">
                        Oops! Something went wrong.
                    </h1>
                    <p className="my-4 text-gray-600 text-sm md:text-base">
                        We’re sorry, but there was a problem with the server. Please try again later or contact support.
                    </p>
                    <div className="flex justify-center gap-5">
                        <Link href="/" className="w-fit my-2 border rounded py-3 px-6 text-center bg-prime-blue text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-prime-blue focus:ring-opacity-50">
                            Take me there!
                        </Link>
                        <Link href="/contact-us" className="w-fit my-2 border-2 rounded py-3 px-6 text-center  border-prime-blue text-prime-dark hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-prime-blue focus:ring-opacity-50">
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ServerError;
