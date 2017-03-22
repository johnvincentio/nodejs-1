
/* jshint node: true */
/* jshint esnext: true */

'use strict';

const express = require('express');
var cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());
app.use(express.static('public'));

const cookieName = 'a-b-test';
const alpha = () => Boolean(Math.floor(Math.random() * 2)) ? 'a' : 'b';

const options = {
    maxAge: 1000 * 60 * 15,     // would expire after 15 minutes
    httpOnly: false,             // The cookie only accessible by the web server
    signed: false                // Indicates if the cookie should be signed
};

const logRequest = (req, res, next) => {
    const logObj = {
        time: (new Date()).toTimeString(),
        method: req.method,
        hostname: req.hostname,
        path: req.path,
        "content type": req.get('Content-Type'),
        query: JSON.stringify(req.query),
        body: JSON.stringify(req.body)
    };
    Object.keys(logObj).forEach(key => console.log(`request ${key}: ${logObj[key]}`));
    next();
};
const listCookies = (req, res, next) => {
    console.log('Cookies: ', req.cookies);  // Cookies that have not been signed
    console.log('Signed Cookies: ', req.signedCookies); // Cookies that have been signed
    next();
};

app.all('/', logRequest);
app.all('/', listCookies);

app.get('/', (req, res) => {
    let cookie = req.cookies[cookieName];
    if (req.cookies[cookieName] === undefined) {
        console.log("cookie is undefined");
        res.cookie(cookieName, alpha(), options);
        console.log('cookie created successfully');
    }
    else {
        console.log('Cookie found, value is', cookie);
    }
    res.sendFile(__dirname + '/views/index.html');
});

/*
* remove the cookie for better testing
*/
app.get('/forget', (req, res) => {
    res.clearCookie(cookieName);
    res.send('cookie cleared');
});

app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080 }`));
