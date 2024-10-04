import AboutApplication from '@/components/aboutus/AboutApplication'
import AboutusBanner from '@/components/aboutus/AboutusBanner'
import AboutusSecondsec from '@/components/aboutus/AboutusSecondsec'
import VisionMission from '@/components/aboutus/VisionMission'
import Footer from '@/components/others/Footer'
import Navbar from '@/components/others/NavBar'
import React from 'react'

const index = () => {
    return (
        <>
            <Navbar />
            <AboutusBanner />
            <AboutusSecondsec />
            <AboutApplication />
            <VisionMission />
            <Footer />
        </>
    )
}

export default index
