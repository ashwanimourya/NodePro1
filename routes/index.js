var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/hello",function(req,res){
    res.sendFile(require('app-root-path').path + "/views/HelloWorld.html");
});

module.exports = router;

