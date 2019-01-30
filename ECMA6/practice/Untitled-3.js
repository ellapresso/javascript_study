var value = 0;
var obj = {
  value: 1,
  setValue: function() {
    var self = this;
    self.value = 2;
    (function() {
      self.value = 3;
    })();
  }
};
obj.setValue();
console.log(value);
console.log(obj.value);

// let value = 0
// let obj = {
//   value : 1,
//   setValue : function () {
//     this.value = 2
//     {
//       this.value = 3
//     }
//   }
// }
// obj.setValue()
// console.log(value)
// console.log(obj.value)
