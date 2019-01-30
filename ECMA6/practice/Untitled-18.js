let originalArr = [2, 3];
const preArr = [-2, -1];
const sufArr = [6, 7];

// originalArr.unshift(1)
// originalArr.push(4)
// originalArr = [0, ...originalArr, 5]
// console.log(originalArr)

// const concatArr = preArr.concat(originalArr, sufArr)
// const restArr = [...preArr, ...originalArr, ...sufArr]
// console.log(concatArr, restArr)

// let originalArray = [1, 2];
// let copiedArray = [...originalArray];
// console.log(originalArray === copiedArray);

// originalArray.push(3);
// console.log(originalArray);
// console.log(copiedArray);

let originalArray = [
  {
    first: "Hello,",
    second: "World!"
  },
  {
    first: "Welcome",
    second: "ES6!"
  }
];
let copiedArray = [...originalArray];
console.log(originalArray[0].first);

copiedArray[0].first = "Hi,";
console.log(originalArray[0].first);
