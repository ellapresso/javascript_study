const clockContainer = document.querySelector(".js-clock");
clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date();
  const minuts = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minuts < 10 ? `0${minuts}` : minuts
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
