$(function(){

$('.tab-title li').on('click', function(){
  /* タブ */
  var th = $(this).index();  // 何番目のタブがクリックされたか
  var $tab_contents = $('.tab-contents li');
  $tab_contents.removeClass('active');
  $tab_contents.eq(th).addClass('active');

  /* スライドバー */
  var position = $(this).width() * th;  // スライダーの位置
  $('.tab-title-bar').css('left', position+'px');
});

});
