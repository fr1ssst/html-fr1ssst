import modalWindow from './modal-window';

// Initialize modal window for new band
const modalWindowNewBand = new modalWindow('Create a new band');
const buttonNewBand = document.querySelector('.button-new-band');

buttonNewBand.addEventListener('click', () => {
  modalWindowNewBand.show();
});