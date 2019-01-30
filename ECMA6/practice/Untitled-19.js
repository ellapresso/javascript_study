const { name, age } = {
  name: "재남",
  age: 30
};
console.log(name, age);

// const obj = {
//   name: 'foo',
//   getName() { return this.name }
// }
// console.log(obj);

const Person = {
  greeting() {
    return "hello";
  }
};
const friend = {
  greeting() {
    return "hi, " + super.greeting();
  }
};
Object.setPrototypeOf(friend, Person);
friend.greeting();

const obj = {
  a() {
    console.log("obj log");
  },
  log() {
    console.log(this);
  }
};
console.log(obj.a.name);
setTimeout(obj.a, 1000);
obj.log();
obj.log.call([]);
setTimeout(obj.log.bind("haha"), 2000);
