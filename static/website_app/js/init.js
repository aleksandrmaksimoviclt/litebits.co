$(function(){

	$(".typed-message").typed({
		stringsElement: $('#typed-strings'), 
		typeSpeed: 150,
		startDelay: 1500,
		backSpeed: 100,
		backDelay: 500,
		loop: true,
	});

	$('.scrollspy').scrollSpy();
});