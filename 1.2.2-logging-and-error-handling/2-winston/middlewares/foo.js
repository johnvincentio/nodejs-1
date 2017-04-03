
/* jshint node: true */
/* jshint esnext: true */

'use strict';

const {logger} = require('../utilities/logger');

const myEvenBetterFunc = () => {
    logger.info('(foo) `myEvenBetterFunc` running');
    logger.warn('(foo) be forwarned, it\'s gonna blow up');
    try {
        throw "(foo) You're exceptional!";
    } catch (e) {
        logger.error(e);
    }
};

const foo = (req, res, next) => {
    myEvenBetterFunc();
    next();
};

module.exports = {foo};
