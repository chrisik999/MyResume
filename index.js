const express = require('express');

const router = express.Router();

router.get("/name", (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application.html' });
    res.end(`<h1>Ajaero Christian Ikechukwu </h1>`);
});


module.exports = router;
