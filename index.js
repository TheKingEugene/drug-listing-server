const express = require ("express");
const app = express();

app.get("/", function (req, res){
    //Logic
    res.send("Long Live The King Eugene")
});

app.listen(9000, function(){
    console.log("App listening to port 9000");
});