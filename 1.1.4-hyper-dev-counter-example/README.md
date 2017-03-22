Express counter example
=======================

https://github.com/Thinkful-Ed/hyper-dev-counter-example

Simple app to demo Express for Thinkful's Node course.

The backend of this app uses ES6 language features. HyperDev currently runs on a build of Node 4.4.3 (at time of writing, see package.json in this app to confirm), which does not support ES6 out of the box.

To enable ES6, we've activated [harmony mode](https://nodejs.org/en/docs/es6/) in our start script inside of package.json:

```json
"scripts": {
	"start": "node --harmony server.js"
},
```

Note that in order to use `let` inside a module, you need to set `'use strict'` at the top of the module, as in the server.js file for this app.

