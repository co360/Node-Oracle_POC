var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.post('/', function(req, res, next) {

  var fname = req.body.email;
    // var token = req.body.token;
    // var geo = req.body.geo;

    // res.send(user_id + ' ' + token + ' ' + geo);
  res.send('respond with a resource '+ fname);
});


module.exports = router;
