var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Preg Calc' });
});

/* get about us page */
router.get('/aboutus', function(req, res, next){
  res.render('aboutus',{title: "About Us"})
})

/* get pregnancy calculator page */
router.get('/pregcalc', function(req, res, next){
  res.render('pregcalc',{title: "About Us"})
})

module.exports = router;
