var express = require('express');
var http = require('http');
var app = express();

app.set('port', process.env.PORT || 8080);
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

got_stuff = function(req, res) {
	var body = req.body;
	console.log(body);
	res.send(200, {
		status: 'success'
	});
}

app.post('/callback', got_stuff);


http.createServer(app).listen(app.get('port'), function() {
	console.log('\nExpress server listening on port ' + app.get('port'));
});
