var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',
  test: 'xxx',
  myname: 'oak'
});
});

module.exports = router;
