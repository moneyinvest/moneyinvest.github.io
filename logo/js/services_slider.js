$(document).ready(function(){
    $(".services_content").owlCarousel({items:3, loop:true, autoplay:true,autoplayTimeout:8000, autoplaySpeed:2000, responsiveClass:true,
      responsive:{
          0:{
              items:1,
              
          },
          600:{
              items:2,
              
          },
          900:{
              items:3,
          }
      }});
  });