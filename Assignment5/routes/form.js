var express = require('express');
var router = express.Router();
var slug = require('slug');
var random = require('faker');

var data = [];

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('form', {title: 'Form', data:data});
});

router.post('/', function(req, res, next){
    var newObject = {};
    newObject.name = req.body.name;
    newObject.email = req.body.email;
    data.push(newObject);
    console.log(data.length);
});


module.exports = router;

//Private Methods
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
