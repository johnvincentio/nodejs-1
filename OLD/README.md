#Express Installation

* Already have Homebrew installed.
* Already have Node installed, v6.9.1
* NPM is installed, v4.1.1

Express is already installed:
```
sudo npm install -g express
sudo npm install -g express-generator
```

##Basic Test
```
cd /Users/jv/Desktop/MyDevelopment/github/nodejs-1/1
express hello_express

cd hello_express
```
Notice package.json
```
{
  "name": "hello-express",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.15.2",
    "cookie-parser": "~1.4.3",
    "debug": "~2.2.0",
    "express": "~4.14.0",
    "jade": "~1.11.0",
    "morgan": "~1.7.0",
    "serve-favicon": "~2.3.0"
  }
}
```

###Install dependencies

```
npm install
```

###Run the app
```
npm start
```

###Test App
```
localhost:3000
```

#Bootstrap New Project
```
cd /Users/jv/Desktop/MyDevelopment/github/nodejs-1/2

mkdir learn-npm
cd learn-npm

npm init
take all the defaults, package.json is created
```

Add a dependency
```
npm install --save-dev express
```

## Working with Existing Projects
git clone

cd clone-dir

npm install

##Nodemon
Updates will be automatically applied

```
nodemon server.js
```

#Deploying to Heroku

##login
```
heroku login
email:
password:
```

## Create Heroku App
```
git clone https://github.com/heroku/node-js-getting-started.git
cd nodejs-1/node-js-getting-started
heroku create
```
https://damp-beyond-99576.herokuapp.com/ | https://git.heroku.com/damp-beyond-99576.git


Push app to heroku:
```
git push heroku master
```

After it's done, you make sure you have a dyno running to serve the app.
```
heroku ps:scale web=1
```

Open the Dyno

```
heroku open
```

which is url: https://damp-beyond-99576.herokuapp.com/













