/**
 * 03-01　アコーディオン
 */
$(function(){
	$('.accordion').on('click', 'li', function(){
		var $this = $(this);
		//コンテンツを開く
		$this
		.toggleClass('expanded')
		.children('.content')
		.slideToggle('fast')
		.end()
		.siblings()
		.removeClass('expanded')
		.children('.content')
		.slideUp('fast');
	});
});

/**
 * 03-02　ドロップダウンメニュー
 */
$(function(){
	$('.dropdown-menu').children('a')
	.on('click', function(event){
		event.preventDefault();
		event.stopPropagation();
		var $this = $(this);
		
		function closeItems() {
			$this.removeClass('open')
			.next().hide();
		}
		
		$this.parent().siblings('li')
		.each(function(){
			$(this).children('a')
			.removeClass('open')
			.next().hide();
		});
		
		if($this.hasClass('open')) {
			$this.removeClass('open')
			.next().hide();
			$('html').off('click', closeItems);
		} else {
			$this.addClass('open')
			.next().show();
			$('html').on('click', closeItems);
		}
	});
});

/**
 * 03-03 CSSを操作するアニメーション
 */
$(function(){
	$('.first')
	.on('mouseenter', '.btn-action', function(event){
		event.preventDefault();
		$(this).find('img')
		.css({
				'transition':'box-shadow 0.6s ease-in-out',
				'box-shadow':'0px 0px 12px 12px rgba(117, 180, 196, 0.5)'
		});
	})
	.on('mouseleave', '.btn-action', function(event){
		event.preventDefault();
		$(this).find('img')
		.css({
				'transition':'box-shadow 0.6s ease-in-out',
				'box-shadow':'none'
		});
	});
});