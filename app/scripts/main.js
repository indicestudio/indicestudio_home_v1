jQuery(document).ready(function(){
  jQuery('.menu-button').on('click', function(event){
    jQuery('.menu-line:eq(0)').toggleClass('menu-line-1');
    jQuery('.menu-line:eq(1)').toggleClass('menu-line-2');
    jQuery('.menu-line:eq(2)').toggleClass('menu-line-3');
    jQuery('.menu').toggleClass('opened');
    event.stopPropagation();
  });
  jQuery('.menu').click(function(event) {
    event.stopPropagation();
  });
  jQuery(function() {
    jQuery.scrollify({
      section : 'section',
      scrollbars: false,
      interstitialSection: 'footer'
      });
    });
  jQuery('.icon-arrow').click(function() {
    jQuery.scrollify.next();
  });
  jQuery('body').click(function() {
    if (jQuery('.menu').hasClass('opened')) {
      jQuery('.menu').removeClass('opened');
      jQuery('.menu-line:eq(0)').toggleClass('menu-line-1');
      jQuery('.menu-line:eq(1)').toggleClass('menu-line-2');
      jQuery('.menu-line:eq(2)').toggleClass('menu-line-3');
    }
  });
});

/* footer hover transition
  var colors = ["#d20204", "#ffcc00", "#83bf17","#009EE3","#E5007D"];

  jQuery('.red-logo').hover(function() {
    jQuery('footer').css('backgroundColor', function(){
      return colors[Math.floor(Math.random() * colors.length)];
    });
  });
*/

/* ----typed js ------*/
$('.header-subtitle').typed({
  strings: ['Indicestudio.', 'Multimedia.', 'Conocimiento.', 'Dedicados.'],
  typeSpeed: 140,
  showCursor: false,
  loop: true,
  backSpeed: 40
});


/* scroll reveal */
window.sr = ScrollReveal({
  duration: 1000,
  delay: 150,
  scale: 0.5,
  mobile: false,
  //reset: true,
  //origin: top
});

sr.reveal('.display-title');
sr.reveal('.display-paragraph', {delay:750});
sr.reveal('.red-logo', 300);



window.onkeydown = function(e) { 
  return !(e.keyCode == 32);
};