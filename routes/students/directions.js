var express = require('express');
var router = express.Router();
var models = require('../../models');

router.get('/', function(req, res, next){
   models.Directions.findAll().then( directions => {
       res.json(directions);
   })
});

router.post('/', function(req, res, next){
    var directionName = req.body.directionName;
    models.Directions.create({
        directionName: directionName
    }).then( direction => {
        res.json(direction);
    })
});

module.exports = router;