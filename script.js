//Slide Animation
const imageCarousel = document.querySelector('#image-carousel');
let x = 1;

setInterval(() => {
  imageCarousel.style.backgroundImage = `url(./resource/img${x}.jpg)`;
  x++;

  if (x == 5) {
    x = 1;
  }
}, 5000);
