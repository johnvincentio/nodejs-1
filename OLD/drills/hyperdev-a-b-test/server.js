/*
npm install cookie-parser --save-dev
*/

/* jshint node: true */

/* jshint esnext: true */

'use strict';

const express = require('express');
var cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());

app.use(express.static('public'));

/*
appears to work instead of app.use(express.static('public')), but may be old

var path = require('path');
res.sendFile(path.join(__dirname + '/views/index.html'));
*/

const cookieName = 'a-b-test';

const alpha = () => Boolean(Math.floor(Math.random() * 2)) ? 'a' : 'b';

const options = {
    maxAge: 1000 * 60 * 15,     // would expire after 15 minutes
    httpOnly: false,             // The cookie only accessible by the web server
    signed: false                // Indicates if the cookie should be signed
};

/*
app.use(function (req, res, next) {
    console.log(">>> app.use");
//    console.log('Cookies: ', req.cookies);  // unsigned cookies
//    console.log('Signed Cookies: ', req.signedCookies); // signed cookies

    if (req.cookies[cookieName] === undefined) {
        res.cookie(cookieName, alpha(), options);
        console.log(`cookie ${cookieName} created successfully`);
    }
    console.log("<<< app.use");
    next();
});
app.get('/', function(req, res) {
    console.log("--- app.get");
    res.sendFile(path.join(__dirname + '/views/index.html'));
});
app.get('/forget', function(req, res) {
    res.clearCookie(cookieName);
    res.send('cookie cleared');
});
*/

/*
problem with this approach is that /forget also uses this.

app.use((req, res, next) => {
    console.log(">>> app.use");
//    console.log('Cookies: ', req.cookies);  // unsigned cookies
//    console.log('Signed Cookies: ', req.signedCookies); // signed cookies

    if (req.cookies[cookieName] === undefined) {
        res.cookie(cookieName, alpha(), options);
        console.log(`cookie ${cookieName} created successfully`);
    }
    else {
        console.log(`Cookie found, value ${req.cookies[cookieName]}`);
    }
    console.log("<<< app.use");
    next();
});
*/

app.get('/', (req, res) => {
    console.log("\n\n\n>>> app.get");
    if (req.cookies[cookieName] === undefined) {
        res.cookie(cookieName, alpha(), options);
        console.log(`cookie ${cookieName} created successfully`);
    }
    else {
        console.log(`Cookie found, value ${req.cookies[cookieName]}`);
    }
    res.sendFile(__dirname + '/views/index.html');
    console.log("<<< app.get");
});

app.get('/forget', (req, res) => {
    res.clearCookie(cookieName);
    res.send('cookie cleared');
});

// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
    `Your app is listening on port ${process.env.PORT || 8080 }`));

/*
res.cookie(cookie_name , alpha()).send('Cookie is set');
*/
