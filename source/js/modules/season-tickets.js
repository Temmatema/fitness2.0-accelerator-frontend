const buttons = document.querySelectorAll('.tickets__button');
const cardsPrice = document.querySelectorAll('.card__price');
const ACTIVE_CLASS = 'tickets-active';
const prices = [5000, 1700, 2700];
buttons.forEach((btn, index) => btn.addEventListener('click', () => swapCards(btn, index)));


function swapCards(btn, index) {
  swapClass(btn);
  cardsPrice.forEach((el, id) => {
    switch (index) {
      case 0: {
        el.childNodes[0].nodeValue = ` ${prices[id]} `;
        el.dataset.price = `${prices[id]}`;
        break;
      }
      case 1: {
        el.childNodes[0].nodeValue = ` ${prices[id] * 3} `;
        el.dataset.price = `${prices[id] * 3}`;
        break;
      }
      case 2: {
        el.childNodes[0].nodeValue = ` ${prices[id] * 5} `;
        el.dataset.price = `${prices[id] * 5}`;
        break;
      }
      default:
        return el;
    }
    return 0;
  });
  return 0;
}

function swapClass(btn) {
  buttons.forEach((el) => {
    if (el.classList.contains(ACTIVE_CLASS)) {
      el.classList.remove(ACTIVE_CLASS);
    }
    btn.classList.add(ACTIVE_CLASS);
  });
}
