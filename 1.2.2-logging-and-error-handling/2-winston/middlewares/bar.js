
/* jshint node: true */
/* jshint esnext: true */

'use strict';

const {logger} = require('../utilities/logger');

const myGreatFunc = () => {
    logger.debug('(bar) `myGreatFunc` running');
    logger.info('(bar) better catch it');
};

const bar = (req, res, next) => {
    myGreatFunc();
    next();
};

module.exports = {bar};
