
import Footer from '@/components/others/Footer'
import Navbar from '@/components/others/NavBar'
import OtherBanner from '@/components/others/OtherBanner'
import React from 'react'

const index = () => {
    return (
        <>
            <Navbar />
            <OtherBanner
                title={'Privacy Policy'}
                subtitle={'Your privacy is important to us. Learn how we collect, use, and protect your information.'}
            />
            <div className="bg-gray-50/50 py-12 lg:py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
                        <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-gray-900 prose-ul:my-4 prose-li:my-1">
                            <p>This Privacy Policy explains how Skilldeck collects, uses, discloses, and protects the personal information of users who access and use our software as a service (SaaS) platform. The Platform is designed to serve training companies who use it to manage their training programs, clients, and other related activities. We are committed to protecting the privacy of all individuals and organizations using our services.</p>
                            <p>By using our Platform, you agree to the terms and practices described in this Privacy Policy. If you do not agree with this policy, please do not use the Platform.</p>

                            <h3>1. Information We Collect</h3>
                            <h4>a. Information Provided by Training Companies</h4>
                            <p>When a training company signs up to use the Platform, we may collect the following types of information:</p>
                            <ul>
                                <li><strong>Business Information:</strong> Company name, address, and contact details (such as email addresses, phone numbers).</li>
                                <li><strong>Administrator and User Information:</strong> Name, job titles, email addresses, and other relevant details for administrators and authorized users.</li>
                                <li><strong>Financial Information:</strong> Payment details such as credit card information or bank account details.</li>
                            </ul>

                            <h4>b. Information Provided by End Users (Trainees)</h4>
                            <p>When a training company's clients (trainees) use the Platform, we may collect personal data as provided by the training company:</p>
                            <ul>
                                <li><strong>Personal Information:</strong> Name, contact details (email, phone), date of birth, gender, and other personal identifiers.</li>
                                <li><strong>Training Data:</strong> Records of attendance, assessments, progress, certifications, and feedback.</li>
                                <li><strong>User-generated Content:</strong> Any information the trainee submits through the Platform, including forms, responses, and comments.</li>
                            </ul>
                            <p>All the data collected will be the asset or property of the respective training provider and it's all secure.</p>

                            <h4>c. Automatically Collected Information</h4>
                            <p>When users (both Customers and End Users) interact with the Platform, we may collect information automatically:</p>
                            <ul>
                                <li><strong>Usage Data:</strong> IP addresses, browser types, device information, operating systems, and other technical data.</li>
                                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to collect data on how users navigate the Platform and for analytical purposes. You can manage cookie settings through your browser.</li>
                            </ul>

                            <h4>d. Third-party Data</h4>
                            <p>We may also receive personal data about you from third parties, such as payment processors or customer support systems.</p>

                            <h3>2. How We Use the Information</h3>
                            <p>We use the information collected for the following purposes:</p>
                            <ul>
                                <li><strong>To Provide and Improve Services:</strong> To manage accounts, deliver services, process payments, and enhance the functionality and performance of the Platform.</li>
                                <li><strong>Communication:</strong> To send administrative or service-related communications, such as account verification, password management, and updates about our services.</li>
                                <li><strong>Customer Support:</strong> To resolve issues, provide technical support, and respond to inquiries.</li>
                                <li><strong>Analytics and Monitoring:</strong> To analyze usage trends, track user behavior, and improve user experience by identifying areas of improvement.</li>
                                <li><strong>Compliance and Legal Obligations:</strong> To meet legal requirements, such as data protection laws, and to protect the rights and safety of our users and the public.</li>
                            </ul>

                            <h3>3. Data Sharing and Disclosure</h3>
                            <p>We do not sell or rent your personal information to third parties. However, we may share information with:</p>
                            <ul>
                                <li><strong>Service Providers:</strong> Third-party service providers who help us operate our Platform, process payments, or provide other services (e.g. Payment gateways).</li>
                                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of our company, we may transfer personal data as part of the business assets.</li>
                                <li><strong>Legal Obligations:</strong> We may disclose personal information when required by law, legal processes, or government requests.</li>
                                <li><strong>Training Companies:</strong> Customer companies have access to the personal data of their trainees and employees, subject to applicable law.</li>
                            </ul>

                            <h3>4. Data Retention</h3>
                            <p>We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law or for legitimate business purposes. Upon account termination, we will securely delete or anonymize personal data unless we are required by law to retain it.</p>

                            <h3>5. Security Measures</h3>
                            <p>We take data protection seriously and implement various administrative, technical, and physical security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These include encryption, firewalls, secure servers, and access controls. However, no method of transmission over the internet or method of electronic storage is completely secure.</p>

                            <h3>6. Your Data Protection Rights</h3>
                            <p>Depending on your location, you may have the following data protection rights:</p>
                            <ul>
                                <li><strong>Access:</strong> Request access to personal data we hold about you.</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete personal information.</li>
                                <li><strong>Erasure:</strong> Request the deletion of your personal data.</li>
                                <li><strong>Restriction:</strong> Request that we limit the processing of your personal data.</li>
                                <li><strong>Objection:</strong> Object to the processing of your personal data for specific purposes, such as marketing.</li>
                                <li><strong>Portability:</strong> Request a copy of your personal data in a structured, commonly used format.</li>
                                <li><strong>Withdraw Consent:</strong> If we process personal data based on your consent, you have the right to withdraw it at any time.</li>
                            </ul>
                            <p>To exercise any of these rights, please contact us at hello@skilldeck.net.</p>

                            <h3>7. International Data Transfers</h3>
                            <p>If you are located outside of the jurisdiction where our Platform is hosted, your personal information may be transferred to and processed in a different country. We ensure that data transfers comply with applicable data protection laws by implementing appropriate safeguards.</p>

                            <h3>8. Children's Privacy</h3>
                            <p>Our Platform is not intended for use by individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected personal data from a minor without appropriate consent, please contact us, and we will take steps to delete such information.</p>

                            <h3>9. Changes to This Privacy Policy</h3>
                            <p>We may update this Privacy Policy from time to time. When we make changes, we will notify you by revising the date at the top of this policy and, in some cases, providing additional notice (such as via email or within the Platform). We encourage you to review the policy periodically to stay informed about how we are protecting your information.</p>

                            <h3>10. Contact Us</h3>
                            <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at <a href="mailto:hello@skilldeck.net" className="text-brand-600 hover:text-brand-700 font-medium">hello@skilldeck.net</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default index
