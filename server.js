const express = require('express');
const models = require('./models')
const sequelize = require('sequelize');
const port = 4040;

const app = express();

app.listen(port, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", port);
})

module.exports = app;