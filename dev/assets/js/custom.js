$(document).ready(function () {
  $('.slider-secret-block').slick({
    dots: false,
    arrows: false,
    autoplay: false,
    infinite: true,
    speed: 300,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
      
    ]
    
  });

});
  
// modal 

const modal = document.querySelector('.header-mobile_modal');
const modalBtnOpen = document.querySelector('.toggler');
const modalBtnClose = document.querySelector('.modal-close');
modalBtnOpen.addEventListener('click', () => {
  modal.classList.add('open');
});
modalBtnClose.addEventListener('click', () => {
  modal.classList.remove('open');
});