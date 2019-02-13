const fs = require("fs");

//Sync 동기
console.log(1);
const data = fs.readFileSync("text.txt", { encoding: "utf-8" });
console.log(data);

//Async 비동기
console.log(2);
fs.readFile("text.txt", { encoding: "utf-8" }, function(err, data) {
  console.log(3);
  console.log(data);
});
console.log(4);

//1,2,4,3 순서로 실행되는것을 확인 할 수 있음.
