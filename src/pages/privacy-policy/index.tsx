
import Footer from '@/components/others/Footer'
import Navbar from '@/components/others/NavBar'
import OtherBanner from '@/components/others/OtherBanner'
import React from 'react'

const index = () => {
    return (
        <>
            <Navbar />
            <OtherBanner title={'Privacy Policy'} />
            <div className="container mx-auto mt-12 lg:mt-24 lg:px-28 px-4">
                <p><span>This Privacy Policy explains how Skilldeck collects, uses, discloses, and protects the personal information of users who access and use our software as a service (SaaS) platform. The Platform is designed to serve training companies who use it to manage their training programs, clients, and other related activities. We are committed to protecting the privacy of all individuals and organizations using our services.</span></p>
                <p><span>By using our Platform, you agree to the terms and practices described in this Privacy Policy. If you do not agree with this policy, please do not use the Platform.</span></p>
                <h3><strong>1. Information We Collect</strong></h3>
                <h4><strong>a. Information Provided by Training Companies&nbsp;</strong></h4>
                <p><span>When a training company signs up to use the Platform, we may collect the following types of information:</span></p>
                <ul>
                    <li><strong>Business Information:</strong><span> Company name, address, and contact details (such as email addresses, phone numbers).</span></li>
                    <li><strong>Administrator and User Information:</strong><span> Name, job titles, email addresses, and other relevant details for administrators and authorized users.</span></li>
                    <li><strong>Financial Information:</strong><span> Payment details such as credit card information or bank account details.</span></li>
                </ul>
                <h4><strong>b. Information Provided by End Users (Trainees)</strong></h4>
                <p><span>When a training company&rsquo;s clients (trainees) use the Platform, we may collect personal data as provided by the training company:</span></p>
                <ul>
                    <li><strong>Personal Information:</strong><span> Name, contact details (email, phone), date of birth, gender, and other personal identifiers.</span></li>
                    <li><strong>Training Data:</strong><span> Records of attendance, assessments, progress, certifications, and feedback.</span></li>
                    <li><strong>User-generated Content:</strong><span> Any information the trainee submits through the Platform, including forms, responses, and comments.</span></li>
                </ul>
                <p><span>All the data collected will be the asset or property of the respective training provider and it's all secure.</span></p>
                <h4><strong>c. Automatically Collected Information</strong></h4>
                <p><span>When users (both Customers and End Users) interact with the Platform, we may collect information automatically:</span></p>
                <ul>
                    <li><strong>Usage Data:</strong><span> IP addresses, browser types, device information, operating systems, and other technical data.</span></li>
                    <li><strong>Cookies and Tracking Technologies:</strong><span> We use cookies and similar tracking technologies to collect data on how users navigate the Platform and for analytical purposes. You can manage cookie settings through your browser.</span></li>
                </ul>
                <h4><strong>d. Third-party Data</strong></h4>
                <p><span>We may also receive personal data about you from third parties, such as payment processors or customer support systems.</span></p>
                <h3><strong>2. How We Use the Information</strong></h3>
                <p><span>We use the information collected for the following purposes:</span></p>
                <ul>
                    <li><strong>To Provide and Improve Services:</strong><span> To manage accounts, deliver services, process payments, and enhance the functionality and performance of the Platform.</span></li>
                    <li><strong>Communication:</strong><span> To send administrative or service-related communications, such as account verification, password management, and updates about our services.</span></li>
                    <li><strong>Customer Support:</strong><span> To resolve issues, provide technical support, and respond to inquiries.</span></li>
                    <li><strong>Analytics and Monitoring:</strong><span> To analyze usage trends, track user behavior, and improve user experience by identifying areas of improvement.</span></li>
                    <li><strong>Compliance and Legal Obligations:</strong><span> To meet legal requirements, such as data protection laws, and to protect the rights and safety of our users and the public.</span></li>
                </ul>
                <h3><strong>3. Data Sharing and Disclosure</strong></h3>
                <p><span>We do not sell or rent your personal information to third parties. However, we may share information with:</span></p>
                <ul>
                    <li><strong>Service Providers:</strong><span> Third-party service providers who help us operate our Platform, process payments, or provide other services (e.g.Payment gateways).</span></li>
                    <li><strong>Business Transfers:</strong><span> In the event of a merger, acquisition, or sale of our company, we may transfer personal data as part of the business assets.</span></li>
                    <li><strong>Legal Obligations:</strong><span> We may disclose personal information when required by law, legal processes, or government requests.</span></li>
                    <li><strong>Training Companies:</strong><span> Customer companies have access to the personal data of their trainees and employees, subject to applicable law.</span></li>
                </ul>
                <h3><strong>4. Data Retention</strong></h3>
                <p><span>We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law or for legitimate business purposes. Upon account termination, we will securely delete or anonymize personal data unless we are required by law to retain it.</span></p>
                <h3><strong>5. Security Measures</strong></h3>
                <p><span>We take data protection seriously and implement various administrative, technical, and physical security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These include encryption, firewalls, secure servers, and access controls. However, no method of transmission over the internet or method of electronic storage is completely secure.</span></p>
                <h3><strong>6. Your Data Protection Rights</strong></h3>
                <p><span>Depending on your location, you may have the following data protection rights:</span></p>
                <ul>
                    <li><strong>Access:</strong><span> Request access to personal data we hold about you.</span></li>
                    <li><strong>Correction:</strong><span> Request correction of inaccurate or incomplete personal information.</span></li>
                    <li><strong>Erasure:</strong><span> Request the deletion of your personal data.</span></li>
                    <li><strong>Restriction:</strong><span> Request that we limit the processing of your personal data.</span></li>
                    <li><strong>Objection:</strong><span> Object to the processing of your personal data for specific purposes, such as marketing.</span></li>
                    <li><strong>Portability:</strong><span> Request a copy of your personal data in a structured, commonly used format.</span></li>
                    <li><strong>Withdraw Consent:</strong><span> If we process personal data based on your consent, you have the right to withdraw it at any time.</span></li>
                </ul>
                <p><span>To exercise any of these rights, please contact us at [Insert Contact Information].</span></p>
                <h3><strong>7. International Data Transfers</strong></h3>
                <p><span>If you are located outside of the jurisdiction where our Platform is hosted, your personal information may be transferred to and processed in a different country. We ensure that data transfers comply with applicable data protection laws by implementing appropriate safeguards.</span></p>
                <h3><strong>8. Children&rsquo;s Privacy</strong></h3>
                <p><span>Our Platform is not intended for use by individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected personal data from a minor without appropriate consent, please contact us, and we will take steps to delete such information.</span></p>
                <h3><strong>9. Changes to This Privacy Policy</strong></h3>
                <p><span>We may update this Privacy Policy from time to time. When we make changes, we will notify you by revising the date at the top of this policy and, in some cases, providing additional notice (such as via email or within the Platform). We encourage you to review the policy periodically to stay informed about how we are protecting your information.</span></p>
                <h3><strong>10. Contact Us</strong></h3>
                <p><span>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</span></p>
            </div>
            <Footer />
        </>
    )
}

export default index