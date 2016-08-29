var tokenSecret;

exports.GetToken = function (req, res) {
	var twitterAPI = require('node-twitter-api');
	var twitter = new twitterAPI({
		consumerKey: 'h0FFhQAWnecQxc8v1IZtAtqLu',
		consumerSecret: 'l1jUe20HQM3jnCupDycKOlrUUvS5AulMVedCAH5StE4NR6jwfB',
		callback: ''
	});
	var accessToken;
	var accessTokenSecret;

	console.log("Getting here");

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


