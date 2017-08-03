$(document).ready(function() {

  console.log('Register app');

  $('form').on('submit', function(event) {
    console.log('Send push notif');
    event.preventDefault();
  });

});
