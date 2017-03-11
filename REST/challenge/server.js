/* jshint node: true */

/* jshint esnext: true */

'use strict';

const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const {BlogPosts} = require('./models');

const jsonParser = bodyParser.json();
const app = express();

// log the http layer
app.use(morgan('common'));

BlogPosts.create('title-1', 'content-1', 'author-1');
BlogPosts.create('title-2', 'content-2', 'author-2');

// when the root of this router is called with GET, return all current Blog items
app.get('/blog', (req, res) => {
    res.json(BlogPosts.get());
});

app.post('/blog', jsonParser, (req, res) => {
    const requiredFields = ['title', 'content', 'author'];
    for (let i = 0; i < requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing \`${field}\` in request body`;
            console.error(message);
            return res.status(400).send(message);
        }
    }

    const item = BlogPosts.create(req.body.title, req.body.content, req.body.author);
    res.status(201).json(item);
});



// when PUT request comes in with updated item, ensure has
// required fields. also ensure that item id in url path, and
// item id in updated item object match. if problems with any
// of that, log error and send back status code 400. otherwise
// call `BlogPosts.update` with updated item.
app.put('/blog/:id', jsonParser, (req, res) => {
    const requiredFields = ['id', 'title', 'content', 'author', 'publishDate'];
    for (let i = 0; i < requiredFields.length; i++) {
        const field = requiredFields[i];
        if (!(field in req.body)) {
            const message = `Missing \`${field}\` in request body`;
            console.error(message);
            return res.status(400).send(message);
        }
    }
    if (req.params.id !== req.body.id) {
        const message2 = (
            `Request path id (${req.params.id}) and request body id ${req.body.id}) must match`);
        console.error(message2);
        return res.status(400).send(message2);
    }
    console.log(`Updating blog item \`${req.params.id}\``);
    const updatedItem = BlogPosts.update({
        id: req.params.id,
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
        publishDate: req.body.publishDate,
    });
    res.status(204).json(updatedItem);
});

// when DELETE request comes in with an id in path, delete that item from BlogPosts.
app.delete('/blog/:id', (req, res) => {
    BlogPosts.delete(req.params.id);
    console.log(`Deleted blog item \`${req.params.ID}\``);
    res.status(204).end();
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});

