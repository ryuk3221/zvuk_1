document.querySelectorAll('.questions__item-head').forEach(el => {
  el.onclick = (event) => {
    const questionParent = event.target.closest('.questions__item');
    questionParent.classList.toggle('questions__item--active');
    if (questionParent.classList.contains('questions__item--active')) {
      const questionText = questionParent.querySelector('p');
      questionText.style.height = questionText.scrollHeight + 'px';
      questionText.style.marginTop = '23px';
    }
    else {
      const questionText = questionParent.querySelector('p');
      questionText.style.height = '0';
      questionText.style.marginTop = '0px';
    }
  }
});

const formPopup = document.querySelector('.form-popup');

window.addEventListener('click', (event) => {
  if (event.target.classList.contains('questions-contacts__main-link')) {
    formPopup.classList.add('form-popup--show');
  }
  else if (event.target.classList.contains('form-popup') || event.target.classList.contains('form-popup__content')) {
    formPopup.classList.remove('form-popup--show');
  }
  else if (event.target.closest('.form-popup__closer')) {
    formPopup.classList.remove('form-popup--show');
  }
});
