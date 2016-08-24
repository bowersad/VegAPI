var tokenSecret;

exports.GetToken = function (req, res) {
	var twitterAPI = require('node-twitter-api');
	var twitter = new twitterAPI({
		consumerKey: 'GJx8RleUiEh2CPgvS1bKIC952',
		consumerSecret: 'WyIw3BQsGr3zg9tY5AzDMdKACMnBC7VcgZdnqnO5Ot0HcDveUJ',
		callback: ''
	});
	var accessToken;
	var accessTokenSecret;

	twitter.getRequestToken(function (error, requestToken, requestTokenSecret, results) {
		if (error) {
			console.log("Error getting OAuth request token : " + error);
		} else	{
			accessToken = requestToken;
			accessTokenSecret = requestTokenSecret;
		}
	});

	twitter.statuses("update", {
        status: "Hello world!"
    },
    accessToken,
    accessTokenSecret,
    function(error, data, response) {
        if (error) {
            // something went wrong 
        } else {
            // data contains the data sent by twitter 
            res.send(data);
        }
    });

}


