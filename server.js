var express = require('express')
var app = express()
// var inq = require('inquirer')
var body = require('body-parser')
var path = require('path')
var PORT = process.env.PORT || 3000

app.listen(PORT, function (e) {
    if (e) throw e
    console.log("App listening on PORT " + PORT);
});
