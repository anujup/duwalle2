var dropdown = document.getElementsByClassName("fa-caret-down")
for (let index = 0; index < dropdown.length; index++) {
    let toggle = false
    dropdown[index].addEventListener("click", function(dets){
        let selectedWrapper = "."+dets.target.classList[2] + "-wrapper"
        let storeElement = document.querySelector(selectedWrapper)
        if (!toggle) {
            dets.target.className = dets.target.className.replace("fa-caret-down" , "fa-caret-up")
            storeElement.style.height = "auto"
            toggle = true
        }else{
            dets.target.className = dets.target.className.replace("fa-caret-up" , "fa-caret-down")
            storeElement.style.height = "326px"
            toggle = false
        }
            
    })
    
}

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
        depth: 100,
        modefier: 2, 
        slideShadows: false,

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

const reviewSwiper = new Swiper('.review', {
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
        depth: 100,
        modefier: 2, 
        slideShadows: false,

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


// ------------------------------------Shop-------------------------------------------------
