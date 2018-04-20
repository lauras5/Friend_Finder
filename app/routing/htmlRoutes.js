module.exports()
app.get('/survey', function (req, res) {
    console.log(req)
    res.sendFile(path.join(__dirname + '../public/survey.html'))
})

//set defaul cath-all route that leads to home.html which displays the homepage
app.get('/:goToHome', function (req, res) {
    res.sendFile(path.join(__dirname + '../public/home.html'))
})
