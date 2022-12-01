const toggleBurger = (burgerElement, buttonsElement) => {
  burgerElement.addEventListener('click', () => {
    if (buttonsElement.style.display !== 'block') {
      buttonsElement.style.display = 'block';
      return;
    }
    buttonsElement.style.display = 'none';
  });
}

export default () => {
  const menuButtonsEl = document.querySelector('.header__buttons');
  const burgerButton = document.querySelector('.header__burger');

  toggleBurger(burgerButton, menuButtonsEl);
};

