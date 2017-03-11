#Middleware Challenge


##Starter Files
[Start with these files](https://github.com/Thinkful-Ed/node-email-alert-middleware-challenge-starter)

## Challenge

To complete this challenge, write a middleware function that meets the following requirements:

* In the event of a FooError or BarError, the app should send an email alert to a recipient you specify in a config file (.env).
* BizzErrors (roughly one-third of the time) should not trigger email alerts.
* Each alert email should have a subject that looks like this: ALERT: a BarError occurred.
* The alert email should have a from name and from email address. The from name should be something like "SERVICE ALERTS".
* The body should summarize what happened and include the error message (err.message) and the stack trace (err.stack).


##External File
File .env has system specific data that needs to be backed up outside of github. It contains the following keys:

```
ALERT_FROM_EMAIL='account-name@gmail.com'
ALERT_FROM_NAME='SERVICE ALERTS'
ALERT_TO_EMAIL='service-alert-recipient@gmail.com'
SMTP_URL='smtps://account-name@gmail.com:password@smtp.gmail.com'
```

##Logging Levels
logger.js; line 16

* level: 'error' shows only logger.error
* level: 'info' shows info and error
* level: 'debug' shows debug, info and error

###Gotchas
* .env is the filename (not obvious)
* app.use() before app.get
* app.use() => after app.get


###Gmail Setup
* Setup a junk email address and 
[turned on less secure apps](https://www.google.com/settings/security/lesssecureapps)
* [login to google](https://myaccount.google.com), connected apps & sites, Allow less secure apps, turn ON.


Did not do the following, although could be interesting to try.

For the Gmail account used to send the email,
[Enable 2-factor-authentication ](https://www.google.com/landing/2step/)

and then created an
[app specific password](https://support.google.com/accounts/answer/185833?hl=en)



###end


