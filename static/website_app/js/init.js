$(function(){

	$('.modal-trigger').leanModal({
		dismissible: true, // Modal can be dismissed by clicking outside of the modal
		
		}
	);

	$(".typed-message").typed({
		stringsElement: $('#typed-strings'), 
		/*typeSpeed: 150,
		startDelay: 1500,
		backSpeed: 100,
		backDelay: 500,*/
		callback: function() {
			$('#welcome-cta-button').slideDown();
		}, 
	});
});