// Ths Friends.js hold all the array data
var friends = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        console.log(req.body);

        //Here we take the result of the user's survey POST and parse it
        var userData = req.body;
        var userScores = userData.scores;
        console.log(userScores); //BIG PROBLEM

        //This variable will calcualte the difference between the user's scores and the scores of each user in the database
        var totalDifference = 0;

        //Here we loop through all of the friend possibilites in the database
        for (var i = 0; i < friends.length; i++) {

            console.log(friends[i]);
            totalDifference = 0;

            //We then loop through all the scores of each friend
            for (var j = 0; j < friends[i].scores[j]; j++) {

                //We calculate the difference between the scores and sum them into the total difference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                //if the sum of the difference is less than the difference of the current best match
                if (totalDifference <= bestMatch.friendDifference) {

                    //reset the bestMatch to be the new friend
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }

        //Finally save the users data to the database 
        friends.push(userData);
        //Return JSON data
        res.json(bestMatch);
    });
}


