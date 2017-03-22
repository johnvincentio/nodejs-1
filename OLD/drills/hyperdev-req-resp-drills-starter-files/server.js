'use strict';

// Request and response object drills
// ==================================

const express = require('express');
const app = express();

// your code here. 


// listen for requests :)
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
