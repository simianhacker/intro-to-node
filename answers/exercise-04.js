var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  var options = { encoding: 'utf8' };
  fs.readFile('../data/exercise-03-2.txt', options, function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  });
}).listen(1337, '127.0.0.1');
