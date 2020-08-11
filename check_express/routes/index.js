const express = require('express');
const app = express();
const port = 4000;

app.set('view engine', 'pug');
app.set('views', './views');

/* Defining a middleware */
const myLogger = function(req, res, next){
  var d = new Date();
  var day = d.getDay();
  var hour = d.getHours();
  
  //console.log(d.getDay());
  //console.log(d.getHours());

  if(((day >= 1) && (day <= 5)) && ((hour >= 9) && (hour <= 17))){
    console.log("wa9t 9anouni !!!");
    next();
  }else
  {
    console.log("Barra rawa7 !!!");
    res.render('content', {
      error : true
    });
  }
}

/* Calling the middleware */
app.use(myLogger);

/* Load the content with Home component page. */
app.get('/', function(req, res) {
  res.render('content', {
    home : true
  });
});

/* Load the content with Services component page. */
app.get('/services', function(req, res) {
  res.render('content', {
    services : true
  });
});

/* Load the content with Contact component page. */
app.get('/contact', function(req, res) {
  res.render('content', {
    contact : true
  });
});

app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});

module.exports = app;