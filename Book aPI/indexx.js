let express = require('express'),
mongoose = require('mongoose'),
bodyParser = require('body-parser');
let apiRoutes = require("./routess")
let app=express();

//configure bodyparser to hand post requests

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json);

//connect Mongoose and set conncetion variable 
mongoose.connect('mongodb://localhost/api', {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
const PORT = process.env.port || 3000;

//send message for default route

app.get('/',function(req,res){
    res.send('Express is running successfully');

});

app.use('/api', apiRoutes);

app.listen(PORT, function () { console.log("Server has started on port " + PORT);});