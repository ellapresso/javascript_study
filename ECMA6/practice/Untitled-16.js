const f = function(x, y, ...rest) {
  console.log(rest);
};
f(1, 2, true, null, undefined, 10);

// let person = {
//   name: 'name',
//   age: 30,
//   get personInfo() {
//     return this.name + ' ' + this.age
//   },
//   set personInfo(...val) {
//     this.name = val[0]
//     this.age = val[1]
//   }
// }
// console.log(person.personInfo);

function argsAlternate(...args) {
  console.log(args.length, arguments.length);
  console.log(args[0], arguments[0]);
  console.log(args[args.length - 1], arguments[arguments.length - 1]);
  args[1] = 10;
  arguments[1] = 20;
  console.log(args[1], arguments[1]);
}
argsAlternate(1, 2, 3, 4);
