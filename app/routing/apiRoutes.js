//Require the data file 
var friends = require("../data/friends.js"); 

//Routing 
module.exports = function(app) {

    //Get the route and return friend data
    app.get("/api/friends", function(req, res) {
        res.json(friends); 
    }); 

    //Posts route for the api, takes in data and calculates a response    
    app.post("/api/friends", function(req, res) {


        var thisUser = req.body
        var differences = []; 

        //Makes sure there's more than one friend to compare to  
         if (friends.length > 1) {
             friends.forEach(function(thisUser) {
                 var total = 0; 

                 //For each answer, compares them and calculates the difference
                 for (var i = 0; i < thisUser.answers.length; i++) {
                    var others = user.answers[i]; 
                    var thisAnswer = thisUser.answers[i]; 
                    var difference = +others - +thisAnswer; 
                    total += Math.abs(difference); 
                 }

                 differences.push(total); 
                 console.log("Total Difference is: " + total); 
             });
             
             //Finds the miminum difference
             var minimumDifference = Math.min.apply(null, differences); 
             //If more than one friend is found, add them to the array
             var bestMatch = []; 

             for (var i = 0; i < differences.length; i++) {
                 if (differences[i] === minimumDifference) {
                     bestMatch.push(friends[i]); 
                 }
                 console.log("Your best matches are: " + JSON.stringify(bestMatch)); 
             }

             //Send best matches to user
             res.join(bestMatch); 
             //If there is only one person to compare them to, send them back that friend
         } else {
             res.join(friends); 
         }

         //Add user's data to the friend's database
         friends.push(thisUser); 
    }); 
}