var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('port', process.env.PORT || 4100);

app.use(express.static(__dirname + '/node_modules'));
app.use(express.static(__dirname + '/public'));


var sess;
app.get('/', function(req, res){
	console.log('showing home page');
  res.sendFile(__dirname + '/index.html');
});

app.listen(app.get('port'), function(){
	console.log('Express started on http://localhost:' + 
		app.get('port') + '; press Ctrl-C to terminate.');
});
