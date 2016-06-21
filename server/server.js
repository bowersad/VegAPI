//var express = require('express');
var http = require('http');

/*app = express();	
app.set('port',5000);
app.listen(app.get('port'), function () {
	console.log('listening on port %d', app.get('port'));
});*/

function handleRequest(request, response) {
		response.end('It works!! Path Hit:' + request.url);
}

const SERVERPORT = 8080;
var server = http.createServer(handleRequest);
server.listen(SERVERPORT, function() {
	console.log("Server listening on: http://localhost:%s", SERVERPORT);
})