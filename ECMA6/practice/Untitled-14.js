// const f = function(x, y, z) {
//   x = x ? x : 4;
//   y = y || 5;
//   if (!z) {
//     z = 6;
//   }
//   console.log(x, y, z);
// };
// f(1);

// f(0, null);

const f = function(x, y, z) {
  x = x !== undefined ? x : 3;
  y = typeof x !== "undefined" ? y : 4;
  console.log(x, y);
};
f(0, null);

const getDefault = function() {
  console.log("getDefault Called.");
  return 10;
};
const sum = function(x, y = getDefault()) {
  console.log(x + y);
};
sum(1, 2);
sum(1);

const multiply = function(x, y = x * 2) {
  console.log(x * y);
};
multiply(2, 3);
multiply(2);
