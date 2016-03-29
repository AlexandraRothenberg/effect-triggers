var $body = $('body');
var $box = $('.box');
var $showbtn = $('.btn-show-hide');

$showbtn.on('click', function () {
  $box.toggleClass('box-trans');
});

//$body.on('click', '.btn-show-hide', function () {
//  $(this).toggleClass('box');
//});

//$body.on('transitionend', '.bubble', function () {
//  $(this).remove();
//});