import ContactusBanner from '@/components/contactus/ContactusBanner'
import ContactusForm from '@/components/contactus/ContactusForm'
import Footer from '@/components/others/Footer'
import Navbar from '@/components/others/NavBar'
import React from 'react'

const index = () => {
    return (
        <>
            <Navbar />
            <ContactusBanner />
            <ContactusForm />
            <Footer />
        </>
    )
}

export default index
