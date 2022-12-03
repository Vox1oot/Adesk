const toggle = (elem) => {
  if (elem.classList.contains('hidden')) {
    elem.classList.replace('hidden', 'flex');
    elem.scrollIntoView({block: "center", behavior: "smooth"});
    return;
  }

  setTimeout(() => {
    elem.classList.replace('flex', 'hidden');
  }, 100);
};

export default () => {
  const buttons =  document.querySelectorAll('.questions__btn');

  Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const answerElement = event.target.nextSibling.nextSibling;
      
      toggle(answerElement);
    })
  });
};

