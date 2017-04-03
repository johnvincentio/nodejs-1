/* jshint node: true */

/* jshint esnext: true */

'use strict';

let order = 1;

const myPromise = new Promise((resolve, reject) => {
    // `setTimeout` executes its callback function (the first parameter)
    // after the time in milliseconds (second parameter) has completed.

    console.log(`${order}: myPromise started running`);
    order++;

    try {
        setTimeout(() => {
// log here so we can see when this actually executes
            console.log(`${order}: myPromise\'s async work executing`);
// resolve with a value that we can access in a `.then` block below
            resolve('Surprise!');
        }, 3000);
// if anything goes wrong, we'll reject, returning the error
    } catch (err) {
        reject(err);
    }
});

myPromise
    .then(result => {
        console.log(`First promise result is: ${result}`);
    });

function synchronousWork() {
    console.log(`synchronous working going`);
}

synchronousWork();
synchronousWork();
