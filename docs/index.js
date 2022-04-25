function SliderBox1__init() {
    const swiper = new Swiper(".slider-box-1 .swiper-container", {
      slidesPerView: 1,
      loop:true,
      navigation: {
        nextEl: ".slider-box-1 .swiper-button-next",
        prevEl: ".slider-box-1 .swiper-button-prev",
      },
    });
  }
  
  SliderBox1__init();
  $(window).scroll(function() {
    let scrollTop = $(window).scrollTop();
    
    if ( scrollTop == 0 ){
      $('.top-bar').removeClass('hover');
    }
    else{
      $('.top-bar').addClass('hover');
    }
  });
  
  TopBar__init();
  
  $(window).scroll(function() {
    let scrollTop = $(window).scrollTop();
    
    if ( scrollTop == 0 ){
      $('.top-gr').removeClass('hover');
    }
    else{
      $('.top-gr').addClass('hover');
    }
  });
  
  TopBar__init();