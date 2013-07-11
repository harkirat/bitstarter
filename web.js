var fs = require('fs');
var express = require('express');

var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  //response.send('Hello World2!');

  var content = fs.readFileSync('./index.html', "utf8").toString();
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
