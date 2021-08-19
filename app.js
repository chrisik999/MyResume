const express = require('express');
const User = require('./user');
const database = require('./database');
const mail = require('./mail');
const config = require('./config');
const path= require('path');
const nameRoute = require('./index.js');
const app = express();
const port = config.port;

database();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'))
app.post("/contact", (req, res) => {
    const user = req.body;
    console.log(user);
    User.create({
        name: user.name,
        email: user.email,
        message: user.message
    }, (err, newUser) => {
        if (err) return res.status(500).json({message: "not Successful",error: err});
        else {
            mail(req);
            return res.status(200).json({message: "success", user: newUser});
        }
    })
});

app.use(nameRoute);
app.listen(port, () => {
    console.log('server created on port' + port);
});