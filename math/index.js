'use strict';

module.exports = function(params, res) {

  console.log('math index');

  var operation = params.shift();  // math, pow, etc.



  switch(operation) {
    case 'square':
      var num = params[0];
      var square = Math.pow(num, 2);
      res.write(`${square}`);
      break;
    case 'cube':
      var num = params[0];
      var cube = Math.pow(num, 3);
      res.write(`${cube}`);
      break;
    case 'pow':
      var base = params[0];
      var exponent = params[1];
      var pow = Math.pow(base, exponent);
      res.write(`${pow}`);
      break;
    case 'sum':

      // var sum = params.reduce((acc, num) => {
      //   return acc + parseInt(num);
      // }, 0);
      // res.write(`${sum}`)

      var sum = require('./sum')(params, res);
      res.write(`${sum}`);

      break;
    default:
      res.write('Default.');
  }
  res.end('\n');
};

function randNum() {
  return Math.floor(Math.random() * 100);
}
