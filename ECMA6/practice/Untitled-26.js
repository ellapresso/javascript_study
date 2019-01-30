const phone = {
  name: "iPhone",
  color: undefined
};

const { name: n, version: v = "6+", color: c = "silver" } = phone;
console.log(n, v, c);

const { name, version = "X", color = "black" } = phone;
console.log(name, version, color);

const getUrlParts = url =>
  /^(https?):\/\/(\w{3,}\.[A-z.]{2,})(\/[a-z0-9]{1,}\/([a-z0-9\-.,]+))$/.exec(
    url
  );

const [, protocol, host, , title] = getUrlParts(
  "http://abc.com/es6/7-1.destructuring"
);
console.log(protocol, host, title);

const getArea = info => {
  const { width, height } = info;
  return width * height;
};
getArea({ width: 10, height: 50 });
