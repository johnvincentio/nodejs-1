/*globals $:false */

/* jshint browser: true */

var config = {
    noCookieElement: '.js-no-cookie',
    elementA: '.js-a-container',
    elementB: '.js-b-container',
    cookieName: 'a-b-test',
    valA: 'a',
    valB: 'b'
};

function handleAbTest(config) {

    console.log('Cookie for a/b test: ' + $.cookie(config.cookieName));
    var cookie = $.cookie(config.cookieName);
    $(config.ElementA, config.elementB, config.noCookieElement).addClass('hidden');

    if (cookie === undefined) {
        $(config.noCookieElement).removeClass('hidden');
    } else {
        $(config.noCookieElement).addClass('hidden');
        if (cookie === config.valA) {
            $(config.elementA).removeClass('hidden');
        } else if (cookie === config.valB) {
            $(config.elementB).removeClass('hidden');
        }
    }
}

function listCookies() {
    var theCookies = document.cookie.split(';');
    var aString = '';
    for (var i = 1; i <= theCookies.length; i++) {
        aString += i + ' ' + theCookies[i - 1] + "\n";
    }
    return aString;
}

$(function() {
    console.log("listCookies() :" + listCookies());
    handleAbTest(config);
});
