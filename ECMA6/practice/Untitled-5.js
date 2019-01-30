let a = 1;
function f() {
  console.log(a, b, c);
  let b = 2;
  console.log(a, b, c);
  if (true) {
    let c = 3;
    console.log(a, b, c);
  }
  console.log(a, b, c);
}
f();

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);
