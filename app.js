const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport   = require('passport');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const login = pug.compileFile('views/login.pug');

app.get('/login', (req, res) => {
    res.send(login({
    title: 'Login'
}));
})

app.listen(3000, () => {
    console.log('Example listening on port 3000!')
})