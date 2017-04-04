#Blog API
========

## Tasks
Here are the requirements for this app:

* Use npm init to create it afresh
* It should support the four CRUD operations for a blog posts resource.
* GET and POST requests should go to /blog-posts.
* DELETE and PUT requests should go to /blog-posts/:id
* Use Express router and modularize routes to /blog-posts
* Add a couple of blog posts on server load so you'll automatically have some data to look at when the server starts.

## Setup
```
npm init
npm install morgan --save
npm install body-parser --save
npm install uuid --save
```


## GET Url
* http://localhost:8080/blog-posts

* curl -H "Content-Type:application/json" "http://localhost:8080/blog-posts" 



## POST Url
* curl -i -X POST -H "Content-Type:application/json" http://localhost:8080/blog-posts -d '{"title": "title-99", "content": "content-99", "author":"author-99"}'

###Test POST with bad Urls
* curl -i -X POST -H "Content-Type:application/json" http://localhost:8080/blog-posts -d '{"content": "content-99", "author":"author-99"}'
* curl -i -X POST -H "Content-Type:application/json" http://localhost:8080/blog-posts -d '{"title": "title-99", "author":"author-99"}'
* curl -i -X POST -H "Content-Type:application/json" http://localhost:8080/blog-posts -d '{"title": "title-99", "content": "content-99"}'

##DELETE Url
curl -X DELETE 'http://localhost:8080/blog-posts/ff7c286c-b921-4b04-8800-bf5a5567a463'

###Test Delete with bad data:
curl -X DELETE 'http://localhost:8080/blog-posts/bad-id'

##PUT Urls
Update with Curl PUT:

* curl -i -X PUT -H "Content-Type: application/json" 'http://localhost:8080/blog-posts/2e4a067f-ad23-4be4-bd40-34616029216a' -d '{"id":"2e4a067f-ad23-4be4-bd40-34616029216a","title":"title-100","content":"content-100","author":"author-100","publishDate":"06-21-2017"}' 

###Test PUT bad content
Missing title:

* curl -i -X PUT -H "Content-Type: application/json" 'http://localhost:8080/blog-posts/2e4a067f-ad23-4be4-bd40-34616029216a' -d '{"id":"2e4a067f-ad23-4be4-bd40-34616029216a","content":"content-100","author":"author-100","publishDate":"06-21-2017"}'

Missing content:

* curl -i -X PUT -H "Content-Type: application/json" 'http://localhost:8080/blog-posts/2e4a067f-ad23-4be4-bd40-34616029216a' -d '{"id":"2e4a067f-ad23-4be4-bd40-34616029216a","title":"title-100","author":"author-100","publishDate":"06-21-2017"}'

Missing author:

* curl -i -X PUT -H "Content-Type: application/json" 'http://localhost:8080/blog-posts/2e4a067f-ad23-4be4-bd40-34616029216a' -d '{"id":"2e4a067f-ad23-4be4-bd40-34616029216a","title":"title-100","content":"content-100","publishDate":"06-21-2017"}'

Mismatched Ids:

* curl -i -X PUT -H "Content-Type: application/json" 'http://localhost:8080/blog-posts/2e4a067f-ad23-4be4-bd40-34616029216a' -d '{"id":"93e21f62-ba72-4c73-bf8d-614b5dea1f40","title":"title-100","content":"content-100","author":"author-100","publishDate":"06-21-2017"}' 


