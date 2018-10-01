const mongoose = require('mongoose');
const mysql2 = require('mysql2');

const mongo = mongoose.connect("mongodb://root:abc123@ds115543.mlab.com:15543/user_feed", { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connected to the Mongo.')
});

const mysql = mysql2.createConnection({
    host: '176.58.119.238',
    user: 'dummy',
    password: 'dummypass',
    database: 'videoder'
});


module.exports = {
    mongo, mysql
}