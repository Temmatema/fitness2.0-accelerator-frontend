import {COACHES} from '../coaches-mock.js';

const coachCard = document.querySelector('#coach').content.querySelector('.coaches__card');
const parentBlock = document.querySelector('.swiper-wrapper');

COACHES.forEach((coach) => {
  const cardClone = coachCard.cloneNode(true);
  cardClone.querySelector('img').src = coach.url;
  cardClone.querySelector('.coaches__name').textContent = coach.name;
  cardClone.querySelector('.inner-name').textContent = coach.name;
  parentBlock.appendChild(cardClone);
});
