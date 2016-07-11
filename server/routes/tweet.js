

var tokenSecret;

exports.GetToken = function (res, req) {
	var twitterAPI = require('node-twitter-api');
	var twitter = new twitterAPI({
		consumerKey: 'GJx8RleUiEh2CPgvS1bKIC952',
		consumerSecret: 'WyIw3BQsGr3zg9tY5AzDMdKACMnBC7VcgZdnqnO5Ot0HcDveUJ',
		callback: ''
	});

	twitter.getRequestToken(function (error, requestToken, requestTokenSecret, results) {
		if (error) {
			console.log("Error getting OAuth request toke : " + error);
		} else	{
			tokenSecret = requestTokenSecret;
		}
	})
}


