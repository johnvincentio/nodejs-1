/* jshint node: true */

/* jshint esnext: true */

'use strict';

/*
useful for basic testing
*/

const {logger} = require('./utilities/logger');

const jv = (req, res, next) => {
    logger.info('--- jv');
    next();
};

module.exports = {
    jv
};
