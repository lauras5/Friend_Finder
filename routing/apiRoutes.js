var friendsData = require("../data/friends")

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData)
        // console.log(friendsData)
    })

    app.post("/api/friends", function (req, res) {
        // console.log(friendsData)
    })
}
