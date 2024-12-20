// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { sendEmail, SendEmailDto } from "@/utils/mail.utils";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        try {
            const data = req.body
            console.log(req.body)
            await sendEmail({ receipients: data.email, subject: "Enquery Response", message: thankYouTemplate(data) });

            await sendEmail({ receipients: process.env.MAIL_USER, subject: "New Lead", message: getHtmlTemplate(data) });

            res.status(200).json({ message: "Email sent successfully" });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ error: error });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader("Allow", ["POST"]);
        res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
}


const getHtmlTemplate = (data: any) => `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            background-color: #ffffff;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #333;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        table tr td {
            padding: 10px;
            border-bottom: 1px solid #f0f0f0;
        }
        table tr td:first-child {
            font-weight: bold;
            color: #555;
        }
        p {
            text-align: center;
            color: #777;
        }
        .highlight {
            background-color: #e8f4ff;
            padding: 5px;
            border-radius: 5px;
            font-weight: bold;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            color: #888;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>New Contact Form Submission</h1>
        <table>
            <tr>
                <td>Name:</td>
                <td class="highlight">${data.name}</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>${data.email}</td>
            </tr>
            <tr>
                <td>Phone:</td>
                <td>${data.phone}</td>
            </tr>
            
            <tr>
                <td>Designation:</td>
                <td>${data.designation}</td>
            </tr>
            <tr>
                <td>Website:</td>
                <td><a href="${data.website}" target="_blank">${data.website}</a></td>
            </tr>
            <tr>
                <td>Country:</td>
                <td>${data.country}</td>
            </tr>
            <tr>
                <td>Message:</td>
                <td>${data.message}</td>
            </tr>
            <tr>
                <td>Need Demo:</td>
                <td>${data.needDemo ? "Yes" : "No"}</td>
            </tr>
        </table>
        <p>Thank you for reaching out!</p>
    </div>
    <div class="footer">
        <p>This is an automated email. Please do not reply.</p>
    </div>
</body>
</html>
    `;

const thankYouTemplate = (data: any) => `

  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Thank You for Contacting Us</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            background-color: #ffffff;
            max-width: 600px;
            margin: 50px auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        h1 {
            color: #333;
            margin-bottom: 20px;
            font-size: 24px;
        }
        p {
            color: #555;
            line-height: 1.6;
            font-size: 16px;
            margin-bottom: 20px;
        }
        .highlight {
            color: #3498db;
            font-weight: bold;
        }
        .cta-button {
            background-color: #3498db;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 5px;
            display: inline-block;
            margin-top: 20px;
            font-size: 16px;
        }
        .cta-button:hover {
            background-color: #2980b9;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            color: #888;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Thank You, <span class="highlight">${data.name}</span>!</h1>
        <p>We have received your message and appreciate you reaching out to us. Our team will review your inquiry and get back to you shortly.</p>
        <p>In the meantime, feel free to explore our website for more information.</p>
        
        <!-- Call to action button (optional) -->
        <a href="https://skilldeck.net/" class="cta-button">Visit Our Website</a>

        <p>Best regards,<br/>The Skilldeck Team</p>
    </div>
    <div class="footer">
        <p>This is an automated email. Please do not reply.</p>
        <p>&copy; 2024 Skilldecks, All rights reserved.</p>
    </div>
</body>
</html>


    `;