import Faq from '@/components/home/Faq'
import DevelopmentServices from '@/components/PortfolioEnveto/DevelopmentServices'
import LandingBanner from '@/components/PortfolioEnveto/LandingBanner'
import Projects from '@/components/PortfolioEnveto/Projects'
import Footer from '@/components/others/Footer'
import MainNav from '@/components/others/NavBar'
import React from 'react'
import ToolsTech from '@/components/PortfolioEnveto/ToolsTech'
import FeaturedProjects from '@/components/PortfolioEnveto/FeaturedProjects'
import ServicesWorkflow from '@/components/PortfolioEnveto/ServicesWorkflow'
import Testimonials from '@/components/PortfolioEnveto/Testimonials'
import UxUiTemplates from '@/components/PortfolioEnveto/UxUiTemplates'
import ApplicationFeatures from '@/components/PortfolioEnveto/ApplicationFeatures'

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
            <ApplicationFeatures />
            <Testimonials />
            <Faq />
            <Footer />
        </>
    )
}

export default index
