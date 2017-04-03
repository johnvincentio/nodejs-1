/* jshint node: true */
/* jshint esnext: true */

'use strict';

const nodemailer = require('nodemailer');
const {logger} = require('./utilities/logger');

// stored in `.env` -- never store passwords, api keys
// etc. inside source code
const {ALERT_FROM_EMAIL, ALERT_FROM_NAME, ALERT_TO_EMAIL, SMTP_URL} = process.env;

logger.debug('SMTP_URL '+SMTP_URL);
logger.debug('ALERT_FROM_EMAIL '+ALERT_FROM_EMAIL);

// `emailData` is an object that looks like this:
// {
//  from: "foo@bar.com",
//  to: "bizz@bang.com, marco@polo.com",
//  subject: "Hello world",
//  text: "Plain text content",
//  html: "<p>HTML version</p>"
// }

const createEmail = (err) => {
    const subject = `SERVICE ALERT: ${err.name}`;
    const text = `Email Error; ${err.message} Stack trace: ${err.stack}`;
    const html = `<h1>Email Error</h1><p>Error message: ${err.message}</p><p> Stack trace: ${err.stack}</p>`;
    return {
        from: ALERT_FROM_NAME + ' ' + ALERT_FROM_EMAIL,
        to: ALERT_TO_EMAIL,
        subject: subject,
        text: text,
        html: html
    };
};

const sendEmail = (emailData, smtpUrl = SMTP_URL) => {
    const transporter = nodemailer.createTransport(smtpUrl);
    logger.info(`Attempting to send email from ${emailData.from}`);
    return transporter
        .sendMail(emailData)
        .then(info => console.log(`Message sent: ${info.response}`))
        .catch(err => console.log(`Problem sending email: ${err}`));
};

module.exports = {
    sendEmail, createEmail
};
