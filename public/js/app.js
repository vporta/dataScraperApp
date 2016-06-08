$.getJSON('/titles', function(data) {
  for (var i = 0; i<data.length; i++){
    $('#titles').append('<p data-id="' + data[i]._id + '">'+ data[i].title + '<br />'+ 'https://www.kickstarter.com' + data[i].link + '</p>');
  }
});

$(document).on('click', 'p', function(){
  $('#notes').empty();
  var thisId = $(this).attr('data-id');

  $.ajax({
    method: "GET",
    url: "/titles/" + thisId,
  })
    .done(function( data ) {
      console.log(data);
      $('#notes').append('<h2>' + data.title + '</h2>');
    // <input type="text" class="form-control" placeholder="Text input">

      $('#notes').append('<input type="text" class="form-control" placeholder="Text input" id="titleinput" name="title" >');
      $('#notes').append('<textarea type="text" id="bodyinput" class="form-control" rows="3" name="body"></textarea>');
      $('#notes').append('<button data-id="' + data._id + '" id="savenote">Save Note</button>');
      $('#notes').append('<button data-id="'+ data._id + '" id="deleter">Delete Note</button>');

      if(data.note){
        $('#titleinput').val(data.note.title);
        $('#bodyinput').val(data.note.body);
      }
    });
});

$(document).on('click', '#savenote', function(){
  var thisId = $(this).attr('data-id');

  $.ajax({
    method: "POST",
    url: "/titles/" + thisId,
    data: {
      title: $('#titleinput').val(),
      body: $('#bodyinput').val()
    }
  })
    .done(function( data ) {
      console.log(data);
      $('#notes').empty();
    });

  $('#titleinput').val("");
  $('#bodyinput').val("");
});

$(document).on('click', '#deleter', function(){
  var selected = $(this).attr('data-id');
  $.ajax({
    type: "POST",
    url: '/delete/' + selected,
    success: function(response){
      console.log(response);
      selected.remove();
    }
  });
});
