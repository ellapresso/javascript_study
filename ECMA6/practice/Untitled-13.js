const setDecimalSeperators = function(strs, ...args) {
  return (
    args.reduce(function(p, c, i) {
      return (
        p + strs[i] + (c + "").replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")
      );
    }, "") + strs[strs.length - 1]
  );
};
const res = setDecimalSeperators`이 사과는 하나에 ${2000}원이고, 총 ${1234567}개를 구입하시면 총 ${2000 *
  1234567}원 이에요.`;
console.log(res);

const createCollection = {
  Map(keys, ...vals) {
    const m = new Map();
    vals.forEach(function(val, i) {
      m.set(keys[i].trim(), val);
    });
    return m;
  },
  WMap(keys, ...vals) {
    const wm = new WeakMap();
    for (let i = 0; i < vals.length; i += 2) {
      wm.set(vals[i], vals[i + 1]);
    }
    return wm;
  }
};

const wkeys = [{ a: 100 }, { b: 200 }];
const map = createCollection.Map`
  a ${10}
  b ${"what"}
  fn ${v => v + 10}`;
let wmap = createCollection.WMap`
  ${wkeys[0]} ${10}
  ${wkeys[1]} ${20}`;
console.log(map);
console.log(wmap);
