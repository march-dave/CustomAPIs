'use strict';

module.exports = function(numStrs, res) {

  // console.log('numStrs: ', numStrs);

  var wordCount = numStrs.length;
  console.log('wordCount:', wordCount);

  var arrChar = [];
  for (var i=0; i<numStrs.length; i++) {
      arrChar.push(numStrs[i].length);
  }

  for (var j=0; j<arrChar.length; j++){
    console.log('arrChar:', arrChar[j]);
  }

  var total = 
  arrChar.reduce(function (p, c) {
    return (p + parseInt(c));
  },0)

  var avg = total / arrChar.length;
  console.log('avg:', avg);

  var str = decodeURIComponent(numStrs[0]);
  decodeURIComponent(str);   

  res.write(str);
  res.end('\n');
}