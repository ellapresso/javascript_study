// const OBJ = {
//     prop1 : 1,
//     prop2 : 2
//   }
//   OBJ.prop1 = 3
//   console.log(OBJ.prop1)

//   const ARR = [0, 1, 2]
// ARR.push(3)
// delete ARR[1]
// console.log(ARR)

// const OBJ = {}
// Object.defineProperty(OBJ, 'prop1', {
//   value : 1,
//   writable: false,
//   configurable: false
// })

// const OBJ2 = {
//   prop1 : 1
// }
// Object.freeze(OBJ2)

const OBJ = {
  prop1: 1,
  prop2: [2, 3, 4],
  prop3: { a: 1, b: 2 }
};
Object.freeze(OBJ);
OBJ.prop1 = 3;
OBJ.prop2.push(5);
OBJ.prop3.b = 3;
console.log(OBJ);

Object.freeze(OBJ.prop2);
OBJ.prop2.push(6);
console.log(OBJ);
