var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('style-guide', { title: 'Style Guide' });
});


module.exports = router;
