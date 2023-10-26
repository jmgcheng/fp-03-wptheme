$(document).ready(function(){


	/**/
	$('#js-totop').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop : 0},800);
	});


	/**/
	$('.lang-trigger').on('click', function(e){
		e.preventDefault();
		//$(this).toggleClass('is-open');
		var $o_target = $(this).next();
		$o_target.toggleClass('is-open');
	});


	/**/
	$('.nav-main-sp-trigger').on('click', function(e){
		e.preventDefault();
		var $o_target = $(this).next();
		$o_target.toggleClass('is-open');
	});


	/**/
	$('.sort-trigger').on('click', function(e){
		e.preventDefault();
		var $o_target = $(this).next();
		$o_target.toggleClass('is-open');
	});	


});
