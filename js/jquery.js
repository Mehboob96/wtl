$(document).ready(function () {
	
	$('#one').on('click',function () {
		$(this).html("<b>You Just Clicked Me!</b>");

	});
	$('#two').on('click',function () {
		$('#four').slideToggle();
	});
	$('#three').on('click',function () {
		// body...
		$(this).slideToggle();
	});
	$('.f').on('click',function () {
		// body...
		$(this).fadeOut(600);
		$(this).fadeIn(500);
	});
	$('.f').on('click',function () {
		// body...
		$(this).fadeTo(1000,5);
	});

});