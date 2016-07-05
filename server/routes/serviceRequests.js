http = require('https');

exports.MakeCall = function (req, res) {

  var options = {
    host: 'cmapi-sandbox.betahth.com',
    port: 443,
    path: '/servicerequests/servicetypes/?provider_type=0&provider_id=47856',
    method: 'GET'
  };


  http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      
      console.log('BODY: ' + chunk);
    });
  }).end();
}