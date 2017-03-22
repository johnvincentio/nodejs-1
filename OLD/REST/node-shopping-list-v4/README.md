Shopping list v4
================

https://github.com/Thinkful-Ed/node-shopping-list-v4

##ServerSide Debugging
devtool server.js --break

##Gotchas
* be sure to get content type correct else express body parser will incorrectly parse out the data.


##GET Url
* http://localhost:8080/shopping-list
* http://localhost:8080/recipes

wget:

* wget -S -O - "http://localhost:8080/shopping-list" 
* wget -S -O - "http://localhost:8080/recipes" 

curl:

* curl -H "Content-Type:application/json" "http://localhost:8080/shopping-list" 
* curl -H "Content-Type:application/json" "http://localhost:8080/recipes" 


##POST Url
wget:

* wget -O- --post-data='{"name": "coffee", "budget": "6"}' --header=Content-Type:application/json "http://localhost:8080/shopping-list"
* wget -O- --post-data='{"name": "abc", "ingredients": ["a", "b", "c"]}' --header=Content-Type:application/json "http://localhost:8080/recipes"

curl:

* curl -i -X POST -H "Content-Type:application/json" http://localhost:8080/shopping-list -d '{"name": "test", "budget": "99"}'

* curl -i -X POST -H "Content-Type:application/json" http://localhost:8080/recipes -d '{"name": "abc", "ingredients": ["a", "b", "c"]}'


###Test POST with bad Urls
* wget -O- --post-data='{"name": "abc"}' --header=Content-Type:application/json "http://localhost:8080/recipes"
* wget -O- --post-data='{"ingredients": ["e", "f"]}' --header=Content-Type:application/json "http://localhost:8080/recipes"
* wget -O- --post-data='{"name": "abc", "ingredients": []}' --header=Content-Type:application/json "http://localhost:8080/recipes"


##DELETE Url
Delete shopping list using delete method:

* curl -X DELETE "http://localhost:8080/shopping-list/:id"

for example:

* curl -X DELETE "http://localhost:8080/shopping-list/72191148-8ca8-45a5-a796-3f9b8139473c"
* curl -X DELETE "http://localhost:8080/recipes/83b2883d-59cb-43c7-aff8-ca0af654ab22"

wget seems to hang:

* wget --method=delete -S -O - "http://localhost:8080/shopping-list/:id"

##PUT Urls
Update with Curl PUT:

* curl -i -X PUT -H "Content-Type: application/json" 'http://localhost:8080/shopping-list/f67c67fc-9a1c-49e5-a8b7-e4702317e09a' -d '{"name":"updated","id":"f67c67fc-9a1c-49e5-a8b7-e4702317e09a","budget":"99"}' 

* curl -i -X PUT -H "Content-Type: application/json" 'http://localhost:8080/recipes/d9c2d37b-ca4c-4a1f-913f-214bee0cf8a7' -d '{"name":"updated","id":"d9c2d37b-ca4c-4a1f-913f-214bee0cf8a7","ingredients":["a","b","c","d"]}' 


wget, note use of --body-data:

* wget --method=put -O- --body-data='{"name": "acoffee", "budget": "9", "id":"b508608f-f0c8-42b4-81b7-d4419daa831d"}' --header=Content-Type:application/json "http://localhost:8080/shopping-list/b508608f-f0c8-42b4-81b7-d4419daa831d"


