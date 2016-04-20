'use strict';

const PORT = 3000;

var http = require('http');
var fs = require('fs');
var md5 = require('md5');
 
// console.log(md5('message'));

var server = http.createServer((req, res) => {

  //console.log('reqqqqqqq', req);

  var params = req.url.split('/');
  params.shift(); // throwing out the empty string
  var resource = params.shift().toLowerCase();
  console.log('resource1111111', params);

  switch(resource) {
    case 'math': require('./math')(params, res); break;
    case 'str': require('./str')(params, res); break;

    case 'hash': require('./hash')(params, res); break;

    case '':
      // url is '/', serve
      var data = fs.readFileSync('./public/index.html', 'utf8');
 
      // console.log('data', data);
      res.end( data.toString() );
      break;

    default:
      // check if they're looking for a file
      var nextResource = params.shift();
      fs.readFile(`./public/${nextResource}` , (err, data) => {
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
