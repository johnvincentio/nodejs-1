/* jshint node: true */

/* jshint esnext: true */

'use strict';

let promiseCounter = 0;

const randomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const asyncPromiseMaker = () => {
    promiseCounter++;
    const promiseName = `promise${promiseCounter}`;
    console.log(`${promiseName}: started`);
    const result = randomInteger(1, 100);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`promise${promiseName}: doing async work, returning ${result}`);
            resolve(result);
        }, randomInteger(100, 2000));
    });
};

function synchronousWork() {
    console.log(`synchronous working going`);
}

const concurrentPromises = [];
for (let i = 1; i <= 10; i++) {
    concurrentPromises.push(asyncPromiseMaker());
}

Promise
    .all(concurrentPromises)
    .then(results => {
        console.log('Concurrent async calls completed');
        const reduced = results.reduce((a, b) => a + b);
        console.log(`Sum of results is ${reduced}`);
    })
    .catch(err => console.error(err));


synchronousWork();
