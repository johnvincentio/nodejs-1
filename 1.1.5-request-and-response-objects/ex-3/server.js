/* jshint node: true */

/*jshint esnext: true */

'use strict';

// EXAMPLE 3: Path variables
// =========================

const express = require('express');

const app = express();

app.get('/:foo/:bar', (req, res) => {
    const {foo, bar} = req.params;
    res.json({
        foo: foo,
        bar: bar
    });
});


// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
    `Your app is listening on port ${process.env.PORT || 8080}`));
