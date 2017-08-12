const express = require('express');
const app = express();
const pug = require('pug');

const compiledFunction = pug.compileFile('views/login.pug');

app.get('/', (req, res) => {
    res.send(compiledFunction({
    title: 'Login'
}));
})

app.listen(3000, () => {
    console.log('Example listening on port 3000!')
})