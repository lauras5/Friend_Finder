var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()

var PORT = process.env.PORT || 3000

var apiRoute = require("./routing/apiRoutes")(app);
var htmlRoute = require("./routing/htmlRoutes")(app);


// middleware
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



app.listen(PORT, function (e) {
    if (e) throw e
    console.log('listening on port ' + PORT)
})


