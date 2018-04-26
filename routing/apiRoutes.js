var friendsData = require("../data/friends")

module.exports = function (app) {
    app.post("/api/friends", friendsData, function (req, res) {
        var userInput = req.body;
        var userScores = userInput.userScores;
        var diff = 100;
        var matchName = '';
        var matchPhoto = '';


        for (var i = 0; i < friendsData.length; i++) {
            var scoreDiff = 0
            for (var j = 0; j < userScores.length; j++) {
                scoreDiff += Math.abs(friendsData[i].scores[j] - userScores[j]);
            }

            if (scoreDiff < diff) {
                diff = scoreDiff;
                matchName = friendsData[i].name;
                matchPhoto = friendsData[i].photo
            }
        }
        friendsData.push(userInput);

        console.log(friendsData)
        console.log({
            matchName: matchName, matchPhoto
                : matchPhoto
        })
        res.json({ matchName: matchName, matchPhoto: matchPhoto })
    })

    app.get("/api/friends", function (req, res) {
        res.json(friendsData)
        // console.log(friendsData)
    })

    app.get('/userid', function(req, res) {
        res.send(friendsData.length.toString())
    })
}

// form validation
