# Unit Testing with Mocha and Chai

```
mkdir mocha-chai-demo && cd mocha-chai-demo && npm init -y
npm install --save-dev mocha
echo "module.exports = function(a, b) {return a === b}" >> isEqual.js
mkdir test
touch test/test-is-equal.js
```

package.json:

```
"scripts": {
    "test": "mocha"
  },
```

Mocha recursively looks for .js files in a test folder

cwd:

/Users/jv/Desktop/MyDevelopment/github/nodejs-1/mocha-chai/1/mocha-chai-demo

npm install --save-dev chai

npm test
