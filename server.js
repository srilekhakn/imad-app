var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articals={
articalOne: {
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
    
        },
articalTwo:{
     title: 'Artical Two|Srilekha KN',
    heading: 'Artical Two',
    date: '14th Aug 2017',
    content:`<p>
                   This is the content for my first artical.  
               </p>`
        },
articalThree:{
    title: 'Artical Three|Srilekha KN',
    heading: 'Artical Three',
    date: '15th Aug 2017',
    content:`<p>
                   This is the content for my first artical.  
               </p>`
    
    }
};

function createTemplate(data){
    var title=data.title;
    var header=data.header;
    var date=data.date;
    var content=data.content;
    
var htmlTemplate=`
<html>
<head>
    <title>Artical-one|Srilekha KN</title>
    <meta name="viewport" content="width=device-width, initalscale=1" />
    <link href="/ui/style.css" rel="stylesheet"/>
</head>
<body>
    <div class="container">
            <div> 
                $(title)
            </div>
            
           <hr/>
           
           <h3>
               $(heading)
           </h3>
           
           <div>
               $(date)
           </div>
           
           <div>
               $(content)
           </div>
   </div>
</body>
</html> `;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/artical-one', function (req, res) {
  res.send(createTemplate(articalOne));
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
