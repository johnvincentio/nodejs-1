Shopping list v3
================

https://github.com/Thinkful-Ed/node-shopping-list-v3

##ServerSide Debugging
devtool server.js --break

##Get Url
* http://localhost:8080/shopping-list
* http://localhost:8080/recipes
* wget -S -O - "http://localhost:8080/shopping-list" 
* wget -S -O - "http://localhost:8080/recipes" 

##Post Url
* wget -O- --post-data='{"name": "coffee", "budget": "6"}' --header=Content-Type:application/json "http://localhost:8080/shopping-list"
* wget -O- --post-data='{"name": "abc", "ingredients": ["a", "b", "c"]}' --header=Content-Type:application/json "http://localhost:8080/recipes"


###Testing Post Urls
* wget -O- --post-data='{"name": "abc"}' --header=Content-Type:application/json "http://localhost:8080/recipes"
* wget -O- --post-data='{"ingredients": ["e", "f"]}' --header=Content-Type:application/json "http://localhost:8080/recipes"
* wget -O- --post-data='{"name": "abc", "ingredients": []}' --header=Content-Type:application/json "http://localhost:8080/recipes"


##Delete URL
* Use Postman, set method to delete and
	* http://localhost:8080/shopping-list/:id


##Testing Delete Urls
Add shopping list using post:

* wget -O- --post-data='{"name": "coffee", "budget": "6"}' --header=Content-Type:application/json "http://localhost:8080/shopping-list"

View shopping list:

* http://localhost:8080/shopping-list


Delete shopping list using delete method:

* curl -X DELETE "http://localhost:8080/shopping-list/:id"

for example:

* curl -X DELETE "http://localhost:8080/shopping-list/72191148-8ca8-45a5-a796-3f9b8139473c"
* curl -X DELETE "http://localhost:8080/recipes/83b2883d-59cb-43c7-aff8-ca0af654ab22"

wget seems to hang:

* wget --method=delete -S -O - "http://localhost:8080/shopping-list/:id"


