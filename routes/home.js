var express = require('express');
var router = express.Router();

router.get('/home', function (req, res, next) {
    res.render('home', {
        user : req.user.name,
        id: 3
    });
});

module.exports = router;