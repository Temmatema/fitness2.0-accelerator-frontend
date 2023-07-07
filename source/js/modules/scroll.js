const headerBtn = document.querySelector('.header__btn');

headerBtn.onclick = () => scrollToElement('tickets');

function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  element.scrollIntoView({behavior: 'smooth'});
}
