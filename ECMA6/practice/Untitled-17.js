var birds = ["eagle", "pigeon"];
var mammals = ["rabbit", "cat"];
var animals = birds.concat("whale").concat(mammals);
console.log(animals);

const animals2 = [...birds, "whale", ...mammals];
console.log(animals2);

const values = [3, 4, 5, 6, 7, 8];
const sum = function(...args) {
  return args.reduce(function(p, c) {
    return p + c;
  });
};
console.log(sum(1, 2, ...values, 9, 10));

const str = "Hello!";
const splitArr = str.split("");
const restArr = [...str];
console.log(splitArr, restArr);
