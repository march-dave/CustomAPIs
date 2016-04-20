'user strict';

$(function() {

  $('#imageButton').on('click', getEmailAddress);

});

function getEmailAddress() {
  // console.log('click');

  var email = $('#emailInput').val();
  var location = "http://localhost:3000/hash/md5/";
  var url = location + email;
  // console.log('url', url);

  var avatarHash = '';
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
