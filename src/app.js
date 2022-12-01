const toggleBurger = (burgerElement, buttonsElement) => {
  /* придумать как навешать стили на бургер чтобы он не ломал верстку */
}

export default () => {
  const menuButtonsEl = document.querySelector('.header__buttons');
  const burgerButton = document.querySelector('.header__burger');

  toggleBurger(burgerButton, menuButtonsEl);
};

