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
	.on('resize', function(){
		var $nav = $('.nav-global');
		var listFloat = $nav.find('li').css('float');
		if(listFloat == 'none') {
			$nav.css('display', 'none');
		} else {
			$nav.css('display', 'block');
		}
	});

	$('.menubtn > a')
	.on('click', function(){
		$('.nav-global').slideToggle(400);
	});
});

/**
 * 02-03　コンテンツを切り替えるタブ
 */
$(function(){
	$('.tab-menu')
	//aタグがクリックされた時にイベントが発動
	.on('click','li > a',function(event){
//これをいれることで、クリック時の画面線がなくなる
		event.preventDefault();
		var $this = $(this);

		//ボタンのアビアランスを変更する
		//兄弟要素のslectedが全て一旦外れる
		$this.parent().siblings()
		.removeClass('selected')
		//endはトラバースをキャンセルする要素
		//今回の場合はsiblings
		//キャンセルされて$this.parent()が有効になる
		.end()
		.addClass('selected');
		//コンテンツを切り替える
		var tabId = $this.data('tabid');
		$this.closest('.tab').find('.tab-contents').children()
		.each(function(){
			var $content = $(this);
			if($content.data('contentid')== tabId){
					$content.removeClass('hidden');
			} else {
				$content.addClass('hidden');
			}
		});
	});
});
