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

$(function(){
  var intervalId;
  setTimer();
  function setTimer(){
    intervalId = setInterval(autoClick,5000);
  }
  function autoClick(){
    $('.slide').children('a.next').click();
  }
  function changeImage($click){
    // console.log($click);
    //currentが付いているものを変数として取得
    var $current = $click.siblings('.container').children('.current');
    var $new;
    var findSelector = '';
    //クリックされたaタグのクラス名を判別する
    //nextなら、
    if($click.hasClass('next')){
      //$currentからみて、次のliタグ
      $new = $current.next();
      //findSelecterは繰り返し要素
      findSelector = ':first-child';
    } else {
      //$currentから見て前のliタグ
      $new = $current.prev();
      findSelector = ':last-child';
    }
    //$newは次の要素
    //それが単純にあるか、ないか？　が$new.length
    //そしてなかったら、戻すようのものが、findSelector
    //nextの場合は頭に持ってくる
    //prevの場合はお尻に持ってくる
    //もしも前後に要素がなかったときの処理の追加
    //取得した要素を調べるには、lengthを使用する
    //取得できなかったら0になる
    if($new.length == 0){
      //最初もしくは最後の要素をnewに追加する
      $new = $current.siblings(findSelector);
    }
    $current.removeClass('current');
    $new.addClass('current');
    setTimer();
  }
  // ボタンクリックで関数を呼び出す
  $('.slide')
  .on('click','>a',function(event){
    event.preventDefault();
    event.stopPropagation();
    //タイマーを一旦クリアにする関数
    clearInterval(intervalId);
    changeImage($(this));
  });
});

$(function(){
  $('#fetch').on('click',function(event){
    event.preventDefault();
    $this = $(this);
    //1 #fetchのhref属性を代入
    var ajaxUrl = $this.attr('href');
    // c-1
    //初期値ではajax/article1.json
    if(ajaxUrl != '#'){
      //2function(data){}が実行される
      $.get(ajaxUrl,function(data){
        //console.dir(data);
        //1 insertImgに挿入
        var $insertImg = $('<img>').attr('src',data.img);
        //2
        var $insertText = $('<p></p>').text(data.article);
        //3
        var $list = $('<li></li>')
                    .prepend($insertImg)
                    .append($insertText)
                    .css({"opacity":0});
        //4
        $('#ajax-list').append($list);
        $list.animate({'opacity':1},400);
        //リンク先を変更して読み込むデータファイルを変える
        //c-2　データが準備している数になったら打ち止め
        if(data.next == "") {
          $this
          .attr('href','#')
          .addClass('disabled')
        } else {
          //そうじゃないなら、nextをaタグのhrefに入れてあげましょう
          $this
          .attr('href',data.next)
        }
      });
    }
  });
});
