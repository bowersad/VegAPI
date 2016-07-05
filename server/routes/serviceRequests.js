http = require('http');

exports.MakeCall = function (req, res) {

  var options = {
    host: 'https://cmapi-sandbox.betahth.com',
    port: 80,
    path: '/servicerequests/servicetypes/?provider_type=0&provider_id=47856',
    method: 'POST'
  };


  http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      res.send('Body:' + chunk);
      console.log('BODY: ' + chunk);
    });
  }).end();
}