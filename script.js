var swiper = new Swiper('.social-content', {
    
  effect: 'coverflow',
  grabCursor: true,
  loop:true,
  slidesPerView: 4,
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  });

  var swiper = new Swiper('.work-content', {
    slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      loop: true,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });