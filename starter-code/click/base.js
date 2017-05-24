console.log("Sanity Check: JS is working!");

$(document).ready(function(){
$('#imperatives span').onClick(function(){
    var selectedContent = $(this).text;
    append(selectedContent)
  }


  function append(){
    $('#imperatives span').each(function () {
      // var selectedContent = $('#imperatives span').text();
      $(ul).append('<li>'+ selectedContent+'</li>');

  })
  }

})
})
