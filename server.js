const express = require('express');
const { greeting } = require('./user');

const app = express();

app.get('/user/:name', (req, res) => {
  res.json({ message: greeting(req.params.name) });
});

module.exports = app;
