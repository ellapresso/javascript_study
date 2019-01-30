const person = {
  _name: "재남",
  get name() {
    return this._name;
  },
  set name(v) {
    this._name = v;
  }
};
const descriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(descriptor.get.name);
console.log(descriptor.set.name);

// function Person(name) {
//   if (this instanceof Person) {
//     this.name = name
//   } else {
//     throw new Error('new 연산자를 사용하세요.')
//   }
// }
// var p1 = new Person('재남')
// console.log(p1)

// var p2 = Person('성훈')
// console.log(p2)

// var p3 = Person.call({}, '곰')
// console.log(p3)

// var p4 = Person.call(p1, '곰')
// console.log(p4)

function Person(name) {
  console.log(new.target);
  if (new.target === Person) {
    this.name = name;
  } else {
    throw new Error("Person 생성자함수를 new로 호출해야 해요!");
  }
}
function Android(name) {
  Person.call(this, name);
}
const p2 = new Android("재남봇");
