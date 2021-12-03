$( document ).ready(function() {
  console.log("Let's start the checklist...");

  $( document ).click(function() {
    $("#events").append("<li>You clicked wrong checklist</li>");
  });

  $(".foo").click(function() {
    $("#events").append("<li>You clicked the wrong part</li>");
  });

  $(".bar").click(function() {
    $("#events").append("<li>You clicked the bar area</li>");
  });

  $(".reddio").click(function(e) {
    console.log(e);
    if (e.button === 0) {
      $(".flibgibbet").text("You left clicked the pink part");
    }

    $('<p>', {
      text: 'You have probably not clicked '+ Math.floor(Math.random() * 10) + ' times!'
    }).appendTo(this);

  });

});