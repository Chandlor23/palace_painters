const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/html/index.html');
});

app.get('/about', function (req, res) {
    res.sendFile(__dirname + '/html/about.html');
  });

app.get('/buy', function (req, res) {
    res.sendFile(__dirname + '/html/buy.html');
  });

app.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/html/contact.html');
  });

app.get('/faq', function (req, res) {
    res.sendFile(__dirname + '/html/faq.html');
  });

app.get('/pricing', function (req, res) {
    res.sendFile(__dirname + '/html/pricing.html');
  });

app.get('/projects', function (req, res) {
    res.sendFile(__dirname + '/html/projects.html');
  });
 
app.listen(5000);
console.log("Server Started on port 5000!");