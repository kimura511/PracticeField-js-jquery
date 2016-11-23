/**
 * 02-01　開閉するボックス
 */
$(function(){
	$('.nav-info')
	.on('click', function(){
		$('.wrapper-headerinfo').slideToggle(400);
	});
});

/**
 * 02-02　レスポンシブなナビゲーション
 */
 $(function(){
	$(window)
	.on('resize',function(){
		var $nav = $('.nav-global');
		var listFloat = $nav.find('list').css('float');
		if(listFloat == 'none'){
			$nav.css('display','none');
		} else {
			$nav.css('display'.'block');
		}
	});
 	$('.menubtn > a')
 	.on('click',function(){
 		$('.nav-global').slideToggle(400);
 	});
 });
