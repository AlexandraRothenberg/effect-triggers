var $body = $('body');
var $panel = $('.panel');
var $box = $('.box');
var $showbtn = $('.btn-show-hide');
var $movebtn = $('.btn-move');
var $diamond = $('.diamond');
var $collapsebtn = $('.btn-collapse-expand');
var $circle = $('.circle');
var $bouncebtn = $('.btn-bounce');
var $list = $('.list');
var $appendbtn = $('.btn-append');

$showbtn.on('click', function () {
  $box.toggleClass('box-trans');
});

$movebtn.on('click', function () {
  $diamond.toggleClass('diamond-move');
});

$collapsebtn.on('click', function () {
  $panel.toggleClass('collapser');
});

$bouncebtn.on('click', function () {
  $circle.addClass('bouncing');
});

$bouncebtn.on('animationend', function () {
  $circle.removeClass('bouncing');
});

$appendbtn.on('click', function () {
  $list.append('<li>BOO!</li>');
});
