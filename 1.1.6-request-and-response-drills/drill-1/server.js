/* jshint node: true */
/* jshint esnext: true */
/* jshint multistr: true */

'use strict';

// Request and response object drills
// ==================================

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

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

// your code here.
app.all('/', logRequest);
app.get('/', (req, res) => {
    let message = `There's a ${req.query.adjective1} new ${req.query.name} in ${req.query.place} and everyone's talking. Stunningly ${req.query.adjective2} and ${req.query.adverb} ${req.query.adjective3}, all the cool kids know it. However, ${req.query.name} has a secret - ${req.query.name}'s a vile vampire.

Will it end with a bite, or with a stake through the ${req.query.noun}?`;

    res.send(message);
});

// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
