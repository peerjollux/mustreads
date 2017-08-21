
// Shrink navbar on scroll

var $ = jQuery.noConflict();

$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.navbar').addClass('navbar--shrink');
  } else {
    $('.navbar').removeClass('navbar--shrink');
  }
});
