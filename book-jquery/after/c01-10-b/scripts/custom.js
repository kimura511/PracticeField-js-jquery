$(function(){
	//<p>がマウスオーバーされたらアウトラインを付ける
	$('p').on('mouseenter', function(){
		$(this).css('outline', '1px solid gold');
	})
	.on('mouseleave', function(){
		$(this).css('outline', 'none');
	});
	$('input[type=text]').on('focus', function(){
		$(this).css('background-color', 'orange');
	})
	.on('blur', function(){
		$(this).css('background-color', 'transparent');
	});
	$('table').find('td').on('click', function(){
		$(this).closest('table').find('td')
		.css('background-color', 'transparent');
		$(this).css('background-color', 'lightblue');
	});
	/*
	$('ul').css('background-color', 'yellowgreen');
	$('#ordered').css('background-color', 'wheat');
	$('.external').css('text-decoration', 'none');
	$('form p').css('border-bottom', '1px solid #ddd');
	$('tr:nth-child(even)').css('background-color', 'lightblue');
	$('input[type=text]').css('background-color', 'orange');
	$('h1, h2').css('color', 'steelblue');
	*/
});