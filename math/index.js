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

    case 'sub':
      var first = params[0];
      var second = params[1];
      var sub = parseInt(first) - parseInt(second);
      res.write(`${sub}`);
      break;  

    case 'mul':
      var first = params[0];
      var second = params[1];
      var mul = parseInt(first) * parseInt(second);
      res.write(`${mul}`);
      break;  

    case 'div':
      var first = params[0];
      var second = params[1];
      var div = first / second;
      res.write(`${div}`);
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
