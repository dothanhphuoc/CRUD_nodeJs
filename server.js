var http = require('http');
const express = require('express');

let app = express();

let port = 7575;

app.get('/', (req, res) => {
    res.send('Do Thanh Phuoc Using Express');
})

app.listen(port, () => {
    console.log(`Server Runing in port: ${port} `)
})