var image;

$(function(){
  image = $('#face');
  $('#headshot').mousemove(function(e){
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    $('#coords').html("X: " + x + " Y: " + y); 

    if(x >= 140 && x <= 267){
      image.attr('src','img/head5.jpg');
    } else if (x >= 268 && x <= 394) {
      image.attr('src','img/head4.jpg');
    } else if (x >= 395 && x <= 522) {
      image.attr('src','img/head3.jpg');
    } else if (x >= 523 && x <= 649) {
      image.attr('src','img/head2.jpg');
    } else if (x >= 650 && x <= 776) {
      image.attr('src','img/head1.jpg');
    }
  });
});

$(document).foundation();

document.write('<script src=' +
  ('__proto__' in {} ? 'javascripts/vendor/zepto' : 'js/vendor/jquery') +
  '.js><\/script>');

// 140 - 267
// 268 - 394
// 395 - 522
// 523 - 649
// 650 - 776