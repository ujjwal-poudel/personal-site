process.env.NODE_ENV = "production";

const express = require('./config/express');
// const serverless = require('serverless-http');

const app = express();

app.listen(3000);

module.exports = app;

console.log("Server running at http://localhost:3000/");