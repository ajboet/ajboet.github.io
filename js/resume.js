(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top+28)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  //Scroll to top onLoad
  $(document).ready(function(){
    $('body, html').animate({ scrollTop: 0 }, 800);
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

  //Change sideNav on scroll
  $(window).on("scroll touchmove", function() {
    if ($(document).scrollTop() < $("#experience").position().top-140) {
        $('#sideNav').css('background', '#1a4b8e');
    };
    if ($(document).scrollTop() > $("#experience").position().top-140) {
        $('#sideNav').css('background', '#0A639F');
    };
    if ($(document).scrollTop() > $("#education").position().top-140) {
        $('#sideNav').css('background', '#30759B');
    };
    if ($(document).scrollTop() > $("#skills").position().top-140) {
        $('#sideNav').css('background', '#4690b9');
    };
    if ($(document).scrollTop() > $("#interests").position().top-140) {
        $('#sideNav').css('background', '#6ba6b1');
    };
    if ($(document).scrollTop() >= $("#awards").position().top-140) {
        $('#sideNav').css('background', '#b5bd73');
    };
});

})(jQuery); // End of use strict
