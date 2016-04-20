'use strict';

module.exports = function(params, res) {

  var operation = params.shift();  // math, pow, etc.

  switch(operation) {
    case 'wordCount':
      require('./wordCount')(params, res);
    break;

    case 'age':
      require('./age')(params, res);
    break;

    default:
      res.statusCode = 404;
      res.write('Not Found.');
      res.end('\n');
  }
  res.end('\n');
};


