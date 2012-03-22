jQuery(function () {
  var socket;

  socket = io.connect("/");
  socket.on("user:new", function (data) {
    console.log(data);
    $('ul#users').append($('<li/>', {
      text: data
    }));
  });

  $('#user_form').submit(function (event) {
    var $form = $(this);
    event.preventDefault();
    $.ajax({
      type: $form.attr('method'),
      url: $form.attr('action'),
      data: $(this).serialize(),
      success: function () {
        $form.find('input[name="user_name"]').val('');
      }
    });
  });

});
