var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('style-guide', { title: 'Style Guide' });
});
router.get('/kernel', function(req, res) {
  res.render('kernel-home', { title: 'Stuff Pages of App Made by Alea' });
});


module.exports = router;
