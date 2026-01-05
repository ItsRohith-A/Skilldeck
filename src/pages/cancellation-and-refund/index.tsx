
import Footer from '@/components/others/Footer'
import Navbar from '@/components/others/NavBar'
import OtherBanner from '@/components/others/OtherBanner'
import React from 'react'

const index = () => {
    return (
        <>
            <Navbar />
            <OtherBanner
                title={'Cancellation & Refund Policy'}
                subtitle={'Understanding our subscription terms and refund guidelines'}
            />
            <div className="bg-gray-50/50 py-12 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
                        <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-gray-900 prose-ol:my-4 prose-li:my-2">

                            <h3>Cancellation & Refund Policy</h3>
                            <ol>
                                <li>You can cancel your plan at any time if you are done with the first twelve months of using our software/platforms</li>
                                <li>Once subscribed for any plan you may have to complete the cycle and you will not be eligible for any kind of refunds or plan cancellation for already enrolled cycles. You can only cancel for the upcoming months for which you have not yet made the payment or yet to be decided.</li>
                                <li>In case if you have opted for a trial service you are free to cancel the upcoming subscriptions if there are any scheduled for the payments.</li>
                            </ol>

                            <h3>Application Releases</h3>
                            <p>This page will have detailed information about the time-to-time releases and the features incorporated during every release.</p>
                            <p><em>Release version - date (Coming soon)</em></p>

                            <h3>Support Terms</h3>
                            <p><strong>During the first year, this application gets the following for free:</strong></p>
                            <ol>
                                <li>Application usage knowledge transfer or guidelines</li>
                                <li>Access to the support team in case of any issues/errors experienced by the client during the content updation or any other changes on the website</li>
                                <li>Installation of the application/software on the servers</li>
                                <li>Configuration of the application with the front-end website/webpages (The webpages to be designed as per the content blocks of the backend platforms)</li>
                                <li>Payment gateways integrations</li>
                                <li>Support on the third-party apps like the lead squared, web chat, etc. integration</li>
                                <li>Marketing pixels integration or any tracking pixels integration</li>
                                <li>Front-end design tweaks on analyzing the scope of work</li>
                                <li>Content upload support for the default pages like about, contact, terms, privacy policy, etc</li>
                                <li>Admin panel front page customization</li>
                                <li>Suppose the custom website UI/UX and front-end development are chosen with KandraDigital. In that case, we can handle the tweaks of the backend platforms at no additional cost, only if they are communicated upfront in the requirements document.</li>
                                <li>Performance monitoring of the server</li>
                                <li>Upgradation of the servers as per the website content and traffic</li>
                                <li>Renewals of domains and servers support</li>
                                <li>Renewals and configuration of the existing third-party applications</li>
                                <li>Updating the technology/code to the new versions if the client insists it is necessary</li>
                                <li>Updation of tweaks/changes across the website, such as the contact changes, emails, default contents, marketing pixels, schema codes, etc</li>
                                <li>Send to email and receive email changes</li>
                                <li>Performance valuations</li>
                                <li>Error logs and reports checking if required</li>
                                <li>Support whenever the server has an issue</li>
                            </ol>

                            <p>For any custom development or additional features in the application, we charge based on the efforts, and it can be either a fixed amount or billed hourly at INR 999 per hour as per the client's decisions.</p>

                            <h3>What's Chargeable?</h3>
                            <p>The following are all charged based on the effort put into building/implementing it:</p>
                            <ol>
                                <li>Complete change of the frontend design and development</li>
                                <li>Custom changes in the frontend design and development</li>
                                <li>Custom features or changes in the backend application</li>
                                <li>Integration of the platform with third-party applications</li>
                                <li>Development of new features or options as per the client's requirements</li>
                                <li>Migration of the current platform to a new website</li>
                                <li>Adding new features to the application</li>
                                <li>New payment gateway integration</li>
                                <li>API's integration</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default index
