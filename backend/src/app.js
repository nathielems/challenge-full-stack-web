const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors())

const routes = require('./routes');
const basePath = '/v1';
app.use(bodyParser.json({ limit: '200kb' }));
app.use(bodyParser.urlencoded({ extended: true }));

routes.init(app, basePath);

module.exports = app;
