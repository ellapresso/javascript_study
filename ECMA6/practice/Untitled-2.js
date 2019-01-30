// console.log(a)
// if (true) {
//   let a = 10
//   if (true) {
//     const a = 20
//     console.log(a)
//   }
//   console.log(a)
// }
// console.log(a)

// if (true) {
//     let a = 10
//     if (true) {
//       console.log(a)
//       const a = 20
//     }
//     console.log(a)
//   }
//   console.log(a)

var value = 0;
var obj = {
  value: 1,
  setValue: function() {
    this.value = 2;
    (function() {
      this.value = 3;
    })();
  }
};
obj.setValue();
console.log(value);
console.log(obj.value);
