'user strict';

$(function() {

  $('#imageButton').on('click', getEmailAddress);

  $('#mathButton').on('click', getMath);
  
  $('#ageCalculatorButton').on('click', getAge);

  $('#sentenceButton').on('click', getSentence);

});

// sentence'>
// sentenceReturn'

function getSentence() {

  var sentence = $('#sentence').val();

  sentence = encodeURIComponent(sentence);
  console.log('FrontEnd: sentence:', sentence);

  var location = "http://localhost:3000/str/wordCount/";
  var url = location + sentence;

  $.get({
    url: url,
    success: function(data) {
         $('#sentenceReturn').val(data); 
      
      },
    error: function(err) {
      console.log(err);
    },
    done: function (data) {
      // console.log('done:', data);
    }
  });
  
}




function getEmailAddress() {
  // console.log('click');

  var email = $('#emailInput').val();
  var location = "http://localhost:3000/hash/md5/";
  var url = location + email;
  // console.log('url', url);

  // var avatarHash = '';
  $.get({
    url: url,
    success: function(data) {
        $('#avatar').show();
        var avatarLocation = `https://s.gravatar.com/avatar/${data}`;
        var $image = $('<img>').attr('src', avatarLocation).attr('class', 'img-circle');
        console.log('$image', $image);
        $('#avatar').append($image);
      
      },
    error: function(err) {
      console.log(err);
    },
    done: function (data) {
      // console.log('done:', data);
    }
  });
}


function getMath() {

  var val = $('input[type="radio"]:checked').val();

  var txtMath1 = $('#txtMath1').val();
  var txtMath2 = $('#txtMath2').val();

  var location = `http://localhost:3000/math/${val}/`;
  var url = txtMath1 + '/' + txtMath2;

  var fullUrl = location + url;

  console.log('fullUrl', fullUrl);

  $.get({
    url: fullUrl,
    success: function(data) {

        $('#txtReturn').val(data);
      
      },
    error: function(err) {
      console.log(err);
    },
    done: function (data) {
      // console.log('done:', data);
    }
  });
}

function getAge() {

  var year = $('#ageYear').val();
  var month = $('#ageMonth').val();
  var day = $('#ageDay').val();

  var location = `http://localhost:3000/str/age/${year}/${month}/${day}/`;
  // var url = txtAge;

  var fullUrl = location;

  console.log('fullUrl', fullUrl);

  // debugger;

  $.get({
    url: fullUrl,
    success: function(data) {

        $('#ageReturn').val(data);

        debugger;
      
      },
    error: function(err) {
      console.log(err);
    },
    done: function (data) {
      // console.log('done:', data);
    }
  });

}

// <input type='text' id='age'>
// <button id="ageCalculatorButton">Click</button>

