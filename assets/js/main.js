(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
  }); 

  // owlCarousel
  $(".blog_slider").owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    navText: [
      '<i class="fas fa-arrow-circle-left"></i>',
      '<i class="fas fa-arrow-circle-right"></i>'
    ],
    nav: true,
    dots: false
  });

 // Video popUp
  $('#youtube').magnificPopup({
    type: 'iframe'
});
$('#youtube2').magnificPopup({
    type: 'iframe'
});

// Animation

document.querySelector('html').classList.remove('no-js');
    if (!window.Cypress) {

      AOS.init({
        mirror: true,
        duration: 1500,
        initClassName: 'aos-init',
        once: true,
      });
    }


})(jQuery);
