var colors = ["red", "white", "orange"];
var first = colors[0];
var second = colors[1];
var third = colors[2];
console.log(first, second, third);

// const arr = [1, 2, 3, 4, 5]
// const [a, ...b] = arr
// const [, , ...c] = arr
// console.log(a, b, c)

// const [a = 10, b = 20] = [undefined, 5];
// const [c, d = c * 2] = [5];
// const [e = f, f] = [undefined, 10];

const iu = {
  name: "아이유",
  age: 25,
  gender: "female"
};
const { name: n, age: a, gender: g } = iu;
console.log(n, a, g);
