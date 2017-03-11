/* jshint node: true */

/* jshint esnext: true */

'use strict';

const express = require('express');
const morgan = require('morgan');

require('dotenv').config(); // this will load our .env file.

/*
provides greater flexibility
var dotenv = require('dotenv');
dotenv.load();
*/
// const {jv} = require('./jv');

const {logger} = require('./utilities/logger');
const {FooError, BarError, BizzError} = require('./errors');    // custom errors

const app = express();

const {sendEmail, createData} = require('./emailer');
/*
useful to check module definition has been found.
console.log(`sendEmail ${sendEmail}`);
*/

const russianRoulette = (req, res) => {
    const errors = [FooError, BarError, BizzError];
    throw new errors[
        Math.floor(Math.random() * errors.length)]('It blew up!');
};

app.use(morgan('common', {stream: logger.stream}));

// app.use(jv);

app.get('*', russianRoulette);

/*
could use instanceof
if (err instanceof FooError || err instanceof BarError)
*/
app.use((err, req, res, next) => {
    logger.debug(`--- app.use(send email); error type ${err.name}`);
    if (err.name !== 'BizzError') {
        logger.debug(`Sending email for error type ${err.name}`);
        const emailData = createData(err);
        sendEmail(emailData);
    }
    next(err);
});

app.use((err, req, res, next) => {
    logger.error(err);
    res.status(500).json({error: 'Something went wrong'}).end();
});

const port = process.env.PORT || 8080;

const listener = app.listen(port, function() {
    logger.info(`Your app is listening on port ${port}`);
});
