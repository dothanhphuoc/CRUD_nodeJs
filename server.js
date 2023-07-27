const express = require('express');

const app = express();
const port = 7575;

app.get('/', (req, res) => {
    res.send('Do Thanh Phuoc Using Express');
})

app.get('/about', (req, res) => {
    res.send('Hello About Page');
})

app.listen(port, () => {
    console.log(`Server Runing in port: ${port} `)
})