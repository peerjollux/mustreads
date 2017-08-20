
// Shrink navbar on scroll

var $ = jQuery.noConflict();

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.navbar').addClass('shrink');
  } else {
    $('.navbar').removeClass('shrink');
  }
});

$(document).ready(function() {

  var staggerCounter = 0;

  $('.card').addClass("hidden").viewportChecker({
      classToAdd: '',
      offset: 100,
      callbackFunction: function(elem) {
        staggerCounter++
        setTimeout(function(){
          staggerCounter--;
          $(elem).addClass("animated fadeInUp");
        }, staggerCounter*150)

      }
   });
});
