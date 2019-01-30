const a = 10;
const b = 20;
const str = `${a} + ${b} = ${a + b}`;
console.log(str);

const counter = {
  current: 0,
  step: 1,
  count: function() {
    return (this.current += this.step);
  },
  reset: function() {
    return (this.current = 0);
  }
};
console.log(`${counter.count()} ${counter.count()}
${counter.reset()} $${counter.count()}
${counter.count()}$`);

console.log(`${[0, 1, 2]}`);
console.log(`${{ a: 1, b: 2 }}`);
console.log(
  `${function() {
    return 1;
  }}`
);
console.log(`${(() => 1)()}` + 1);

console.log(`Foo ${`Bar`}`);
console.log(`Foo ${`Bar ${`Baz`}`}`);
