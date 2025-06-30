import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import cta from '../../../../../public/cat_blog.png';
import { MdOutlineEmail, MdErrorOutline } from 'react-icons/md';
import { FaLocationArrow } from 'react-icons/fa';
import { ImSpinner2 } from 'react-icons/im';
import { IoMdClose } from 'react-icons/io';

const BlogSubscribe = () => {
    const [email, setEmail] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [showSendIcon, setShowSendIcon] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
    const [statusMessage, setStatusMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setIsTyping(true);
        setShowSendIcon(false);
        setIsError(false);
        setSubmitStatus(null);
    };

    const handleSubmitNewsletter = async () => {
        if (!isValidEmail(email)) {
            setIsError(true);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/open-apis/subscribe`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setStatusMessage(data.message || 'Successfully subscribed!');
                setEmail('');
            } else {
                setSubmitStatus('error');
                setStatusMessage(data.message || 'Failed to subscribe. Please try again.');
            }
        } catch (error) {
            setSubmitStatus('error');
            setStatusMessage('Network error. Please try again later.');
        } finally {
            setIsSubmitting(false);
            setShowAlert(true);
        }
    };


    useEffect(() => {
        if (showAlert) {
            const timer = setTimeout(() => setShowAlert(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [showAlert]);

    useEffect(() => {
        if (email.length > 0) {
            setIsTyping(true);

            const timer = setTimeout(() => {
                if (isValidEmail(email)) {
                    setShowSendIcon(true);
                    setIsError(false);
                } else {
                    setShowSendIcon(false);
                    setIsError(true);
                }
                setIsTyping(false);
            }, 300);

            return () => clearTimeout(timer);
        } else {
            setIsTyping(false);
            setShowSendIcon(false);
            setIsError(false);
        }
    }, [email]);

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !isSubmitting && isValidEmail(email)) {
            handleSubmitNewsletter();
        }
    };

    return (
        <div className="md:relative  md:mr-0 bg-white rounded-lg" >
            {/* Popup Modal */}
            {showAlert && (
                <div className="fixed top-10 right-5 bg-white shadow-lg p-4 rounded-lg flex items-center space-x-3 transition-transform transform translate-x-0 ">
                    {submitStatus === 'success' ? (
                        <span className="text-green-500 text-xs md:text-sm font-semibold">✔ {statusMessage}</span>
                    ) : (
                        <span className="text-red-500 text-xs md:text-sm font-semibold">✖ {statusMessage}</span>
                    )}
                    <button onClick={() => setShowAlert(false)} className="text-gray-500 hover:text-black">
                        <IoMdClose className="text-lg" />
                    </button>
                </div>
            )}

            {/* Desktop Layout */}
            <div className="relative hidden md:block rounded-lg w-full bg-prime-yellow/10 ">
              
                <div className=" px-4 pt-4 space-y-2">
                    <div className="hidden lg:flex gap-1 flex-col">
                        <div className="text-black  text-base lg:text-lg font-semibold">Subscribe Newsletter</div>
                        <span className="text-gray-500 text-sm">Enter your email to receive our valuable newsletters.</span>
                    </div>
                    <div className=" relative">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            onKeyPress={handleKeyPress}
                            className={`border p-2 px-4 rounded-lg text-black text-sm w-full focus:outline-none focus:ring-2 ${isError ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-prime-yellow'
                                } pr-10`}
                        />
                        <span className="absolute right-4 top-1/2 transform -translate-y-1/2">
                            {isSubmitting || isTyping ? (
                                <ImSpinner2 className="text-prime-yellow text-lg animate-spin" />
                            ) : isError ? (
                                <MdErrorOutline className="text-red-500 text-lg" />
                            ) : showSendIcon ? (
                                <button onClick={handleSubmitNewsletter} className='mt-1' disabled={isSubmitting}>
                                    <FaLocationArrow className="text-prime-yellow text-lg" />
                                </button>
                            ) : (
                                <MdOutlineEmail className="text-prime-yellow text-lg" />
                            )}
                        </span>
                    </div>
                </div>
                <div className=" bottom-0 h-full">
                    <Image src={cta} alt="Newsletter" className="h-full mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default BlogSubscribe;
