var express = require('express'),
    app = express(),
    path = require('path');

app.configure(function(){
 	app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
 	  app.use(express.bodyParser());
  	app.use(express.methodOverride());
  	app.use(app.router);
  	app.use(express.static(path.join(__dirname, 'public')));
  	
});

var routes = require('./controllers/routes.js');

//routes
app.get('/app/', routes.index);

app.listen(3000);
console.log('Listening on port 3000');
