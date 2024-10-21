  
  
  
  
  
  
  
  
  
  
  
  
  
  
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    spaceBetween: 0 ,
    centeredSlides: true,
    loop:true,
    slidesPerView: "2",
    coverflowEffect: {
      rotate: 0,
      stretch:35,
      depth: 100,
      modifier:9 ,
      slideShadows: true,
    },
    autoplay:{
  
      delay:3000,
      disableOnInteraction:false,
    }
    ,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });