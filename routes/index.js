var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage= multer.diskStorage({
  destination: function (req,file,cb) {
    cb(null,'public/uploads/');
  },
  filename: function (req,file,cb) {
    console.log(req);
    cb(null,Date.now()+file.originalname);
  }
});

var upload = multer({storage: storage});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/allFiles', function (req, res, next) {

    const testFolder = 'public/uploads/';
    const fs = require('fs');
    var fi = [];
    fs.readdir(testFolder, (err, files) = > {

        files.forEach(file = > {
        console.log(file);

    fi.push(file);

})
    res.render('allFiles', {fila: fi});


})


});


router.get('/public/images/:file(*)', function (req, res, next) {
    var file = req.params.file;
    var temp = __dirname;
    var temp2 = temp.substring(0, temp.length - 7);
    var path = temp2 + '/public/uploads/' + file;
    console.log(path);
    res.download(path);
});

router.post('/',upload.any(),function(req, res, next) {
  res.render('index');
  res.send(req.files);

});

module.exports = router;
