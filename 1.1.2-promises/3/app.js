/* jshint node: true */

/* jshint esnext: true */

'use strict';

const myFailingPromise = new Promise((resolve, reject) => {

    console.log(`myFailingPromise started running`);

    setTimeout(() => {
        // log here so we can see when this actually executes
        console.log(`myFailingPromise\'s async work executing`);
        // intentionally throwing an exception instead of resolving
        // so we can understand that behavior
        reject('Exception');
    }, 2000);
});

myFailingPromise
    .then(result => {
        console.log(`myFailingPromise: it\'s a miracle if this runs: ${result}`);
    })
    .catch(err => {
        console.log(`myFailingPromise was rejected with: ${err}`);
    });

function synchronousWork() {
    console.log(`synchronous working going`);
}

synchronousWork();
