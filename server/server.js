var express = require('express');

app = express();
	
app.set('port',5000);

app.listen(app.get('port'), function () {
	console.log('listening on port ' + app.get('port'));
})
