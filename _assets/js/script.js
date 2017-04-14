$(document).ready(function(){

  document.documentElement.className = "js";    
  $.localScroll.defaults.axis = 'x';

  var slides = [
    { src: 'assets/images/slides/1.jpg' , dir: 'up' },
    { src: 'assets/images/slides/2.jpg' , dir: 'down' },
    { src: 'assets/images/slides/3.jpg' , dir: 'up' },
    { src: 'assets/images/slides/4.jpg' , dir: 'down' }
  ];

  $('#mainslide').crossSlide({ speed: 15, fade: 1 }, slides); 
  
  $('#nav').localScroll({
    target:'#innerright',
    hash: false,
    easing: 'easeInOutCubic',
    duration: 1000
  });
         
  $('#aboutscroller').bxSlider({
    mode: 'vertical',
    easing: 'easeInOutQuint',
    auto: false,
    controls: true,
    prevImage:'assets/images/up.png',
    nextImage:'assets/images/down.png',
    infiniteLoop: false,
    hideControlOnEnd: true,
    pager: true,
    pagerType:'short',
    pagerShortSeparator:'of',
    speed:800,
  });

  $('#resumescroller').bxSlider({
    mode: 'vertical',
    easing: 'easeInOutQuint',
    auto: false,
    controls: true,
    prevImage:'assets/images/up.png',
    nextImage:'assets/images/down.png',
    infiniteLoop: false,
    hideControlOnEnd: true,
    pager: true,
    pagerType:'short',
    pagerShortSeparator:'of',
    speed:800,
  });

  $('#contactscroller').bxSlider({
    mode: 'vertical',
    easing: 'easeInOutQuint',
    auto: false,
    controls: true,
    prevImage:'assets/images/up.png',
    nextImage:'assets/images/down.png',
    infiniteLoop: false,
    hideControlOnEnd: false,
    pager: true,
    pagerType:'short',
    pagerShortSeparator:'of',
    speed:800,
  });    
}); 

