var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var app = express()

var PORT = process.env.PORT || 3000

app.listen(PORT, function (e) {
    if (e) throw e
    console.log('listening on port ' + PORT)
})

var apiRoute = require("./routing/apiRoutes");
var htmlRoute = require("./routing/htmlRoutes");

// middleware
// app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



