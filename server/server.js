var express = require('express');
var food = require('./routes/food.js');


app = express();	

app.use(express.static('/public'));

app.get('/index.htm',function (req, res) {
	res.sendFile(__dirname + "/index.htm");
});

app.get('/process', function (req, res) {
	response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));
});

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/andrew*bowers', function(req, res) {   
   console.log("Got a GET request for /andrew*bowers with a wildcard");
   res.send('Page Pattern Match');
})

app.get('/food', food.findAll);

app.listen(8080, function () {	
	console.log(__dirname);
	console.log('listening on port %d', 8080);
});

