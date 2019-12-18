var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
const bodyParser = require('body-parser');

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// URL at which MongoDB service is running
var url = "mongodb://localhost:27017"; 
 
// A Client to MongoDB
var MongoClient = require('mongodb').MongoClient; 
 
// Make a connection to MongoDB Service
MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err; 
  console.log("Connected to MongoDB!");
  var dbo = db.db("mydb");
  db.close();
});

app.get('/',function(req,res) {
    res.sendFile('index.html', { root: __dirname });
  });

app.listen(port, () => console.log(`App listening on port ${port}!`))