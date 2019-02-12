const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

const User_LS = "currentUser",
  Show_CN = "showing";

function saveName(text) {
  localStorage.setItem(User_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(Show_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(Show_CN);
  greeting.classList.add(Show_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(User_LS);
  if (currentUser === null) {
    //로컬스토리지가 비어있을때
    askForName();
  } else {
    //로컬스토리지에 정보가 있을때
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
