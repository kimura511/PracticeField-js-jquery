/**
 * 04-01　モーダルウィンドウ
 */
$(function(){
	//モーダルウィンドウを開く
	function showModal(event) {
		event.preventDefault();
		
		var $modalWin = $('#modalwin');
		
		$modalWin
		.removeClass('hide')
		.addClass('show')
		.on('click', 'button', function() {
			hideModal();
		});
	};
	//モーダルウィンドウを閉じる
	function hideModal() {
		$('#modalwin')
		.removeClass('show')
		.addClass('hide');
	};

	$('.show-modal').on('click', showModal);
});