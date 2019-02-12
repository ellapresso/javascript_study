alert("I'm Working");

console.log("working!");

const a = 100;
console.log("a = ", a);
// a = 2;
// console.log(a); //error

const daysOfWeek = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun", true];

console.log(daysOfWeek);

const info = {
  name: "ella",
  age: "20",
  gender: "Female",
  phone: "010-4444",
  favMovies: ["job", "ring", "oldboy"],
  favFoods: [{ korea: "kimchi", japan: "sushi" }]
};
console.log(info);
console.log(info.name);

console.log(console);

function hello(ss) {
  console.log("hello!!" + ss);
  console.log("hello!!", ss);
}
hello("ss");
hello();

function pr(name, age) {
  return `hello ${name} you are ${age} years old`;
}

pr("ella", "13");

const hellow = pr("ella", "22");
console.log(hellow);

//////////////////////////////////////////////////////////////////////

const title = document.getElementById("title");

title.innerHTML = "Hello World";

function handleResize() {
  console.log("resizzze");
  console.log(event);
}
window.addEventListener("resize", handleResize);

function handleClick() {
  title.style.color = "pink";
}
title.addEventListener("click", handleClick);

/////////////////////////////////////////////////////////////////////

if (10 > 5) {
  console.log("hi");
} else {
  console.log("ho");
}

/////////////////////

const age = prompt("age?");

if (age > 18) {
  console.log("old");
} else {
  console.log("young");
}
