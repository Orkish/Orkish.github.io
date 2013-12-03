///////// interactive image ////////////

// var image;

// $(function(){
//   image = $('#face');
//   $('#headshot').mousemove(function(e){
//     var x = e.pageX - this.offsetLeft;
//     var y = e.pageY - this.offsetTop;
//     $('#coords').html("X: " + x + " Y: " + y);

//     if(x >= 140 && x <= 267){
//       image.attr('src','stylesheets/img/head5.jpg');
//     } else if (x >= 268 && x <= 394) {
//       image.attr('src','stylesheets/img/head4.jpg');
//     } else if (x >= 395 && x <= 522) {
//       image.attr('src','stylesheets/img/head3.jpg');
//     } else if (x >= 523 && x <= 649) {
//       image.attr('src','stylesheets/img/head2.jpg');
//     } else if (x >= 650 && x <= 776) {
//       image.attr('src','stylesheets/img/head1.jpg');
//     }
//   });
// });
// 140 - 267
// 268 - 394
// 395 - 522
// 523 - 649
// 650 - 776

//////////////// foundation ///////////////////

$(document).foundation();

document.write('<script src=' +
  ('__proto__' in {} ? 'javascripts/vendor/zepto' : 'js/vendor/jquery') +
  '.js><\/script>');

///////////////// parallax ///////////

$(document).ready(function() {
    $(window).scroll(function(e){
      parallax();
    });
    function parallax() {
      var scrolled = $(window).scrollTop();
      $('#banner-text').css('top', -(scrolled * .19) + 'px');
    }
  });

////////////// homebanner /////////////


$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
    $('#banner-text').stop().fadeOut(100);
  } else {
    $('#banner-text').fadeIn(500);
  }
});

///////////// Chart ////////////////





