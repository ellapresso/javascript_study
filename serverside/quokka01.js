a = [1, 2, 3];
console.log(a.sort());

function b(v1, v2) {
  return v2 - v1;
}
console.log(a.sort(b));

arr = [4, 1, 2, 3];
arr.sort(function(v1, v2) {
  return v2 - v1;
});
console.log(arr);

sort(); //sort is nor defined
