function a() {}
console.log(a.name);

const b = function() {};
console.log(b.name);

const c = function cc() {};
console.log(c.name);

const d = () => {};
console.log(d.name);

const e = {
  om1: function() {},
  om2() {},
  om3: () => {}
};
console.log(e.om1.name, e.om2.name, e.om3.name);

class F {
  static method1() {}
  method2() {}
}
const f = new F();
console.log(F.method1.name, f.method2.name);

const g = new Function();
console.log(g.name);
