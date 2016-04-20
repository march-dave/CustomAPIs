'use strict';

const PORT = 3000;

var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
  var params = req.url.split('/');
  params.shift(); // throwing out the empty string
  var resource = params.shift().toLowerCase();

  if(req.url === '/') { // send index.html
    var data = fs.readFileSync('./index.html');
    console.log('data', data);
    res.end(data.toString());
    return;
  }

  if(req.url === '/main') { // send index.html
    var data = fs.readFileSync('./main.js');
    console.log('data', data.toString());
    res.end(data.toString());
    return;
  }


  switch(resource) {
    case 'math': require('./math')(params, res); break;
    // case 'str': require('./str')(params, res); break;

    case '':
      // url is '/', serve
      var data = fs.readFileSync('./index.html');
      res.end( data.toString() );
      break;

    default:
      // check if they're looking for a file
      fs.readFile(`./${resource}` , (err, data) => {
          if (err) {
            res.statusCode = 404;
            res.write('Not Found.');
            res.end('\n');
          } else { // file found
            res.end(data.toString());
          }
      });
  }
});

server.listen(PORT, function(err) {
  if(err) return console.log('error!:', err);
  console.log(`Node server listening on port ${PORT}`);
});

///   localhost:3000/str/
  //   ---->    BANANA
