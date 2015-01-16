var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:id', function(req, res) {
  request.get({url:'https://api.diy.org/makers/'+req.params.id+'/projects', json:true}, function (error, response, payload) {
    if (!error && response.statusCode == 200) {
      res.render('maker', { title: payload.response.nickname, data: payload });
    }
  })
});

module.exports = router;
