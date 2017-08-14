var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var content={
    title: 'Artical one|Srilekha KN',
    heading: 'Artical one',
    date: '13th Aug 2017',
    content:`<p>
                   This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical.
               </p>
               
               <p>
                   This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical.
               </p>
               
               <p>
                   This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical. This is the content for my first artical.
               </p>`
    
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/artical-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'artical-one.html'));
});

app.get('/artical-two', function (req, res) {
  res.sendFile('Artical two requested and will be served here');
});

app.get('/artical-three', function (req, res) {
  res.sendFile('Artical three requested and will be served here');
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','madi.png'));
});
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8080;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
