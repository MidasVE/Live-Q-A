const express = require('express');
const app = express();
const pug = require('pug');

const login = pug.compileFile('views/login.pug');

app.get('/login', (req, res) => {
    res.send(login({
    title: 'Login'
}));
})

app.listen(3000, () => {
    console.log('Example listening on port 3000!')
})