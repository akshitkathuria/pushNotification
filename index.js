const express = require('express');

const { PORT_NO } = require('./config/constants');
const admin = require('./route/adminRoute')

const app = express();
app.use('/admin', admin)


app.listen(PORT_NO, (err) => {
    if (err) {
        console.log("Failed to Start Server");
        return;
    }
    console.log("Server is up on Port 3000")
});