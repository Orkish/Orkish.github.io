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
    $(window).scroll(function(){
      parallax();
    });
    function parallax() {
      var scrolled = $(window).scrollTop();
      $('#banner-text').css('top', -(scrolled * 0.29) + 'px');
    }
  });

////////////// Tag-ling ///////////////

$(function() {
  $(".tag-line").fadeIn(2000);
});

////////////// homebanner /////////////


$(window).scroll(function() {
  if ($(this).scrollTop() > 150) {
    $('#banner-text').stop().fadeOut("fast");
  } else {
    $('#banner-text').fadeIn("fast");
  }
});

///////////// display projects /////////////

$(document).ready(function(){
  $('#recent-projects').click(function(){
    $('#content-section1').stop().slideToggle('slow');
  });

///////////// display experiments /////////////

  $('#experiments').click(function(){
    $('#content-section-ex').stop().slideToggle('slow');
  });

///////////// display skills /////////////


  $('#skills').click(function(){
    $('#content-section2').stop().slideToggle('slow');
  });


///////////// display about /////////////


  $('#bio').click(function(){
    $('#about-bio').stop().slideToggle('slow');
  });
});

///////////// display text ////////////////

$(document).ready(function(){
  $("#show1").click(function(){
    $("#display-text1").stop().slideToggle("slow");
  }),
  $("#show2").click(function(){
    $("#display-text2").stop().slideToggle("slow");
  }),
  $("#show3").click(function(){
    $("#display-text3").stop().slideToggle("slow");
  });
});





















