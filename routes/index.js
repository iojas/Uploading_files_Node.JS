var express = require('express');
var router = express.Router();
var multer = require('multer')

var upload = multer({dest:  'public/uploads/'})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/',upload.any(),function(req, res, next) {
  console.log(req);
  res.send(req.files);
});

module.exports = router;
