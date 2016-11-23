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
	.on('click', function(){
		var $this = $(this);
		if($this.hasClass('open')) {
			$this.removeClass('open')
			.next().hide();
		} else {
			$this.addClass('open')
			.next().show();
		}
	});
});