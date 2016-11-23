/**
 * 02-01　開閉するボックス
 */
$(function(){
	$('.nav-info')
	.on('click', function(){
		$('.wrapper-headerinfo').toggle('slow');
	});
});