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

  
  var targetDate = new Date($( "#countdown" ).attr("data-target"));  
  var days;
  var hrs;
  var min;
  var sec;

  $(function() {
    timeToLaunch();
    setTimeout(countDownTimer,1001);
  });

  function timeToLaunch(){
    var currentDate = new Date();

    var diff = (currentDate - targetDate)/1000;
    var diff = Math.abs(Math.floor(diff));  

    days = Math.floor(diff/(24*60*60));
    sec = diff - days * 24*60*60;

    hrs = Math.floor(sec/(60*60));
    sec = sec - hrs * 60*60;

    min = Math.floor(sec/(60));
    sec = sec - min * 60;
  }


  function countDownTimer(){ 
      
    timeToLaunch();
    
    $( "#days .number" ).text(days);
    $( "#hours .number" ).text(hrs);
    $( "#minutes .number" ).text(min);
    $( "#seconds .number" ).text(sec);
    
    setTimeout(countDownTimer,1000);
  }

  function numberTransition(id, endPoint, transitionDuration, transitionEase){
    $({numberCount: $(id).text()}).animate({numberCount: endPoint}, {
        duration: transitionDuration,
        easing:transitionEase,
        step: function() {
          $(id).text(Math.floor(this.numberCount));
        },
        complete: function() {
          $(id).text(this.numberCount);
        }
    }); 
  };

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