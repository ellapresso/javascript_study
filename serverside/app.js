//main file, main application

const express = require("express");
const app = express();

app.use(express.static("public")); //정적인 파일이 위치할 디렉토리를 지정하는 부분

app.get("/", function(req, res) {
  res.send("Hello Home");
}); //url을 치고 들어올때 get방식으로 받음.

app.get("/route", function(req, res) {
  res.send("Image is <img src='/3131.jpg'>");
});

app.get("/login", function(req, res) {
  res.send("login page");
}); //  localhost:3000/login 에 접속하면 'login page'문구 볼 수 있음

app.listen(3000, function() {
  //3000번 포트 연결
  console.log("Connected port 3000");
});
