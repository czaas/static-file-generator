var express = require('express'),
	cors = require('cors'),
	app = express();

app.use(cors());

app.all('/', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.get('/generate-files', function(req, res){
	res.send('Test!');
});

app.post('/generate-files', function(req, res){
	res.send('posting a file has been attempted.');
});

var server = app.listen('9000', function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Server running on: ', host, port);
});