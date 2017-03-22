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

const createData = (err) => {
    logger.debug("--- createData");
    const text = `Email error; ${err.message}
        Stack trace: ${err.stack}`;
    const html = `<h1>Email Error</h1><p>Email error; ${err.message}</p>
<p>Stack trace: ${err.stack}</p>`;
    return {
        from: ALERT_FROM_NAME,
        to: ALERT_TO_EMAIL,
        subject: `SERVICE ALERT: a ${err.name} error occured`,
        text: text,
        html: html
    };
};

const sendEmail = (emailData, smtpUrl = SMTP_URL) => {
    logger.debug("--- sendEmail");
    const transporter = nodemailer.createTransport(smtpUrl);
    logger.info(`Attempting to send email from ${emailData.from}`);
    return transporter
        .sendMail(emailData)
        .then(info => console.log(`Message sent: ${info.response}`))
        .catch(err => console.log(`Problem sending email: ${err}`));
};

module.exports = {
    sendEmail,
    createData
};
