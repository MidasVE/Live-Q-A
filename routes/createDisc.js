var express = require('express');
var router = express.Router();
var disc = require('../controllers/disc');

router.get('/discussion/create', function (req, res, next) {
    res.render('createDisc');
});

router.post('/discussion/create', disc.createDisc);

module.exports = router;