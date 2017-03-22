#Drills

##hyperdev-req-resp

###Test using browser
http://localhost:8080?adjective1=red&adjective2=spikey&adjective3=effective&adverb=rapidly&name=Joe&noun=bungee%20cord&place=Kansas


##hyperdev-a-b-test

Installed cookie-parser

```
npm install cookie-parser --save-dev
```

###Test using curl

```
curl http://localhost:8080 --cookie "Alpha=one;Beta=two;b-c=abcd"

curl http://localhost:8080 --cookie "a-b-test=a"
curl http://localhost:8080/forget"

curl --cookie-jar - 'http://localhost:8080'
curl -v 'http://localhost:8080'
```

### Testing Urls
```
http://localhost:8080
http://localhost:8080/forget
```

#### Careful
```
app.use(function (req, res, next) {
```
is used by all requests.

```
const options = {
    maxAge: 1000 * 60 * 15,     // would expire after 15 minutes
    httpOnly: false,             // The cookie only accessible by the web server
    signed: false                // Indicates if the cookie should be signed
};
```

httpOnly = true will not return a cookie to the browser.

