Blog API
========

##Tasks
Here are the requirements for this app:

* Use npm init to create it afresh
* It should support the four CRUD operations for a blog posts resource.
* GET and POST requests should go to /blog-posts.
* DELETE and PUT requests should go to /blog-posts/:id
* Use Express router and modularize routes to /blog-posts
* Add a couple of blog posts on server load so you'll automatically have some data to look at when the server starts.

##Setup
```
npm init
npm install morgan --save-dev
npm install body-parser --save-dev
npm install uuid --save-dev
```


##GET Url
* http://localhost:8080/blog

curl -H "Content-Type:application/json" "http://localhost:8080/blog" 



##POST Url
curl -i -X POST -H "Content-Type:application/json" http://localhost:8080/blog -d '{"title": "title-99", "content": "content-99", "author":"author-99"}'

###Test POST with bad Urls
* curl -i -X POST -H "Content-Type:application/json" http://localhost:8080/blog -d '{"content": "content-99", "author":"author-99"}'
* curl -i -X POST -H "Content-Type:application/json" http://localhost:8080/blog -d '{"title": "title-99", "author":"author-99"}'
* curl -i -X POST -H "Content-Type:application/json" http://localhost:8080/blog -d '{"title": "title-99", "content": "content-99"}'

##DELETE Url
curl -X DELETE 'http://localhost:8080/blog/4f9352fb-9cd1-4bf4-b83e-d481b91ee50f'

###Test Delete with bad data:
curl -X DELETE 'http://localhost:8080/blog/bad-id'

##PUT Urls
Update with Curl PUT:

* curl -i -X PUT -H "Content-Type: application/json" 'http://localhost:8080/blog/cc9ce1d2-9fcc-41dd-805d-caca925d99ab' -d '{"id":"cc9ce1d2-9fcc-41dd-805d-caca925d99ab","title":"title-100","content":"content-100","author":"author-100","publishDate":"06-21-2017"}' 

###Test PUT bad content
Missing title:

* curl -i -X PUT -H "Content-Type: application/json" 'http://localhost:8080/blog/93e21f62-ba72-4c73-bf8d-614b5dea1f40' -d '{"id":"d03c3e9f-8048-44d4-9cf2-0b078b5c5a0c","content":"content-100","author":"author-100","publishDate":"06-21-2017"}'

Missing content:

* curl -i -X PUT -H "Content-Type: application/json" 'http://localhost:8080/blog/93e21f62-ba72-4c73-bf8d-614b5dea1f40' -d '{"id":"93e21f62-ba72-4c73-bf8d-614b5dea1f40","title":"title-100","author":"author-100","publishDate":"06-21-2017"}'

Missing author:

* curl -i -X PUT -H "Content-Type: application/json" 'http://localhost:8080/blog/93e21f62-ba72-4c73-bf8d-614b5dea1f40' -d '{"id":"93e21f62-ba72-4c73-bf8d-614b5dea1f40","title":"title-100","content":"content-100","publishDate":"06-21-2017"}'

Missing publishDate:

* curl -i -X PUT -H "Content-Type: application/json" 'http://localhost:8080/blog/93e21f62-ba72-4c73-bf8d-614b5dea1f40' -d '{"id":"93e21f62-ba72-4c73-bf8d-614b5dea1f40","title":"title-100","content":"content-100","author":"author-100"}' 

Mismatched Ids:

* curl -i -X PUT -H "Content-Type: application/json" 'http://localhost:8080/blog/9-ba72-4c73-bf8d-614b5dea1f40' -d '{"id":"93e21f62-ba72-4c73-bf8d-614b5dea1f40","title":"title-100","content":"content-100","author":"author-100","publishDate":"06-21-2017"}' 


