function scroll(id) {
   var scroll = "#scroll-" + id;
   $(scroll).click(function() {
      $('html, body').animate({
      scrollTop:$(id).offset().top
   }, 600);
   return false;
   });
};


scroll("colors");
scroll("typography");
scroll("textures");

$(".expand-jade-code").click(function(){
  $(this).parent().toggleClass("open");

});
$(".expand-sass-code").click(function(){
  $(this).parent().toggleClass("open");
});

