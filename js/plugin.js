$(document).ready(function(){
$('.owl-carousel').owlCarousel({
  autoplay:true,
  animateOut: 'slideOutDown',
  animateIn: 'flipInX',
  margin:30,
  smartSpeed:450,
  loop:true,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:1
    },
    1000:{
        items:1
    }
  }
})
});