'use strict';

module.exports = function(numStrs, res) {

  var str = decodeURIComponent(numStrs[0]);
  console.log('strs:11111111', str);

  console.log('numStrs: ', numStrs);

  var array = str.split(' ');

  var wordCount = array.length;
  console.log('wordCount:', wordCount);

  var arrChar = [];
  for (var i=0; i<array.length; i++) {
      arrChar.push(array[i].length);
  }

  var arrCharCount = 0;
  for (var j=0; j<arrChar.length; j++){
    // console.log('arrChar:', arrChar[j]);
      for (var k=0; k<=arrChar[j]; k++) {
        arrCharCount++;
      }
  }

  var total = 
  arrChar.reduce(function (p, c) {
    return (p + parseInt(c));
  },0)

  var avg = total / arrChar.length;
  console.log('avg:', avg);

  var ret = 'wordCount: ' + wordCount + '|' + 'avg:' +avg + '|' + 'total:' + total

  // var str = decodeURIComponent(numStrs[0]);
  // decodeURIComponent(str);   

  res.write(ret);
  res.end('\n');
}