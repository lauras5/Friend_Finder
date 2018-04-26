var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var app = express()

var apiRoute = require("./routing/apiRoutes")(app);
var htmlRoute = require("./routing/htmlRoutes")(app);

// middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var PORT = process.env.PORT || 3000

app.listen(PORT, function (e) {
    if (e) throw e
    console.log('listening on port ' + PORT)
})


