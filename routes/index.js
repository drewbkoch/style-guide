var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});
router.get('/style-guide', function(req, res) {
  res.render('style-guide', { title: 'Style Guide', scripts: ['javascript/style-guide.js'] });
});


module.exports = router;
