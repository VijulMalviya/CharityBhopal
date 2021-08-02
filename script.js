AOS.init();

$(document).ready(function(){
    $("#bar").click(function(){
      $(".navlinks").slideToggle("slow");
    });
  });
  $(".navlinks ul li").click(function(){
    $(".navlinks").slideUp("slow");
  });
