var tokenSecret;

exports.GetToken = function (req, res) {
	var twitterAPI = require('node-twitter-api');
	var twitter = new twitterAPI({
		consumerKey: 'GJx8RleUiEh2CPgvS1bKIC952',
		consumerSecret: 'WyIw3BQsGr3zg9tY5AzDMdKACMnBC7VcgZdnqnO5Ot0HcDveUJ',
		callback: ''
	});
	var tokenSecret;

	twitter.getRequestToken(function (error, requestToken, requestTokenSecret, results) {
		if (error) {
			console.log("Error getting OAuth request token : " + error);
		} else	{
			tokenSecret = requestTokenSecret;
		}
	});

	res.send("this");
}


