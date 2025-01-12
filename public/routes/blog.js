const express = require('express');
var home = express.Router();

home.get('/', (req, res)=>{
  res.render('main.html');
});

home.get('/pptpage', (req, res)=>{
  res.render('pptpage.html');
});

home.get('/management', (req, res) => {
  res.render('management.html');
});

home.get('/debug', (req, res) => {
  res.render('debug.html');
});

home.get('/download', (req, res) => {
  res.render('download.html');
});

module.exports = home;