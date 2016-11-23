$(function(){
  $('.accordion')
  //liがクリックされると処理が開始される
  .on('click','li',function(){
    //クリックされたli
    var $this = $(this);
    //コンテンツを開く
    $this
    //それに対してexpandクラスがなければ、追加、あれば削除
    .toggleClass('expanded')
    //子要素に対してアコーディオンを開閉する
    .children('.content')
    .slideToggle('fast')
    .end()
    .siblings()
    .removeClass('expanded')
    .children('.content')
    .slideUp('fast');
  });
});

$(function(){
  $('.dropdown-menu').children('a')
  .on('click',function(event){
    event.preventDefault();
    event.stopPropagation();
    var $this = $(this);

    //複数のドロップダウンメニューがある時の対策
    //他のドロップダウンのメニューを全てたたむための処理
    $this.parent().siblings('li').children('a')
    .removeClass('open')
    .next().hide();

    if($this.hasClass('open')) {
      $this.removeClass('open')
      .next().hide();
//これから開く時はイベントハンドラを削除する
      $('html').off('click',closeItems);
    } else {
      $this.addClass('open')
      .next().show();
//これからたたむ時はイベントハンドラを設定する
      $('html').on('click',closeItems);
    }
    function closeItems(){
      $this.removeClass('open')
      .next().hide();
    }
  });
});

$(function(){
  $('.first')
  .on('mouseenter','.btn-action',function(event){
    event.preventDefault();
    $(this).find('img')
    .addClass('animate');
  })
  .on('mouseleave','.btn-action',function(event){
    event.preventDefault();
    $(this).find('img')
    .removeClass('animate');
  });

  $('.second')
  .on('mouseenter','.btn-action',function(event){
    event.preventDefault();
    $(this).find('img')
    .animate({'opacity': 0.5},300)
    .animate({'opacity':1}, 500);
  })
  .on('mouseleave','.btn-action',function(event){
    event.preventDefault();
    $(this).find('img')
    .animate({'opacity': 1}, 300);
  })
  .each(function(){
    try{
      event = ducument.createEvent('TouchEvent');
      $(this)
      .off('mouseenter')
      .off('mouseleave');
    } catch(err) {
    }
  });

  var value = 0.5;
  $('.third')
  .on('mouseenter mouseleave','.btn-action',function(event){
    event.preventDefault();
    var opacityValue = value;
    if(event.type == 'mouseenter'){
      opacityValue = value;
    } else {
      opacityValue = 1;
    }

    $(this).find('img')
    .animate(
      {opacity:opacityValue},
      {
        duration:500,
        step:function(now,tween){
          //console.log(now);
          //nowは透明度の変化
          //じゃあどこでセットされてる
          //stepのオプションとして変化している値？
          var rotate = 'rotate(' + (1 - now) * (360 / value) + 'deg)';
          console.log(rotate);
          $(this)
          .css({
            '-webkit-trasform':rotate,
            'transform':rotate
          });
        }
      }
    );
  })
  .each(function(){
    try{
      event = document.createEvent('TouchEvent');
      $(this)
      .off('mouseenter')
      .off('mouseleave');
    } catch(err) {
    }
  });
});
