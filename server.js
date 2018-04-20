var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')

var PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/app/public/home.html"));
})

app.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + "/app/public/survey.html"));
})

var user = 
app.post('/friends', function(req, res) {
    var name = req.body.name
    var photo = req.body.photo
    res.render('friends', {user : req.body.user})
})

app.listen(PORT, function (e) {
    if (e) throw e
})