$(function(){
	/**
	 * 05-01　JSONデータを取得する
	 */
	//データをロードする
	var shopdata;
	$.get('shopdata.json', function(data){
		shopdata = data;
		console.log(shopdata);
	});
});