const mongoose = require ('mongoose');
const config = require('./config');
const dbUri = config.mongoUri;

module.exports = function () {
    mongoose.connect(dbUri, {
        useUnifiedTopology: "true",
        useNewUrlParser: "true",
        useFindAndModify: "true",
    }, (err) => {
        if (err) {
            console.log({err});
        } else {
            console.log("mongodb has been connected");
        }
    })
}