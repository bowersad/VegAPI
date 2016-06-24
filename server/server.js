var express = require('express');


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

app.listen(8080, function () {	
	console.log(__dirname);
	console.log('listening on port %d', 8080);
});

