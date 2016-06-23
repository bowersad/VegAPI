var express = require('express');


app = express();	
app.get('/',function (req, res) {
	res.send('Hello World');
});

app.put('/puthere', function (req, res) {
	res.send('you put here');
});

app.listen(8080, function () {
	console.log('listening on port %d', 8080);
});

