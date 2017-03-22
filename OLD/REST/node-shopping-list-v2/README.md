Shopping list v2
================

https://github.com/Thinkful-Ed/node-shopping-list-v2

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


