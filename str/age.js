'use strict';

module.exports = function(numStrs, res) {

  var year = numStrs[0];
  var month = numStrs[1];
  var day = numStrs[2];
  
  var birthDate =  new Date(year, month, day);
  var currentDate = new Date();

  var retage = age(year, month, day);
  // var str = decodeURIComponent(numStrs[0]);
  // decodeURIComponent(str);   

  res.write(retage);
  res.end('\n');
}

function age(year, month, day) {
    
    var d = new Date();
    var today = new Date();
    var targetDate = new Date(year, month, day);
    // var days = Math.abs(today.getDate() - targetDate.getDate());
    // var months = Math.abs(today.getMonth() - targetDate.getMonth());
    var years = Math.abs(today.getFullYear() - targetDate.getFullYear());


    // return years + " " + months + " " + days;
    return years.toString();
}
