
/* jshint node: true */
/* jshint esnext: true */

'use strict';

const express = require('express');
const morgan = require('morgan');
const app = express();

const shoppingListRouter = require('./shoppingListRouter');
const recipesRouter = require('./recipesRouter');

app.use(morgan('common'));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use('/shopping-list', shoppingListRouter);
app.use('/recipes', recipesRouter);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
