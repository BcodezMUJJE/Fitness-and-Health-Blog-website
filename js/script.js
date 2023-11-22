
// for header

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

// for window scroll
window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  
  if(window.scrollY > 0){
    document.querySelector('.header').classList.add(active);
  }else{
    document.querySelector('.header').classList.remove(active);
  }
}



// for home section

var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
});
