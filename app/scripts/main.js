jQuery(document).ready(function(){

	jQuery('.menu-button, .main-logo, .btn-callout').on('click', function(event){
		jQuery('.menu-line:eq(0)').toggleClass('menu-line-1');
		jQuery('.menu-line:eq(1)').toggleClass('menu-line-2');
		jQuery('.menu-line:eq(2)').toggleClass('menu-line-3');
		jQuery('.menu').toggleClass('opened');
		jQuery('.menu-button').toggleClass('circle-menu');
		event.stopPropagation();
	});
	jQuery('.menu').click(function(event) {
		event.stopPropagation();
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

	var colors = ['#eaeaea','#fff','#ffcc00','#d20204','#009EE3','#E5007D'];

	jQuery('.portafolio-logo').on('mouseenter', function() {
		jQuery('section#que').css('backgroundColor', function(){
			var rand = Math.floor(Math.random() * colors.length);
			return colors[rand]
		});
	});

	/* ----typed js ------*/
	$('.header-subtitle').typed({
		strings: ['indicestudio', 'multimedia', 'marketing', 'soluciones', 'chillanejos'],
		typeSpeed: 50,
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
	sr.reveal('.portafolio-logo', 600);


	/* tumblr blog feed */
	var myTumblrUrl = 'https://api.tumblr.com/v2/blog/somosindice.tumblr.com/info?api_key=eZQhx9eBfhXDe4xxsPEHowKCrMMhYCw5rkw04NVx77PceTpaYi';	

	var tumblrFeed = $.ajax({
		url: myTumblrUrl,
		crossDomain: true,
		data: {
			format: 'jsonp'
		},
		error: function(){
			console.log('Error API no cargada!')
		},
		success: function(data){
			console.log(data.response.blog.title);
		},
		type: 'GET'
	});

	window.onkeydown = function(e) {
		return !(e.keyCode == 32);
	};

	
});

