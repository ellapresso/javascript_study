// let a = 10
// let b = 20
// function f(aa = a, b = b) {
//   console.log(aa, b)
// }
// f(1, 2)
// f(undefined, 2)
// f(1)
// f()

const a = function(a = 1, b = 2, c = 3) {
  console.log(arguments);
  console.log(a, b, c);
};
a();
a(4);
a(4, 5);
a(4, undefined, 6);
a(4, 5, 6);
