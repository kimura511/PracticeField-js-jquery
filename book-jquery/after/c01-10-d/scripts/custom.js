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
		var $this = $(this);
		$this.closest('table').find('td')
		.css('background-color', 'transparent');
		$this.css('background-color', 'lightblue');
	});
	//処理の流れ
	//ボックスに変化があった場合にイベントハンドラが実行される。
	$('input[type=checkbox]').on('change',function(){
		//まず、thisを代入する
		var $this = $(this);
		//遡って、親要素のlabelを指定する。
		$this.parent().css('color','black');
		//チェックが入っている要素を全部金にする
		$this.filter(':checked').parent().css('color','gold');
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
