import BannerImage from '@/components/home/BannerImage'
import Faq from '@/components/home/Faq'
import DevelopmentServices from '@/components/LandingPage/DevelopmentServices'
import LandingBanner from '@/components/LandingPage/LandingBanner'
import Projects from '@/components/LandingPage/Projects'
import Footer from '@/components/others/Footer'
import MainNav from '@/components/others/NavBar'
import React from 'react'

const index = () => {
    return (
        <>
            <MainNav />
            <LandingBanner />
            <DevelopmentServices />
            <Projects />
            <Faq />
            <Footer />
        </>
    )
}

export default index
