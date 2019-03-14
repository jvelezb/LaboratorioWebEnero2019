

var request = require('superagent');

var RemoteAPI = {

  get: function() {
    request.get('https://api.github.com/')
    	.set('Access-Control-Allow-Origin', '*')
      .set('Accept', 'application/json')
      .withCredentials()
      .end(function(err, response) {
        if (err) return console.error(err);

        console.log(response.body);
      });
  }
};

module.exports = RemoteAPI;