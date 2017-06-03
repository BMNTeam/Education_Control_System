var express = require('express');
var router = express.Router();
var models = require('../../models');

/* GET home page. */
router.get('/', function (req, res, next) {
    models.Students.findAll().then(students => {
        res.json(students)
    });
});

router.post('/', function (req, res, next) {

    var course =
    models.Students.create({
        course: 3,
        group: 2,
        direction: 4,

    });
});

module.exports = router;
