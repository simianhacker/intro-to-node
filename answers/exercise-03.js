var fs = require('fs');
var options = { encoding: 'utf8' };

fs.readFile('../data/exercise-03-1.txt', options, function (err, data) {
  console.log('../data/exercise-03-1.txt loaded');
});

fs.readFile('../data/exercise-03-2.txt', options, function (err, data) {
  console.log('../data/exercise-03-2.txt loaded');
});

fs.readFile('../data/exercise-03-3.txt', options, function (err, data) {
  console.log('../data/exercise-03-3.txt loaded');
});
