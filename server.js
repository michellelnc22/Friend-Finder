//Dependencies
var express = require("express"); 

//Creating an express server
var app = express(); 

//Sets up an initial port 
var PORT = process.env.PORT || 8000; 

//Handles data parsing 
app.use(use.urlencoded({ extended: true })); 
app.use(express.json()); 

//Router
require("./routing/apiRoutes")(app); 
require("./routing/htmlRoutes")(app); 

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT); 
}); 