/* jshint node: true */

/* jshint esnext: true */

'use strict';

const makeRedirectMiddleware = (redirectsMap) => (req, res, next) => {
    if (Object.keys(redirectsMap).find((entry) => entry === req.path)) {
        console.log(`Redirecting ${req.path} to ${redirectsMap[req.path]}`);
        res.redirect(301, redirectsMap[req.path]);
    } else {
        next();
    }
};

module.exports = {
    makeRedirectMiddleware
};
