$(document).ready(function() {
  function scroll(id) {
     var scroll = "#scroll-" + id;
     $(scroll).click(function() {
        $('html, body').animate({
        scrollTop:$("#" + id).offset().top
     }, 600);
     return false;
     });
  };

  scroll("use");
  scroll("colors");
  scroll("typography");
  scroll("textures");
  scroll("logos");
  scroll("icons");
  scroll("buttons");
  scroll("images");
  scroll("header");
  scroll("subnav");
  scroll("footer");
  scroll("forms");


// $( document ).on( "click", function( event ) {
//   $( event.target ).closest( "#code" ).toggleClass( "open" );
// });
// // </s

  $(".expand-code").click(function(){
    $(this).siblings().toggleClass("open");
  });


  $('#mobile-menu-trigger').on('click', function(){
     $('#mobile-menu').toggleClass('expanded');
  });
  $('#mobile-menu a').on('click', function(){
     $('#mobile-menu').delay(500).queue(function(next){
      $(this).toggleClass('expanded');
      next();
    });
  });

  $('#header-trigger').on('click', function(){
     $('#header-menu').toggleClass('expanded');
  });
  $('#header-menu a').on('click', function(){
     $('#header-menu').delay(500).queue(function(next){
      $(this).toggleClass('expanded');
      next();
    });
  });


});

