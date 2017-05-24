/*
  What needs to change so that the page says "Go!"?
*/

$(document).ready(function(){
  console.log( "The page says:", $("h1").text() );
  $('body').find('h1').each(function() {
       var html= $(this).html().replace(/Ready?/g, "Go!");
        $(this).html(html);
    });
 });



$("h1").text("Go!");

if ( $("h1").text() === "Go!" ){
  console.log( "The page says:", $("h1").text() );
  console.log("Success!");
} else {
  console.log( 'Can you make it say "Go!"?' );
}
