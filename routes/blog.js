const express = require('express');
var home = express.Router();

home.get('/', (req, res)=>{
  res.render('titlepage.html');
});

home.get('/pptpage', (req, res)=>{
  res.render('pptpage.html');
});

module.exports = home;