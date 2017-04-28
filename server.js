var express    = require('express'); //making our application use this
var path       = require('path');
var Superhero  = require('./models/superhero');
var Villain    = require('./models/villain');
var app        = express();
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var heroRoutes = require('./routes/superheroes');
var villRoutes = require('./routes/villains');


//app.METHOD('URL LOCATION', fucntion(req, res){})
mongoose.connect("mongodb://127.0.0.1:27017/superheroes");//connects to our local database

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next){//this allows CORS - cuz hackers be hackin
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




//************BACK CODE TO KEEP AT THE END***********************************

//use all of the stuff we exported to heroRoutes (preference everything you access with "/api/superheroes")
app.use('/api/superheroes', heroRoutes);//mount the endpoint
app.use('/api/villains', villRoutes);//mount the endpoint

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/public/index.html'));
});

//Now we're building a little server
var server = app.listen(3001, function(){// takes a port and a "function" to run
  console.log('Node Server running HURRAY! on PORT 3001');
});
