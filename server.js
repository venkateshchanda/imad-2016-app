var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var aritcles ={ 
'article-one':{
  title:'Article One |venky',
  heading:'Article One',
  date:'Sep 05',
  content:`
              <p>
                  This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
            </p>
            <p>
                  This is content of my first article.  This is content of my first article.  This is content of my first article.
                  This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
            </p>
            <p>
                  This is content of my first article.  This is content of my first article.  This is content of my first article.
                  This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
            </p>`
  
  
},
'article-two':{
    title:'Article Two |venky',
  heading:'Article Two',
  date:'Sep 06',
  content:`
              <p>
                  This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
            </p>
            <p>
                  This is content of my first article.  This is content of my first article.  This is content of my first article.
                  This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
            </p>
            <p>
                  This is content of my first article.  This is content of my first article.  This is content of my first article.
                  This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
            </p>`
  
  
},
'article-three':{
    title:'Article Three |venky',
  heading:'Article Three',
  date:'Sep 07',
  content:`
              <p>
                  This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
            </p>
            <p>
                  This is content of my first article.  This is content of my first article.  This is content of my first article.
                  This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
            </p>
            <p>
                  This is content of my first article.  This is content of my first article.  This is content of my first article.
                  This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
                    This is content of my first article.  This is content of my first article.  This is content of my first article.
            </p>`
  
  
},
};
function createTemplate(data){
var title =data.title;
var date=data.date;
var heading = data.heading;
var content=data.content;


var htmlTemplate= `
   <html>
    <head>
        <title>
           ${title}
        </title>
         <link href = "ui/style.css" rel=stylesheet />
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
               ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div >
            ${content}
            </div>
        </div>
    </body>
</html> 

`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get("/:articleName",function(req,res){
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get("/article-one",function(req,res){
     
    res.send(createTemplate(article-one));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
