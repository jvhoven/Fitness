var express = require('express');
var app = express();

// Server static files
app.use('/public', express.static('public'));
app.use('/vendor', express.static('app/vendor'));

// Set jade as our renderer
app.set('view engine', 'jade');
app.set('views', __dirname + '/app/views');

// Router
var router = require('./app/routes/default.js');
app.use(router);

// Register server
var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("App listening at http://%s:%s", host, port);
});
