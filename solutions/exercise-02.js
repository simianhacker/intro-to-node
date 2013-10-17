var fs = require('fs');
var contents = fs.readFileSync('../data/exercise-02.txt', { encoding: 'utf8' });
console.log(contents);
