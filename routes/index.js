var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res) {
  request.get({url:'https://api.diy.org/explore/featured?limit=9&offset=0', json:true}, function (error, response, payload) {
	  if (!error && response.statusCode == 200) {
	  	res.render('index', { title: 'DIYx', data: payload });
	  }
  })
});

module.exports = router;
