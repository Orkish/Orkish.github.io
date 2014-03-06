///// Page load ////


//// Fullpage js ////

$(window).load(function() {
  $('#above').fadeIn('slow', 1500),

  $.fn.fullpage({
    verticalCentered: true,
    resize : true,
    slidesColor : 'none',
    anchors:[],
    scrollingSpeed: 400,
    easing: 'easeInQuart',
    menu: false,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: [],
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    autoScrolling: true,
    scrollOverflow: false,
    css3: false,
    paddingTop: 'none',
    paddingBottom: 'none',
    fixedElements: '#element1, .element2',
    normalScrollElements: '#element1, .element2',
    keyboardScrolling: true,
    touchSensitivity: 15,
    continuousVertical: false,
    animateAnchor: true,

    //events
    onLeave: function(index, direction){},
    afterLoad: function(anchorLink, index){},
    afterRender: function(){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    onSlideLeave: function(anchorLink, index, slideIndex, direction){}
  }),
  $(function() {
    var BV = new $.BigVideo();
    var vids = ['stylesheet/videos/byeny.mp4', 'stylesheet/videos/poolparty.mp4'];
    var slideA = $('#slide2');
    var slideB = $('#slide3');
  
    BV.init();

    $('.controlArrow.next').click(function(){
      BV.show(vids[0],{ambient:true});
    });
  });
});









