/**
 * 04-01　モーダルウィンドウ
 */
$(function(){
	//モーダルウィンドウを開く
	function showModal(event) {
		event.preventDefault();
		
		var $shade = $('<div></div>');
		$shade
		.attr('id', 'shade')
		.on('click', hideModal);
		
		var $modalWin = $('#modalwin');
		var $window = $(window);
		var posX = ($window.width() - $modalWin.outerWidth()) / 2;
		var posY = ($window.height() - $modalWin.outerHeight()) / 2;
		
		$modalWin
		.before($shade)
		.css({left: posX, top: posY})
		.removeClass('hide')
		.addClass('show')
		.on('click', 'button', function() {
			hideModal();
		})
		.on('click', '.modal-close', function() {
			hideModal();
		})
	};
	//モーダルウィンドウを閉じる
	function hideModal() {
		$('#shade').remove();
		$('#modalwin')
		.removeClass('show')
		.addClass('hide');
	};

	$('.show-modal').on('click', showModal);
});

/**
 * 04-02　ウィンドウ上端でグローバルナビゲーションを固定する
 */
$(function(){
	$(window).on('scroll', function(){
		var scrollValue = $(this).scrollTop();
		//console.log(scrollValue);
		$('.fixedmenu')
		.trigger('customScroll', {posY: scrollValue});
	});

	$('.fixedmenu')
	.each(function(){
		var $this = $(this);
		$this.data('initial', $this.offset().top);
	})
	.on('customScroll', function(event, object){
		//console.log('customScroll %s', object.posY);

		var $this = $(this);
		
		if($this.data('initial') <= object.posY) {
			//要素を固定
			if(!$this.hasClass('fixed')) {
				var $substitute = $('<div></div>');
				$substitute
				.css({
					'margin':'0',
					'padding':'0',
					'font-size':'0',
					'height':'0'
				})
				.addClass('substitute')
				.height($this.outerHeight(true))
				.width($this.outerWidth(true));

				$this
				.after($substitute)
				.addClass('fixed')
				.css({top: 0});
			}
		} else {
			//要素の固定を解除
			$this.next('.substitute').remove();
			$this.removeClass('fixed');
		}
	});
});