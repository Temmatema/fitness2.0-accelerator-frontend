const videoBlock = document.querySelector('.workout__video');
let iframe = videoBlock.querySelector('iframe');

videoBlock.addEventListener('click', () => {
  videoBlock.dataset.isPlay = 'true';
  iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&controls=0';
});
