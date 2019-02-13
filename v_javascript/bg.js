const body = document.querySelector("body");

const Img_Number = 3;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * Img_Number);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
