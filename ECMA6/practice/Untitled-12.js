// const a = [1, 2, 3]
// a.forEach(function (v, i, arr) {
//   console.log(v, i, arr, this)
// }, [10, 11, 12])

const a = [1, 2, 3];
const b = a.map(
  function(v, i, arr) {
    console.log(v, i, arr, this);
    return this[0] + v;
  },
  [10]
);

const arr = [1, 2, 3, 4];
const str = arr.reduce(function(res, item, index, array) {
  return res + item;
}, "");
console.log(str);

const arr = [10, 20, 30, 40, 50];
const r = arr.reduce(function(p, c) {
  return p + c;
});
console.log(r);

const tag = function(strs, arg1, arg2) {
  return { strs: strs, args: [arg1, arg2] };
};
const res = tag`순서가 ${1}이렇게 ${2}`;
console.log(res);

const addSuffix = function(strs, ...exps) {
  return strs.reduce(function(acc, curr, i) {
    let res = acc + curr + "_suffix ";
    if (exps[i]) res += exps[i];
    return res;
  }, "");
};
console.log(
  addSuffix`이 함수는${"각 문자열"}마다${"|_suffix|"}라는 글자를 추가합니다.`
);
