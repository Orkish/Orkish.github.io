///////// interactive image ////////////

var image;

$(function(){
  image = $('#face');
  $('#headshot').mousemove(function(e){
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    $('#coords').html("X: " + x + " Y: " + y);

    if(x >= 140 && x <= 267){
      image.attr('src','stylesheets/img/head5.jpg');
    } else if (x >= 268 && x <= 394) {
      image.attr('src','stylesheets/img/head4.jpg');
    } else if (x >= 395 && x <= 522) {
      image.attr('src','stylesheets/img/head3.jpg');
    } else if (x >= 523 && x <= 649) {
      image.attr('src','stylesheets/img/head2.jpg');
    } else if (x >= 650 && x <= 776) {
      image.attr('src','stylesheets/img/head1.jpg');
    }
  });
});
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


/////////////// top nav //////////////
$(window).scroll(function() { 
  if ($(this).scrollTop() > 600) {
    $('#top-nav').fadeIn();
  } else {
    $('#top-nav').fadeOut();
  }
});


////////////// homebanner /////////////


$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
    $('#banner-text').fadeOut(900);
  } else {
    $('#banner-text').fadeIn(500);
  }
});

///////////// Chart ////////////////
console.log($("#myChart"));
var ctx = $("#myChart").getContext("2d");
new Chart(ctx).Doughnut(data,options);


var data = [
  {
    value: 30,
    color:"#F7464A"
  },
  {
    value : 50,
    color : "#E2EAE9"
  },
  {
    value : 100,
    color : "#D4CCC5"
  },
  {
    value : 40,
    color : "#949FB1"
  },
  {
    value : 120,
    color : "#4D5360"
  }

];

Doughnut.defaults = {
  //Boolean - Whether we should show a stroke on each segment
  segmentShowStroke : true,
  
  //String - The colour of each segment stroke
  segmentStrokeColor : "#fff",
  
  //Number - The width of each segment stroke
  segmentStrokeWidth : 2,
  
  //The percentage of the chart that we cut out of the middle.
  percentageInnerCutout : 50,
  
  //Boolean - Whether we should animate the chart 
  animation : true,
  
  //Number - Amount of animation steps
  animationSteps : 100,
  
  //String - Animation easing effect
  animationEasing : "easeOutBounce",
  
  //Boolean - Whether we animate the rotation of the Doughnut
  animateRotate : true,

  //Boolean - Whether we animate scaling the Doughnut from the centre
  animateScale : false,
  
  //Function - Will fire on animation completion.
  onAnimationComplete : null
};








