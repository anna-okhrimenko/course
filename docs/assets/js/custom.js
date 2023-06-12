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