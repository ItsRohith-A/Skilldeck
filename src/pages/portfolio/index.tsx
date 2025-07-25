import Faq from '@/components/home/Faq'
import DevelopmentServices from '@/components/Portfolio/DevelopmentServices'
import LandingBanner from '@/components/Portfolio/LandingBanner'
import Projects from '@/components/Portfolio/Projects'
import Footer from '@/components/others/Footer'
import MainNav from '@/components/others/NavBar'
import React from 'react'
import ToolsTech from '@/components/Portfolio/ToolsTech'
import FeaturedProjects from '@/components/Portfolio/FeaturedProjects'
import ServicesWorkflow from '@/components/Portfolio/ServicesWorkflow'
import Testimonials from '@/components/Portfolio/Testimonials'
import UxUiTemplates from '@/components/Portfolio/UxUiTemplates'

const index = () => {
    return (
        <>
            <MainNav />
            <LandingBanner />
            <DevelopmentServices />
            <Projects />
            <ToolsTech />
            <ServicesWorkflow />
            <FeaturedProjects />
            <UxUiTemplates />
            <Testimonials />
            <Faq />
            <Footer />
        </>
    )
}

export default index
