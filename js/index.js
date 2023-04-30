console.log("Tap, tap, tap... is this thing on?");

$(document).ready(function(){

    /*! Fades in "about box" on load */
    $('.content-intro-box.letsfadein').css('display', 'none');
    $('.content-intro-box.letsfadein').fadeIn(1000);
    });

    /* scroll and reveal */
    var revealElement = $('section .reveal');
$(window).scroll(function() {
if($(window).scrollTop() + $(window).height() > $(document).height() - 1000) 

{       $(revealElement).addClass('show');
   } else if($(revealElement).hasClass('show') && $(window).scrollTop() + $(window).height() > $(document).height() - 1115) {
      $(revealElement).removeClass('show');
   }
});
