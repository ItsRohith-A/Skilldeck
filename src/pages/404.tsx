import Image from 'next/image';
import React from 'react';
import notfound from '../../public/notfound/404img.svg';
import Link from 'next/link';
import NavBar from '@/components/others/NavBar';
import Footer from '@/components/others/Footer';

function Notfound() {
    return (
        <>
            <NavBar />
            <div className="container mx-auto h-4/6 flex flex-col">
                <div className="flex-grow flex flex-col md:flex-row items-center justify-center px-4 py-24 lg:px-24 lg:py-24">
                    <div className="flex flex-col items-center md:flex-row md:gap-8 w-full max-w-4xl">
                        <div className="flex justify-center mb-6 md:mb-0">
                            <Image src={notfound} alt="404" className="w-64 h-64 md:w-80 md:h-80" />
                        </div>
                        <div className="flex flex-col justify-center text-center md:text-left">
                            <h1 className="text-gray-800 font-bold text-2xl md:text-3xl">
                                Looks like you&apos;ve found the doorway to the great nothing
                            </h1>
                            <p className="my-2 text-gray-800 text-sm md:text-base">
                                Sorry about that! Please visit our homepage to get where you need to go.
                            </p>
                            <div className="flex gap-5">
                                <Link href="/" className="w-fit my-2 border rounded py-3 px-6 text-center bg-prime-blue text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-prime-blue focus:ring-opacity-50">
                                    Take me there!
                                </Link>
                                <Link href="/contact-us" className="w-fit my-2 border-2 rounded py-3 px-6 text-center  border-prime-blue text-prime-dark hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-prime-blue focus:ring-opacity-50">
                                    Get In Touch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Notfound;
