$(document).ready(function() {

  $('form').on('submit', function(event) {

    var successNotification = function(success) {
      console.log(success);
    };

    var errorNotification = function(err) {
      console.log(err);
    };

    var url = 'https://onesignal.com/api/v1/notifications';

    var data = {
      app_id: 'c81c260c-d7c6-41f6-8333-4f8bb58d07ba',
      included_segments: ['All'],
      data: {'foo': 'bar'},
      contents: {
        en: $('input#textInput').val()
      },
      headings: {
        en: $('input#headings').val()
      },
      web_buttons: [
        {
          id: "redirect-button",
          text: "Go see it",
          icon: "http://68.media.tumblr.com/avatar_6c47a615e084_128.png",
          url: $('input#redirection').val()
        }
      ]
    };

    $.ajax({
      headers : {
        'Content-Type' : 'application/json',
        "Authorization": "Basic N2U5YTBhYjUtNTlkNy00NWYxLThmMzgtNzdhZTEyMTY0MGU1"
      },
      type: "POST",
      url: url,
      data: JSON.stringify(data),
      success: successNotification,
      error: errorNotification,
      dataType: 'JSON'
    });
    event.preventDefault();
  });

});
