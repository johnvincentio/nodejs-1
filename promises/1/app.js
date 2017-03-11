/* jshint node: true */

/* jshint esnext: true */

'use strict';

const theAnswer = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = 'foo bar bizz bang';
        resolve(result);
    }, 2000);
});

theAnswer.then(result => console.log(`The answer is: ${result}`));
