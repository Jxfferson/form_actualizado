import { showModal, hideModal } from './modal.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('survey-form');
  const closeButton = document.getElementById('close-modal');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    showModal();
    form.reset();
  });

  closeButton.addEventListener('click', () => {
    hideModal();
  });
});