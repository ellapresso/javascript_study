// var funcs = []
// for (var i = 0; i < 10; i++) {
//   funcs.push(function () {
//     console.log(i)
//   })
// }
// funcs.forEach(function (f) {
//   f()
// })

let funcs = [];
for (let i = 0; i < 10; i++) {
  funcs.push(function() {
    console.log(i);
  });
}
funcs.forEach(function(f) {
  f();
});

const PI = 3.141593;
PI = 3.14;
