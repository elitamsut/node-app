var express = require('express');
var port = process.env.LISTEN_PORT || 3000;
var app = express();
var appName = process.env.APP_NAME || "[not set]";  // This should use the APP_NAME environment variable

app.get('/', function(req, res){
    res.send("Hello World, welcome to " + appName);
});

