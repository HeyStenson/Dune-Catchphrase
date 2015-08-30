// *~* require *~* //
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require("body-parser");
var _ = require('underscore');
var views = path.join(process.cwd(), 'views/');
var db = require('./models');

// *~* configure *~* //
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
app.use(bodyParser.urlencoded({extended: true}));

// *~* routes *~* //
app.get("/", function (req, res){
  // render index.html
  res.sendFile(path.join(views + 'index.html'));
});

// *~*~* phrases index path *~*~* //
app.get('/phrase', function(req, res){
	db.Phrase.find({}, function(err, phrases){
		if (err) {
      	return console.log(err);
		};
		res.send(phrases);
	});
});

app.post('/phrase', function (req, res){
 	var newPhrase = req.body;
	console.log(newPhrase);
	db.Phrase.create(newPhrase, function (err, phrase){
		if (err){
			console.log(err);
			return res.sendStatus(400);
			}
     res.send(phrase);
	})
});

app.delete('/phrase/:id', function(req, res){
	var id = req.params.id;
	db.Phrase.remove({_id: id}, function(err, success){
		if (err){
			console.log(err);
			return res.sendStatus(400);
		} else {
		res.sendStatus(200);
		}
	});
});

// *~* listen up *~* //
app.listen(3001, function(){
	console.log('listening on 3001!');
})