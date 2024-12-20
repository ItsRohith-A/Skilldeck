import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import { send } from 'process';

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hello@skilldeck.net',
        pass: 'zeifsttwgnyxsswg',
    },
} as SMTPTransport.Options)

export type SendEmailDto = {
    sender?: Mail.Address,
    receipients: Mail.Address,
    subject: string;
    message: string;
}

export const sendEmail = async (dto: any) => {
    const { receipients, subject, message } = dto;
    return await transport.sendMail({
        from: process.env.MAIL_USER,
        to: receipients,
        subject,
        html: message,
    })

}