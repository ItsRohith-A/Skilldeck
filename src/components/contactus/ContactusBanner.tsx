import React from 'react'
import email from '../../../public/images/contactus/email.svg'
import Image from 'next/image'
import Link from 'next/link'

const ContactusBanner = () => {
    return (
        <div className='container mx-auto flex flex-col justify-center items-center my-12 gap-6'>
            <div className="text-indigo-500 text-3xl font-semibold ">Contact Us</div>
            <div className="text-slate-900 text-xl font-medium ">You can reach us in multiple ways</div>
            <Link href="mailto:demo@skilldeck.net" className="px-12 py-4 bg-white rounded-lg border border-indigo-500 justify-center items-center gap-6 inline-flex">
                <Image src={email} alt='-' className='size-16' />
                <div className="flex-col justify-start items-center inline-flex">
                    <div className="text-slate-900 text-lg font-normal  leading-normal">You can reach out to us at</div>
                    <div className="text-center text-green-400 text-lg font-bold  leading-normal"> demo@skilldeck.net</div>
                </div>
            </Link>
        </div>
    )
}

export default ContactusBanner
