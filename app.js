const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

const db = require('./controllers/db');

require('./config/passport')(passport);

mongoose.connect(db.url);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'liveqa'}));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/', require('./routes/index'));
app.use('/', require('./routes/home'));
app.use('/', require('./routes/logout'));

app.get('/login/facebook',
    passport.authenticate('facebook', { scope : 'email' })
);

app.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    function(req, res) {
        res.redirect('/home');
    });

app.listen(3000, function() {
    console.log('Example listening on port 3000!')
})