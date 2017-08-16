
// Shrink navbar on scroll

var $ = jQuery.noConflict();

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.navbar').addClass('shrink');
  } else {
    $('.navbar').removeClass('shrink');
  }
});

console.log('adss');
