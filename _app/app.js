var express = require('express'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	generateFiles = require('./generateFiles'),
	app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/generate-files', function(req, res){
	res.send('Test!');
});

app.post('/generate-files', function(req, res){
	//console.log(req.body);
	generateFiles(req.body);
	res.send('posting a file has been attempted.');
});

var server = app.listen('9000', function(){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log('Server running on: ', host, port);
});