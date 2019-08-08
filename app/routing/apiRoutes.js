var friends = require("../data/friends.js"); 

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friends); 
    }); 

    app.post("/api/friends", function(req, res) {

        var thisUser = req.body
        var differences = []; 
         if (friends.length > 1) {
             friends.forEach(function(thisUser) {
                 var total = 0; 

                 for (var i = 0; i < thisUser.answers.length; i++) {
                    var others = user.answers[i]; 
                    var thisAnswer = thisUser.answers[i]; 
                    var difference = +others - +thisAnswer; 
                    total += Math.abs(difference); 
                 }

                 differences.push(total); 
                 console.log("Total Difference is: " + total); 
             });
             
             var minimumDifference = Math.min.apply(null, differences); 
             var bestMatch = []; 

             for (var i = 0; i < differences.length; i++) {
                 if (differences[i] === minimumDifference) {
                     bestMatch.push(friends[i]); 
                 }
                 console.log("Your best matches are: " + JSON.stringify(bestMatch)); 
             }

             res.join(bestMatch); 
         } else {
             res.join(friends); 
         }

         friends.push(thisUser); 
    }); 
}