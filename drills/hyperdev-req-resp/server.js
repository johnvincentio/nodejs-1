/* jshint node: true */

/*jshint esnext: true */

'use strict';

/*
http://localhost:8080?adjective1=red&adjective2=spikey&adjective3=effective&adverb=rapidly&name=Joe&noun=bungee%20cord&place=Kansas
*/

// Request and response object drills
// ==================================

const express = require('express');
const app = express();

/* first try, simple */
/*
app.get('/', function(req, res) {
    let str = `There's a ${req.query.adjective1} new ${req.query.name} in ${req.query.place} and everyone's talking. Stunningly ${req.query.adjective2} and ${req.query.adverb} ${req.query.adjective3}, all the cool kids know it. However, ${req.query.name} has a secret - ${req.query.name}'s a vile vampire.

Will it end with a bite, or with a stake through the ${req.query.noun}?`;
    res.send(str);
});
*/

/* second try, remove repeating req.query using destructuring */
/*
function doTemplate(params) {
    const {adjective1, adjective2, adjective3, adverb, name, noun, place} = params;
    return `There's a ${adjective1} new ${name} in ${place} and everyone's talking. Stunningly ${adjective2} and ${adverb} ${adjective3}, all the cool kids know it. However, ${name} has a secret - ${name}'s a vile vampire.

Will it end with a bite, or with a stake through the ${noun}?`;
}

app.get('/', function(req, res) {
    res.send(doTemplate(req.query));
});
*/

/* third try, use arrow function */

const doTemplate = params => {
    const {adjective1, adjective2, adjective3, adverb, name, noun, place} = params;
    return `There's a ${adjective1} new ${name} in ${place} and everyone's talking. Stunningly ${adjective2} and ${adverb} ${adjective3}, all the cool kids know it. However, ${name} has a secret - ${name}'s a vile vampire.

Will it end with a bite, or with a stake through the ${noun}?`;
};

app.get('/', function(req, res) {
    res.send(doTemplate(req.query));
});


// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
    `Your app is listening on port ${process.env.PORT || 8080}`));

/*
There's a {adjective1} new {name} in {place} and everyone's talking. Stunningly ${adjective2} and {adverb} {adjective3}, all the cool kids know it. However, {name} has a secret - {name}'s a vile vampire.

Will it end with a bite, or with a stake through the {noun}?
*/
