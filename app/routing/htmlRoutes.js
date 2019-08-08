//Dependencies
var path = require("path"); 

//Routing
module.exports = function(app) {

    app.get("/survey", function(req, res) {
        res.sendFile(path.join(_dirname + "../public/survey.html")); 
    }); 

    app.get("/home", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html")); 
    });     

}; 