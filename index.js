const express = require('express');

const app = express();
const port = 5000;

app.get("/name", (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application.html' });
    res.end(`
   <h1>Ajaero Christian Ikechukwu </h1>
    `);
});
app.listen(port, () => {
    console.log('server created on port' + port);
});