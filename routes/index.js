var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res) {
  request.get({url:'https://api.diy.org/explore/featured?limit=5&offset=0', json:true}, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	res.render('index', { title: 'on camp', data: body });
	  }
  })
});

module.exports = router;
