$(document).ready(function(){


  //テーブルのスクロールを解除（モバイル用）
  $("#damets").click(function(){

    if($.cookie("damets") == "ON"){
      //クッキーがある時
      $.cookie("damets","OFF", { expires: 365 });
        
      }else{
      //クッキーがない時
      //クッキーを追加
      $.cookie("damets","ON", { expires: 365 });

    }
  
  });

/*
  //クッキーぼ作成
  function cookie_maker(){
    
var str_c = "";
var str_s = "";

$('input:checked').map(function() {
  //nameを取得
  value = $(this).attr('name');
  str_c += value;
  str_c += "|";
  //console.log(value);
});

$('select option:selected').map(function() {
  //nameを取得
  var valname = $(this).parent().attr('name');

  //値を取得
  var value = $(this).val();

  //弾

  //セレクトボックスの値がなしだったらcontinue
  if(value == ""){
    return true;
  }

  str_s += valname;
  str_s += "-";
  str_s += value;
  str_s += "|";


});

console.log(str_c);
console.log(str_s);
$.cookie("wdame_c", str_c, { expires: 7 });
$.cookie("wdame_s", str_s, { expires: 7 });

  }
  //クッキーの作成～ここまで


//チェックボックスがクリックされた時
$("input").click(function(){
  cookie_maker();
});

//セレクトボタンが選択された時
$("select").change(function(){
  cookie_maker();
});

*/
});

