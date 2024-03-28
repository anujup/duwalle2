var menuToggle = document.querySelector('.fa-bars')
var navlinks  = document.querySelector('.links')
var showing = false
menuToggle.addEventListener("click", function(){
    navlinks.classList.toggle("showmenu")
    if (!showing) {
        menuToggle.className = menuToggle.className.replace("fa-bars", "fa-close")
        showing = true
    }else{
        menuToggle.className = menuToggle.className.replace("fa-close", "fa-bars")
        showing = false
    }

})

const swiper = new Swiper('.swiper-1', {
  // Optional parameters
  loop: true,
  speed: 800,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoplay: {
        delay: 2000,
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
// ------------------------ Event slider -------------------------

const teamSwiper = new Swiper('.team-swiper', {
  // Optional parameters
  loop: true,
  speed: 100,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  
  coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 400,
        modefier: 0, 

  },
  

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
