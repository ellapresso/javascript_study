//main file, main application

const express = require("express");
const app = express();

app.locals.pretty = true;

app.set("view engine", "jade"); //지금은 pug, 과거에는 jade
app.set("views", "./views"); //templete file 저장할 폴더

//정적인 파일이 위치할 디렉토리를 지정하는 부분 (Default : Public , 보통 html같은 파일을 위치함 )
app.use(express.static("public"));

app.get("/templete", function(req, res) {
  res.render("temp", { time: Date(), _title: "pug" }); //templete.pug의 time변수에 time을 객체로 넘겨줌.
});
app.get("/", function(req, res) {
  res.send("Hello Home");
}); //url을 치고 들어올때 get방식으로 받음.

app.get("/dynamic", function(req, res) {
  var lis = "";
  for (let i = 0; i < 5; i++) {
    lis = lis + "<li>coding</li>";
  }
  const time = Date();
  const output = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>title</title>
  </head>
  <body>
    This file name is 'static'
    <ul>
    ${lis}
    </ul>
    ${time}
  </body>
</html>
`;
  res.send(output);
});

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
