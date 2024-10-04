import Image from 'next/image'
import React from 'react'
import notfound from '../../public/notfound/404img.svg'
import Link from 'next/link'
import NavBar from '@/components/others/NavBar'
import Footer from '@/components/others/Footer'
function Notfound() {
    return (
        <>
            <NavBar />
            <div className='container mx-auto h-screen flex'>
                <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                    <div className="xl:pt-24 w-full xl:w-1/2 pb-12 lg:pb-0 gap-x-12 flex items-center ">
                        <div>
                            <Image src={notfound} alt='404' className='' />
                        </div>
                        <div className="grid">
                            <div className=" z-10">
                                <div className="">
                                    <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                        Looks like you&apos;ve found the
                                        doorway to the great nothing
                                    </h1>
                                    <p className="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
                                </div>
                            </div>
                            <Link href='/' className="sm:w-full lg:w-fit my-2 border rounded md py-4 px-8 text-center bg-prime-blue text-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-prime-blue focus:ring-opacity-50">Take me there!</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Notfound
