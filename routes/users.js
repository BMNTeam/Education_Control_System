var express = require('express');
var router = express.Router();
var models = require('../models');
var bcrypt = require('bcrypt');

var saltRounds = 12;
var someSyntaxSalt = 'BMNTeamSaltHaHa4562ai23$!@%!@35@#%rasDFsadfZXv2345';

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
    //Google reCaptcha checking

    // Save request to a variables
    var subject = req.body.subject;
    var pwd = req.body.pwd;
    var email = req.belongsTo.email;

    //Save data to database
    models.User.findOrCreate({
        subject: subject,
        role: 'teacher',
        pwd: bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(pwd, someSyntaxSalt, (err, hash) => {
                //some callback;
            })
        }),
        email: email,
        rememberToken: ''
    }).then( response => {
        res.json(response);
    })
});

module.exports = router;
