
import Footer from '@/components/others/Footer'
import Navbar from '@/components/others/NavBar'
import OtherBanner from '@/components/others/OtherBanner'
import React from 'react'

const index = () => {
    return (
        <>
            <Navbar />
            <OtherBanner
                title={'Terms and Conditions'}
                subtitle={'Please read these terms carefully before using our platform'}
            />
            <div className="bg-gray-50/50 py-12 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
                        <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-gray-900 prose-ol:my-4 prose-ul:my-4 prose-li:my-2">

                            <h3>About the Application License</h3>
                            <p>The web application license is a subscription-based license type, you can subscribe monthly and the minimum lock-in period will be for one year.</p>
                            <p>The application has most of the features needed for the training companies and comes with all the features as it is based on the plan you subscribe.</p>
                            <p>The application license offers hosting as well.</p>
                            <p>The application price doesn't include the front-end, as it's going to be unique and based on the company's requirements and the same is available at a buy at one time and use it forever at a price of 1500 USD.</p>
                            <p>The front end has to be designed as per the backend options/fields and some of them can be altered or renamed within the scope of the application without developing or assuring any new fields development or customization.</p>

                            <h3>Application Brief</h3>
                            <p>The application is purchased and used by the client under the configurations or conditions while the application is delivered/purchased by the client, and it can be used for an indefinite period without any extra charges for the application usage the application will be hosted on the client's server or the server for which client also has access.</p>
                            <p>This license allows the client to use this application indefinitely under the prescribed software host configurations, and this doesn't allow or encourage the client to resell or reuse it on other websites. It's a violation of the terms and conditions.</p>

                            <h3>What's Not Covered</h3>
                            <ol>
                                <li>Domain names</li>
                                <li>Hosting cost</li>
                                <li>SSL certificate</li>
                                <li>Database/application content backup storage (To be opted from respective hosting platforms by clients)</li>
                                <li>Third-party applications cost/subscriptions</li>
                                <li>Web chats</li>
                                <li>Website UI/UX design and development</li>
                                <li>Content creation and updation</li>
                            </ol>

                            <h3>Free First Year Benefits</h3>
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

                            <h3>What's Charged from the Following Year?</h3>
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

                            <h3>Annual Maintenance Fee</h3>
                            <p>From the first year onwards, we charge a nominal annual maintenance fee, which enables the following to be opted at no extra cost.</p>
                            <p><strong>The following services will be covered under the annual maintenance fee and this will not attract additional charges:</strong></p>
                            <ol>
                                <li>Support on upgradation of the servers as per the website content and traffic or client's needs</li>
                                <li>Renewals of domains and servers support</li>
                                <li>Support on renewals and configuration of the existing third-party applications</li>
                                <li>Support on renewals/upgradations of the APIs if the client's activities demand</li>
                                <li>Updating the technology/code to the new versions if the client insists or if it is necessary</li>
                                <li>Updation of tweaks/changes across the website, such as the contact changes, emails, default contents, marketing pixels, schema codes, etc</li>
                                <li>Send to email and receive email changes</li>
                                <li>Performance valuations</li>
                                <li>Error logs and reports checking if required</li>
                                <li>Support whenever the server has an issue</li>
                                <li>Access to all the application usage content, best practices for marketing teams, hacks, etc</li>
                                <li>The annual maintenance covers development, design, support, and maintenance for up to 50 hours monthly. For any development or other work beyond 50 hrs, we charge INR 999 per hour.</li>
                            </ol>
                            <ul>
                                <li>The Annual maintenance charges will be INR 49999/month, and monthly payments can be made. The annual maintenance comprises 50 hrs of support/development/design/creative support every month, and anything beyond 50 Hrs will be billed at Rs. 999 per hour.</li>
                            </ul>
                            <p>You have the option to opt out of annual maintenance, and in this case, you have to opt for 100 Hrs of work/service for a month whenever you opt for any month taken and shall be billed for 100 hours.</p>
                            <ul>
                                <li>The Hourly charges shall cost INR 999 per hour (This doesn't come into the picture if annual maintenance has been opted).</li>
                            </ul>

                            <h3>About the Web Application</h3>
                            <p>The web application is explicitly built for training companies and trainers to help them automate monotonous tasks implemented in various stages by different teams in the organization.</p>

                            <h3>Application Technicalities</h3>
                            <p>This application is built on the MERN stack, the latest framework, which is easily scalable, secure, and best performing for web applications.</p>
                            <ol>
                                <li>Database - MongoDB</li>
                                <li>Backend Technology - Express.js</li>
                                <li>Frontend - React & Next.js</li>
                                <li>Deployment Platform - AWS (Amazon Web Services) / Digital Ocean</li>
                            </ol>

                            <h3>Application Features</h3>
                            <ol>
                                <li>Course & Categories management</li>
                                <li>Location management (Cities & countries) with the respective timezones and currencies</li>
                                <li>Trainers Management</li>
                                <li>Bulk Dates/Events management for multiple cities/countries</li>
                                <li>User logs</li>
                                <li>Analytics</li>
                                <li>Media management</li>
                                <li>Testimonials management</li>
                                <li>Leads Management</li>
                                <li>Payments module/management</li>
                                <li>Blog Engine</li>
                                <li>Schema Modules for SEO</li>
                                <li>Site-level content management module</li>
                                <li>Bulk upload of changes</li>
                                <li>SEO tool indicating the complete SEO status</li>
                                <li>Technical aspects testing tool built and configured for testing the performance of the webpage</li>
                                <li>Automated email responses to leads and payments to both customers and business owners</li>
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
