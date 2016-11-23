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
	//ブラウザ上でリサイズされた時の処理（モバイルを縦横に変更した時にも発生）
	.on('resize', function(){
		var $nav = $('.nav-global');
		//listタグで今回は判断
		var listFloat = $nav.find('li').css('float');
		//noneつまりモバイル用の時は表示しない
		if(listFloat == 'none') {
			$nav.css('display', 'none');
		} else {
		//それ以外ならば表示する
			$nav.css('display', 'block');
		}
	});

	$('.menubtn > a')
	.on('click', function(){
		$('.nav-global').slideToggle(400);
	});
});
