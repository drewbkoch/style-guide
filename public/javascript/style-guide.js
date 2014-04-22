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