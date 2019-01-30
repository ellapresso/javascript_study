const obj = {
  a: function() {
    console.log(this);

    const b = () => {
      console.log(this);
    };

    b();
  }
};
obj.a();

const a = (...rest) => {
  console.log(this, rest);
};
a.call({ a: 1 }, 1, 2, 3);
a.apply([], [4, 5, 6]);
const b = a.bind(null, 7, 8, 9, 10);
b();

const P = name => {
  this.name = name;
};
const j = new P("재남");

console.dir(P);
