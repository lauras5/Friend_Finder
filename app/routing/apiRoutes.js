var express = require('express')
var app = express()


app.get('/api/friends', function (req, res) {
    //used to display json of possible friends
    console.log('hi')
})

// app.post('/api/friends', function (req, res) {
//     //used to handle incoming survey results
//     //also handle compatibility logic
// })

