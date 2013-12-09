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
      $('#banner-text').css('top', -(scrolled * .29) + 'px');
    }
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
});

///////////// display skills /////////////

$(document).ready(function(){
  $('#skills').click(function(){
    $('#content-section2').stop().slideToggle('slow');
  });
});

///////////// display about /////////////

$(document).ready(function(){
  $('#bio').click(function(){
    $('#about-bio').stop().slideToggle('slow');
  });
});

///////////// display image ///////////////

$(window).scroll(function() {
  if ($(this).scrollTop() > 800) {
    $('#img1').fadeOut(0);
  } else {
    $('#img1').fadeIn("fast");
  }
  if ($(this).scrollTop() > 802) {
    $('#img1-1').fadeIn("fast");
  } else {
    $('#img1-1').fadeOut(0);
  }
  if ($(this).scrollTop() > 1510) {
    $('#img2').fadeOut(0);
  } else {
    $('#img2').fadeIn("fast");
  }
  if ($(this).scrollTop() > 1511) {
    $('#img2-2').fadeIn("fast")
  } else {
    $('#img2-2').fadeOut(0);
  }
  if ($(this).scrollTop() > 2000) {
    $('#img3').fadeOut(0);
  } else {
    $('#img3').fadeIn("fast");
  }
  if ($(this).scrollTop() > 2001) {
    $('#img3-3').fadeIn("fast");
  } else {
    $('#img3-3').fadeOut(0);
  }
});

// $(window).scroll(function() {
//   var scroll = "first",
//                "second",
//                "third",
//                "fourth",
//                "fifth",
//                "sixth";
//   switch (scroll) {
//     case 'first':
//       ($(this).scrollTop() > 800) {
//         $('#img1').fadeOut("slow");
//       }
//       break;
//     case 'second':

//   }

// })



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





















